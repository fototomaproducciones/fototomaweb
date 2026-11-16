// Worker de Fototoma: www → dominio sin www, y el resto lo sirven los archivos de dist/.
interface Env {
  ASSETS: { fetch: (req: Request) => Promise<Response> };
}

const DOMINIO = 'fototomaproducciones.com';

export default {
  async fetch(req: Request, env: Env): Promise<Response> {
    const url = new URL(req.url);
    if (url.hostname === `www.${DOMINIO}`) {
      url.hostname = DOMINIO;
      return Response.redirect(url.toString(), 301);
    }
    const res = await env.ASSETS.fetch(req);
    // las imágenes y scripts con huella en el nombre no cambian nunca: caché larga
    if (url.pathname.startsWith('/_astro/')) {
      const r = new Response(res.body, res);
      r.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
      return r;
    }
    return res;
  },
};
