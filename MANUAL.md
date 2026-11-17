# Fototoma Producciones — sitio y marca

Todo lo de Fototoma vive en `D:\Fototoma`:

| Carpeta | Qué hay |
|---|---|
| `web` | El sitio (Astro). Este archivo. |
| `Marca` | Manual de marca en PDF, logos en SVG y PNG, fotos de perfil, imagen para compartir. Se genera solo (ver abajo). |
| `Datos Miembros` | Fotos y datos que mandan los integrantes. |

## Correr el sitio en el computador

```bash
cd D:/Fototoma/web
npm install        # solo la primera vez
npm run dev        # abre http://localhost:4321 (o el puerto que indique)
```

En el panel de Claude se llama `fototoma-dev` (puerto 4350).

## Dónde se cambia cada cosa

| Qué | Archivo |
|---|---|
| Obras (videos, roles, quién hizo qué, destacadas) | `src/data/obra.ts` |
| Equipo, músicos asociados, correo | `src/data/equipo.ts` |
| Canciones de «Escuchar» (YouTube o SoundCloud) | `PISTAS` en `src/data/equipo.ts` + carátula cuadrada en `src/assets/pistas/` |
| Cinta «Hemos trabajado para y con» | `src/components/Creditos.astro` |
| Colores, letras, botones, rótulos | `src/styles/global.css` |
| Manual de marca (la fuente del PDF) | `src/pages/marca.astro` → se ve en `/marca` |
| Geometría del logo | `scripts/generar-logo.py` |

Las imágenes van en `src/assets/` (`obra/`, `equipo/`, `fotofono/`). Al construir, Astro las convierte a AVIF y WebP en varios tamaños; no hay que optimizarlas a mano. Para una obra nueva: poner la miniatura en `src/assets/obra/<id-de-youtube>.jpg` y agregar la ficha en `obra.ts`.

Mientras se trabaja en local se ven avisos amarillos «PENDIENTE»; no salen en el sitio publicado.

## Español e inglés

El sitio está en los dos idiomas: español en la raíz (`/obra`) e inglés bajo `/en` (`/en/obra`). Arriba hay un botón ES / EN y en el pie un enlace «In English» / «En español» que llevan a la misma página en el otro idioma.

- Las páginas viven en `src/pages/[...lang]/` y cada una sale dos veces. Cada texto está escrito en los dos idiomas, uno al lado del otro: `{en ? 'English' : 'Español'}`. Al cambiar un texto, cambiar los dos.
- En los datos, la versión en inglés va en el campo `en` de cada ficha: en `obra.ts` solo los campos que cambian (`rol`, `ficha`, a veces `titulo`); en `equipo.ts`, `en` de cada codirector (rol, línea corta, bio) y de cada asociado. Si una obra nueva no trae `en`, en inglés sale con el texto en español.
- Los enlaces internos se escriben con `u('/ruta')` para que en inglés apunten a `/en/ruta`.
- Los títulos de obras y canciones con nombre propio se dejan en español; los descriptivos van traducidos.
- `/marca` existe solo en español. La 404 tiene versión en cada idioma (`/en/404` la sirve el Worker para las rutas `/en`).

**Cada visitante ve un solo idioma.** El Worker (`worker/index.ts`) decide en la primera visita: desde un país hispanohablante (lista `HISPANOS`) se queda en español; desde cualquier otro país pasa a la misma página en inglés, salvo que su navegador esté en español. Si la persona elige idioma en el menú (ES / EN o el enlace del pie), queda guardado en la cookie `idioma` por un año y el sitio ya no decide por la ubicación. A los buscadores y a las vistas previas de enlaces (WhatsApp, Facebook) no se les cambia el idioma, para que indexen las dos versiones.

## Rehacer la marca

1. Si cambia el logo: editar `scripts/generar-logo.py` y correr `npm run logo` (necesita Python con `fonttools` y `brotli`).
2. Con el sitio corriendo (`npm run dev`), en otra terminal: `npm run marca`.
   Esto saca en `D:\Fototoma\Marca`: los PNG de los logos (3000 px, fondo transparente), las fotos de perfil, la imagen para compartir y **Manual de marca Fototoma.pdf**. También actualiza `public/og.jpg`, `favicon-32.png` y `apple-touch-icon.png`.
   Si el sitio corre en otro puerto: `npm run marca -- http://localhost:4321`.

## Publicar

El sitio está en **https://fototomaproducciones.com** (www lleva al dominio sin www).

- Código: https://github.com/fototomaproducciones/fototomaweb (rama `main`).
- Hosting: Cloudflare, cuenta de fototomaproducciones@gmail.com, Worker `fototoma-web` con los dominios `fototomaproducciones.com` y `www.fototomaproducciones.com`. Configuración en `wrangler.jsonc`; el Worker (`worker/index.ts`) hace la redirección de www y pone caché larga a imágenes y estilos.

Para publicar un cambio:

```bash
cd D:/Fototoma/web
npm run publicar        # construye y sube a Cloudflare
git add -A && git commit -m "Qué cambió" && git push
```

La sesión de Cloudflare de Fototoma se guarda en `.cuenta-cloudflare/` (fuera de git) para no mezclarse con las cuentas de Dial y la RED Quynza. Si caduca: `npm run cloudflare-login` y aprobar en el navegador con la cuenta de Fototoma.

Para subir a GitHub, el repositorio usa la cuenta `fototomaproducciones` de `gh` (ya configurado en este repo, no hay que cambiar de cuenta).

## Lo que hace el sitio por quien lo visita

- Imágenes en AVIF/WebP del tamaño de cada pantalla, cargadas solo cuando se acercan.
- Las dos letras se precargan; el resto de variantes solo si se usan.
- Navegación con transición suave entre páginas y precarga de la página al pasar el mouse por un enlace.
- La música de «Escuchar» suena en un reproductor abajo que sigue sonando al cambiar de página.
- Los videos de YouTube y las pistas de SoundCloud no se cargan hasta dar play (la página pesa poco de entrada). Los videos se abren en una sala oscura sin salir de la página.
- Respeta «reducir movimiento» del sistema; se puede recorrer con teclado.
- Mapa del sitio (`sitemap-index.xml`), datos de la organización para buscadores e imagen para compartir en redes.
