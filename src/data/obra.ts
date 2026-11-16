// Obra de Fototoma. Cada pieza dice quién la hizo y qué hizo.
// `video` = id de YouTube (se reproduce en la página). `enlace` = afuera.
// `img` vive en src/assets/obra/ (se optimiza al construir).

export type Categoria = 'publicidad' | 'cine' | 'documental' | 'sesiones' | 'medios' | 'discos';

export const CATEGORIAS: Record<Categoria, string> = {
  cine: 'Cine, animación y escena',
  documental: 'Documental y series',
  publicidad: 'Publicidad y marcas',
  sesiones: 'Sesiones en vivo y videoclips',
  medios: 'Podcast y medios',
  discos: 'Discos y arreglos',
};

export type Persona = 'martin' | 'santiago' | 'juan';

export const NOMBRES: Record<Persona, string> = {
  martin: 'Martín Perea Tobón',
  santiago: 'Santiago García',
  juan: 'Juan Rizoma',
};

export interface Pieza {
  id: string;
  titulo: string;
  categoria: Categoria;
  quien: Persona[];
  rol: string; // lo que hizo Fototoma
  ficha?: string; // productora, cliente, año, formato
  video?: string;
  enlace?: string;
  enlaceTexto?: string;
  img: string;
  vertical?: boolean;
  destacada?: boolean;
  nota?: string;
}

export const OBRA: Pieza[] = [
  // --- Publicidad
  {
    id: 'mazda-una-chispa',
    titulo: 'Mazda — Una chispa',
    categoria: 'publicidad',
    quien: ['santiago'],
    rol: 'Diseño sonoro',
    ficha: 'Comercial',
    video: 'FQ1OpRNI6bM',
    img: 'FQ1OpRNI6bM.jpg',
    destacada: true,
  },
  {
    id: 'mazda-un-color',
    titulo: 'Mazda — Un color',
    categoria: 'publicidad',
    quien: ['santiago'],
    rol: 'Diseño sonoro',
    ficha: 'Comercial',
    video: 'x_8pQ2hT2iE',
    img: 'x_8pQ2hT2iE.jpg',
  },

  // --- Documental y series
  {
    id: 'currulao',
    titulo: 'Currulao y músicas del Pacífico Sur',
    categoria: 'documental',
    quien: ['martin', 'santiago'],
    rol: 'Viaje, registro y sonido',
    ficha: 'Documental corto · Dial, serie Sámara · 2026',
    video: '17IYYByXjKk',
    img: '17IYYByXjKk.jpg',
    destacada: true,
    nota: 'Del viaje de 2025 por el Pacífico colombiano para registrar su fauna, su flora y su música. Montaje de Camila Severiche.',
  },
  {
    id: 'mongolia',
    titulo: 'Los últimos nómadas de Mongolia',
    categoria: 'documental',
    quien: ['martin'],
    rol: 'Música y diseño sonoro',
    ficha: 'Cortometraje documental · 2026',
    video: '2xwhnGZxArw',
    img: '2xwhnGZxArw.jpg',
    destacada: true,
  },
  {
    id: 'jazz-colombiano',
    titulo: 'Historia del jazz colombiano en 10 minutos',
    categoria: 'documental',
    quien: ['martin'],
    rol: 'Investigación, dirección y música',
    ficha: 'Videoensayo · Dial, serie Sámara · 2025',
    video: '9-pppveOQRs',
    img: '9-pppveOQRs.jpg',
  },
  {
    id: 'cientifico-por-un-dia',
    titulo: 'Científico por un día, temporada II',
    categoria: 'documental',
    quien: ['juan'],
    rol: 'Música',
    ficha: 'Serie de 12 capítulos · MinCiencias, RTVC–Señal Colombia y SENA',
    enlace: 'https://redaprende.colombiaaprende.edu.co/metadatos-agrupaciones/coleccion/cientifico-por-un-dia-temporada-ii/',
    enlaceTexto: 'Ver la serie en Colombia Aprende',
    img: 'cientifico.jpg',
  },

  // --- Cine, animación y escena
  {
    id: 'shadow-of-the-dragon',
    titulo: 'Shadow of the Dragon',
    categoria: 'cine',
    quien: ['martin'],
    rol: 'Diseño sonoro y música',
    ficha: 'Animación · 2026',
    video: '6DZmq3vevQ4',
    img: '6DZmq3vevQ4.jpg',
    destacada: true,
  },
  {
    id: 'intersticio',
    titulo: 'Intersticio',
    categoria: 'cine',
    quien: ['juan'],
    rol: 'Música',
    ficha: 'Cortometraje de Andrés Patiño · Tempestad Films',
    video: 'sKmqJ5aUcSQ',
    img: 'sKmqJ5aUcSQ.jpg',
  },
  {
    id: 'tierra-sin-sol',
    titulo: 'Tierra sin sol ni luna',
    categoria: 'cine',
    quien: ['juan'],
    rol: 'Música',
    ficha: 'Tráiler oficial',
    video: '4bftwkKm06U',
    img: '4bftwkKm06U.jpg',
    destacada: true,
  },
  {
    id: 'walter',
    titulo: 'Walter',
    categoria: 'cine',
    quien: ['santiago'],
    rol: 'Música',
    ficha: 'Cortometraje animado · 2019',
    video: 'h4N7SWFleG4',
    img: 'h4N7SWFleG4.jpg',
  },
  {
    id: 'bardo',
    titulo: 'Bardo — tráiler alternativo',
    categoria: 'cine',
    quien: ['martin'],
    rol: 'Música y diseño sonoro',
    ficha: 'Música nueva sobre el tráiler de Bardo (Alejandro G. Iñárritu, 2022)',
    video: '6uWk6G-3VYs',
    img: '6uWk6G-3VYs.jpg',
  },
  {
    id: 'amores-dificiles',
    titulo: 'Los amores difíciles',
    categoria: 'cine',
    quien: ['martin'],
    rol: 'Música original',
    ficha: 'Obra de teatro',
    video: 'aqBiC-RY8RE',
    img: 'aqBiC-RY8RE.jpg',
  },

  // --- Sesiones en vivo y videoclips
  {
    id: 'in-vitro-en-vivo',
    titulo: 'In-Vitro, sesión en vivo',
    categoria: 'sesiones',
    quien: ['martin'],
    rol: 'Composición, guitarra y producción audiovisual en colaboración',
    ficha: 'Música del disco In-Vitro',
    video: 'L84B5ZGakjY',
    img: 'L84B5ZGakjY.jpg',
    destacada: true,
  },
  {
    id: 'noisesion',
    titulo: 'Noisesion',
    categoria: 'sesiones',
    quien: ['juan'],
    rol: 'Ingeniería de sonido',
    ficha: 'Sesiones de La Noise con artistas de la escena colombiana',
    video: 'yfccCqJFOZU',
    img: 'yfccCqJFOZU.jpg',
    destacada: true,
  },
  {
    id: 'fractalida',
    titulo: 'Fractálida — Locos',
    categoria: 'sesiones',
    quien: ['juan'],
    rol: 'Ingeniería de sonido',
    ficha: 'Sesiones Alta Distorsión',
    video: 'cM-whAxnG9U',
    img: 'cM-whAxnG9U.jpg',
  },
  {
    id: 'manuela-ocampo',
    titulo: 'Manuela Ocampo',
    categoria: 'sesiones',
    quien: ['juan'],
    rol: 'Ingeniería de sonido',
    ficha: 'Sesiones Macarena 360',
    video: 'W32TI7o8XM0',
    img: 'W32TI7o8XM0.jpg',
  },
  {
    id: 'dibujar-el-camino',
    titulo: 'Thaissa y Noelia Maffiold — Dibujar el camino',
    categoria: 'sesiones',
    quien: ['juan'],
    rol: 'Sonido',
    ficha: 'Video musical · LaNoise Films',
    video: 'jqhSaBrgYJo',
    img: 'jqhSaBrgYJo.jpg',
  },
  {
    id: 'mangorito',
    titulo: 'Arrabal Gentío — Mangorito',
    categoria: 'sesiones',
    quien: ['martin'],
    rol: 'Música, guion y producción',
    ficha: 'Videoclip',
    video: '5lgpy6H5sTU',
    img: '5lgpy6H5sTU.jpg',
    destacada: true,
  },
  {
    id: 'feo-palante',
    titulo: 'Delayn Núñez — Feo Palante',
    categoria: 'sesiones',
    quien: ['martin'],
    rol: 'Cámara',
    ficha: 'Videoclip · 2025',
    video: '1PCgmrlsKUQ',
    img: '1PCgmrlsKUQ.jpg',
  },
  {
    id: 'video-mapping',
    titulo: 'Video mapping en el espacio público',
    categoria: 'sesiones',
    quien: ['martin'],
    rol: 'Dron',
    ficha: 'Toma Falsa Films y Posmonumenta',
    enlace: 'https://www.instagram.com/reel/DZaKf_WB8ni/',
    enlaceTexto: 'Ver en Instagram',
    img: 'kabuya.jpg',
    vertical: true,
  },

  // --- Podcast y medios
  {
    id: 'debate-dial',
    titulo: 'Un progresista de mano dura frente a siete conservadores',
    categoria: 'medios',
    quien: ['martin', 'juan'],
    rol: 'Dirección (Martín) e ingeniería de sonido (Juan)',
    ficha: 'Debate · Dial · 2026',
    video: 'lWeFYIvic5Q',
    img: 'lWeFYIvic5Q.jpg',
  },
  {
    id: 'podcast-lgqv',
    titulo: 'Lo que la gente quiere es vivir, episodio 1',
    categoria: 'medios',
    quien: ['martin', 'juan'],
    rol: 'Producción (Martín) e ingeniería de sonido (Juan)',
    ficha: 'Videopodcast · RED Quynza y Dial · 2026',
    video: '1z-0Il0n8xE',
    img: '1z-0Il0n8xE.jpg',
  },

  // --- Discos y arreglos
  {
    id: 'in-vitro',
    titulo: 'In-Vitro',
    categoria: 'discos',
    quien: ['martin'],
    rol: 'Disco solista',
    ficha: 'Un recorrido por compositores del jazz colombiano',
    enlace: 'https://open.spotify.com/album/5BByceS6sogwNmUWkrv41r',
    enlaceTexto: 'Escuchar en Spotify',
    img: 'in-vitro.jpg',
  },
  {
    id: 'calle-luna',
    titulo: 'Calle Luna, Calle Sol',
    categoria: 'discos',
    quien: ['martin'],
    rol: 'Arreglo para orquesta sinfónica',
    ficha: 'Tema de Willie Colón',
    video: 'k1EfLddmIvY',
    img: 'k1EfLddmIvY.jpg',
  },
  {
    id: 'cuadrupedos',
    titulo: 'Juan Rizoma — Cuadrúpedos',
    categoria: 'discos',
    quien: ['juan'],
    rol: 'Composición y producción',
    ficha: 'Videoclip',
    enlace: 'https://www.youtube.com/watch?v=kowHKauPk3U',
    enlaceTexto: 'Ver en YouTube',
    img: 'kowHKauPk3U.jpg',
  },
];

export const destacadas = () => OBRA.filter((p) => p.destacada);
export const dePersona = (q: Persona) => OBRA.filter((p) => p.quien.includes(q));
