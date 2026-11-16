import type { Persona } from './obra';

export const CORREO = 'fototomaproducciones@gmail.com';

export interface Director {
  id: Persona;
  nombre: string;
  rol: string; // oficio, sin «Codirector»
  foto: string; // src/assets/equipo/
  corta: string; // una línea para la portada
  formacion?: string;
  bio: string[];
  pendiente?: string; // nota visible solo en desarrollo
  enlaces: { texto: string; url: string }[];
  discos?: { titulo: string; anio?: string; url?: string }[];
}

const BOSQUE = 'Maestría en Música con énfasis en arreglos, Universidad El Bosque';

export const DIRECTORES: Director[] = [
  {
    id: 'martin',
    nombre: 'Martín Perea Tobón',
    rol: 'Composición y realización audiovisual',
    foto: 'martin-perea-tobon.jpg',
    corta: 'Compositor, arreglista y guitarrista. Escribe música para cine, documental y animación, y también filma.',
    formacion: BOSQUE,
    bio: [
      'Compositor, arreglista y guitarrista de Bogotá, magíster en Música con énfasis en arreglos de la Universidad El Bosque. Escribe música para cine, documental, animación y videojuegos, y se mueve entre el jazz, la música experimental y el diseño sonoro. Su disco In-Vitro recorre la obra de compositores del jazz colombiano.',
      'Es también realizador audiovisual: dirige Dial, productora y medio donde hace documentales, debates y, con la RED Quynza, el podcast Lo que la gente quiere es vivir. Filma, pilotea dron y monta. Por eso puede entrar a un proyecto desde el guion o el rodaje y pensar la música junto con la imagen, en lugar de recibir el corte terminado.',
    ],
    enlaces: [
      { texto: 'Portafolio', url: 'https://martinpereatobon99.wixsite.com/portafolio' },
      { texto: 'In-Vitro en Spotify', url: 'https://open.spotify.com/album/5BByceS6sogwNmUWkrv41r' },
      { texto: 'SoundCloud', url: 'https://soundcloud.com/martin-perea-tobon' },
      { texto: 'Dial', url: 'https://dialmedio.org' },
    ],
  },
  {
    id: 'santiago',
    nombre: 'Santiago García',
    rol: 'Diseño sonoro y composición',
    foto: 'santiago-garcia.jpg',
    corta: 'Diseñador sonoro, compositor y arreglista. Ha hecho el sonido de comerciales de Mazda y música para animación.',
    formacion: BOSQUE,
    bio: [
      'Diseñador sonoro, compositor y arreglista de Bogotá, magíster en Música con énfasis en arreglos de la Universidad El Bosque. Hizo el diseño sonoro de los comerciales «Una chispa» y «Un color» de Mazda y la música del cortometraje animado Walter (2019).',
      'Su música propia lleva nombres de aves colombianas: Toche, Carrao, Martín pescador (con Anamaría Oramas), Diostedé (con luci le), Mielero y Batará, y los discos Cantos de cielo y río y Arrullos alados (2026). En 2025 recorrió con Martín el Pacífico colombiano para registrar su fauna, su flora y su música; de ese viaje salió el documental Currulao y músicas del Pacífico Sur.',
    ],
    pendiente: 'Descripción armada con su portafolio público. Falta la que mande Santiago.',
    enlaces: [
      { texto: 'SoundCloud', url: 'https://soundcloud.com/santiagogarcia103314' },
      { texto: 'Portafolio de música y sonido', url: 'https://youtube.com/playlist?list=PLXNq94HW_W4o' },
      { texto: 'Discos y redes', url: 'https://linktr.ee/santigarcia.r' },
    ],
    discos: [
      { titulo: 'Arrullos alados', anio: '2026', url: 'https://santigarcia.bandcamp.com/album/arrullos-alados' },
      { titulo: 'Cantos de cielo y río', url: 'https://santigarcia.bandcamp.com/album/cantos-de-c-elo-y-r-o' },
      { titulo: 'Diostedé, con luci le', url: 'https://soundcloud.com/santiagogarcia103314/diostede' },
      { titulo: 'Presagio, con luci le y Martín (Vítreo)', anio: '2026', url: 'https://www.youtube.com/watch?v=avJgkzuIgSw' },
      { titulo: 'Toche', url: 'https://soundcloud.com/santiagogarcia103314/toche' },
    ],
  },
  {
    id: 'juan',
    nombre: 'Juan Rizoma',
    rol: 'Producción musical e ingeniería de sonido',
    foto: 'juan-rizoma.jpg',
    corta: 'Productor musical, percusionista e ingeniero. Graba y mezcla sesiones en vivo y compone para series y cortos.',
    bio: [
      'Productor musical de Pereira (Risaralda). Como percusionista ha tocado en la Nogal Jazz Big Band, Jofman, La Real del Sonido, Frailejón, Filtre Fauna, Buha 2030 y La Vodkanera. Con su sello Rizoma Lab produce a artistas de la escena del jazz y la música alternativa, y ha hecho piezas audiovisuales para Señal Colombianísimas y el IDRD.',
      'Compuso la música de la segunda temporada de Científico por un día (MinCiencias, Señal Colombia y SENA) y de cortometrajes como Intersticio y Tierra sin sol ni luna. Con la productora La Noise ha trabajado en videoclips y en Noisesion, una serie de sesiones con artistas colombianos. Es el ingeniero de sonido de los proyectos de Dial, locutor y productor de radio en RAC (Radio UNAL) y profesor de producción musical.',
    ],
    enlaces: [
      { texto: 'Noisesion', url: 'https://www.youtube.com/watch?v=yfccCqJFOZU' },
      { texto: 'Cuadrúpedos (videoclip)', url: 'https://www.youtube.com/watch?v=kowHKauPk3U' },
    ],
  },
];

export interface Asociado {
  nombre: string;
  instrumentos?: string;
  nota?: string;
}

// Músicos asociados. La idea es que crezca: cuerdas, vientos, voces, percusiones…
export const ASOCIADOS: Asociado[] = [
  { nombre: 'luci le', nota: 'Con Santiago en «Diostedé» y con Santiago y Martín en «Presagio». Portafolio en camino.' },
];

// Pistas para escuchar. Se cargan solo al dar play y siguen sonando al cambiar de página.
// `tipo` youtube → `id` del video; soundcloud → `url` de la pista. Carátula en src/assets/pistas/.
export interface Pista {
  titulo: string;
  quien: string;
  nota?: string;
  tipo: 'youtube' | 'soundcloud';
  id?: string;
  url?: string;
  img: string;
}

export const PISTAS: Pista[] = [
  {
    titulo: 'Presagio',
    quien: 'Santiago García, luci le y Martín Perea Tobón',
    nota: 'Vítreo · 2026',
    tipo: 'youtube',
    id: 'avJgkzuIgSw',
    img: 'presagio.jpg',
  },
  { titulo: 'Diostedé', quien: 'Santiago García y luci le', tipo: 'soundcloud', url: 'https://soundcloud.com/santiagogarcia103314/diostede', img: 'diostede.jpg' },
  { titulo: 'Cenizas', quien: 'Martín Perea Tobón', nota: 'Sámara · 2026', tipo: 'youtube', id: 'r6Pc4Z1w7J8', img: 'cenizas.jpg' },
  { titulo: 'Batará', quien: 'Santiago García', tipo: 'soundcloud', url: 'https://soundcloud.com/santiagogarcia103314/batara', img: 'batara.jpg' },
  { titulo: 'Cardumen', quien: 'Martín Perea Tobón', tipo: 'soundcloud', url: 'https://soundcloud.com/martin-perea-tobon/cardumen-1', img: 'cardumen.jpg' },
  {
    titulo: 'Martín pescador',
    quien: 'Santiago García con Anamaría Oramas',
    tipo: 'soundcloud',
    url: 'https://soundcloud.com/santiagogarcia103314/martin-pescador-feat-anamaria',
    img: 'martin-pescador.jpg',
  },
  { titulo: 'Agua', quien: 'Martín Perea Tobón', tipo: 'soundcloud', url: 'https://soundcloud.com/martin-perea-tobon/agua-5', img: 'agua.jpg' },
];
