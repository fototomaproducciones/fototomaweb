// Español en la raíz (/obra), inglés bajo /en (/en/obra).
// Las páginas viven en src/pages/[...lang]/ y salen dos veces gracias a IDIOMAS.
// Cada texto se escribe en los dos idiomas, uno al lado del otro: {en ? 'English' : 'Español'}.

export type Lang = 'es' | 'en';

// para getStaticPaths de cada página
export const IDIOMAS = () => [{ params: { lang: undefined } }, { params: { lang: 'en' } }];

// ruta limpia: sin .html, sin /index, sin barra final (al construir, las páginas salen como obra.html)
export const limpiar = (pathname: string) =>
  pathname.replace(/\.html$/, '').replace(/\/index$/, '/').replace(/(.)\/$/, '$1') || '/';

export const idioma = (url: URL): Lang => {
  const p = limpiar(url.pathname);
  return p === '/en' || p.startsWith('/en/') ? 'en' : 'es';
};

// la misma ruta sin el /en
export const sinIdioma = (pathname: string) => {
  const p = limpiar(pathname);
  if (p === '/en') return '/';
  return p.startsWith('/en/') ? p.slice(3) : p;
};

// enlace interno en el idioma de la página: enlace('en', '/obra') → '/en/obra'
export const enlace = (lang: Lang, ruta: string) => {
  if (lang === 'es') return ruta;
  if (ruta === '/') return '/en';
  if (/^\/[?#]/.test(ruta)) return '/en' + ruta.slice(1);
  return '/en' + ruta;
};

// junta nombres: «A y B», «A and B»
export const juntar = (lang: Lang, nombres: string[]) => nombres.join(lang === 'en' ? ' and ' : ' y ');
