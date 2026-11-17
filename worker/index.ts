// Worker de Fototoma: www → dominio sin www, idioma según la ubicación, y el resto lo sirven los archivos de dist/.
interface Env {
  ASSETS: { fetch: (req: Request | string) => Promise<Response> };
}
const DOMINIO = 'fototomaproducciones.com';

// Países donde se habla español: ahí el sitio abre en español; en el resto, en inglés.
const HISPANOS = new Set([
  'CO', 'ES', 'MX', 'AR', 'PE', 'VE', 'CL', 'EC', 'GT', 'CU', 'BO', 'DO', 'HN', 'PY', 'SV', 'NI', 'CR', 'PA', 'UY', 'PR', 'GQ',
]);
// Páginas que existen en los dos idiomas (sin /en)
const TRADUCIDAS = /^\/(?:obra|servicios|publicidad|equipo(?:\/[\w-]+)?|contacto|fotofono)?$/;
// Buscadores y vistas previas de enlaces: no se redirigen, para que vean e indexen las dos versiones
const ROBOT = /bot|crawl|spider|slurp|facebookexternalhit|whatsapp|telegram|preview|lighthouse|headless/i;

// ¿A esta visita le corresponde el inglés? Primero la ubicación; si el navegador está en español, español.
function prefiereIngles(req: Request): boolean {
  const pais = (req as Request & { cf?: { country?: string } }).cf?.country;
  if (pais && HISPANOS.has(pais)) return false;
  const idiomas = (req.headers.get('Accept-Language') || '').toLowerCase();
  const primero = idiomas.split(',')[0]?.trim() || '';
  if (primero.startsWith('es')) return false;
  return Boolean(pais || primero); // sin datos de ubicación ni de idioma, se queda en español
}

export default {
  async fetch(req: Request, env: Env): Promise<Response> {
    const url = new URL(req.url);
    if (url.hostname === `www.${DOMINIO}`) {
      url.hostname = DOMINIO;
      return Response.redirect(url.toString(), 301);
    }

    // Primera visita a una página en español desde fuera del mundo hispano → la misma página en inglés.
    // Si la persona ya eligió idioma en el menú (cookie «idioma»), se respeta su elección.
    const ruta = url.pathname.replace(/\.html$/, '').replace(/(.)\/$/, '$1');
    if (
      (req.method === 'GET' || req.method === 'HEAD') &&
      TRADUCIDAS.test(ruta) &&
      !/(?:^|;\s*)idioma=/.test(req.headers.get('Cookie') || '') &&
      !ROBOT.test(req.headers.get('User-Agent') || '') &&
      prefiereIngles(req)
    ) {
      const destino = new URL(ruta === '/' ? '/en' : `/en${ruta}`, url);
      destino.search = url.search;
      return new Response(null, {
        status: 302,
        headers: { Location: destino.toString(), 'Cache-Control': 'private, no-store', Vary: 'Accept-Language, Cookie' },
      });
    }

    let res = await env.ASSETS.fetch(req);
    // página no encontrada: la versión en inglés del 404 para las rutas /en
    if (res.status === 404 && (ruta === '/en' || ruta.startsWith('/en/'))) {
      const en = await env.ASSETS.fetch(new URL('/en/404', url).toString());
      res = new Response(en.body, { status: 404, headers: en.headers });
    }
    // las imágenes y scripts con huella en el nombre no cambian nunca: caché larga
    if (url.pathname.startsWith('/_astro/')) {
      const r = new Response(res.body, res);
      r.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
      return r;
    }
    return res;
  },
};
