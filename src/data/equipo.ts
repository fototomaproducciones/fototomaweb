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
  // versión en inglés; enlaces y discos: solo los textos, en el mismo orden
  en: Pick<Director, 'rol' | 'corta' | 'bio'> & { formacion?: string; enlaces?: string[]; discos?: string[] };
}

const BOSQUE = 'Maestría en Música con énfasis en arreglos, Universidad El Bosque';
const BOSQUE_EN = 'Master of Music in arranging, Universidad El Bosque';

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
    en: {
      rol: 'Composition and filmmaking',
      corta: 'Composer, arranger and guitarist. He writes music for film, documentary and animation, and he also shoots.',
      formacion: BOSQUE_EN,
      bio: [
        'Composer, arranger and guitarist from Bogotá, with a master’s degree in music (arranging) from Universidad El Bosque. He writes music for film, documentary, animation and video games, and works across jazz, experimental music and sound design. His album In-Vitro explores the work of Colombian jazz composers.',
        'He is also a filmmaker: he runs Dial, a production company and media outlet where he makes documentaries, debates and, with RED Quynza, the podcast Lo que la gente quiere es vivir. He shoots, flies a drone and edits. That lets him join a project at the script or shooting stage and think about the music together with the picture, instead of receiving a finished cut.',
      ],
      enlaces: ['Portfolio', 'In-Vitro on Spotify', 'SoundCloud', 'Dial'],
    },
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
    en: {
      rol: 'Sound design and composition',
      corta: 'Sound designer, composer and arranger. He did the sound for Mazda commercials and has scored animation.',
      formacion: BOSQUE_EN,
      bio: [
        'Sound designer, composer and arranger from Bogotá, with a master’s degree in music (arranging) from Universidad El Bosque. He did the sound design for Mazda’s «Una chispa» and «Un color» commercials and wrote the music for the animated short Walter (2019).',
        'His own music is named after Colombian birds: Toche, Carrao, Martín pescador (with Anamaría Oramas), Diostedé (with luci le), Mielero and Batará, plus the albums Cantos de cielo y río and Arrullos alados (2026). In 2025 he traveled with Martín along Colombia’s Pacific coast to record its wildlife, its plants and its music; that trip became the documentary Currulao y músicas del Pacífico Sur.',
      ],
      enlaces: ['SoundCloud', 'Music and sound portfolio', 'Albums and social media'],
      discos: ['Arrullos alados', 'Cantos de cielo y río', 'Diostedé, with luci le', 'Presagio, with luci le and Martín (Vítreo)', 'Toche'],
    },
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
    en: {
      rol: 'Music production and sound engineering',
      corta: 'Music producer, percussionist and engineer. He records and mixes live sessions and composes for series and short films.',
      bio: [
        'Music producer from Pereira (Risaralda). As a percussionist he has played with the Nogal Jazz Big Band, Jofman, La Real del Sonido, Frailejón, Filtre Fauna, Buha 2030 and La Vodkanera. With his label Rizoma Lab he produces artists from the jazz and alternative music scene, and he has made audiovisual pieces for Señal Colombianísimas and IDRD.',
        'He composed the music for the second season of Científico por un día (MinCiencias, Señal Colombia and SENA) and for short films such as Intersticio and Tierra sin sol ni luna. With the production company La Noise he has worked on music videos and on Noisesion, a series of sessions with Colombian artists. He is the sound engineer for Dial’s projects, a radio host and producer at RAC (Radio UNAL), and a music production teacher.',
      ],
      enlaces: ['Noisesion', 'Cuadrúpedos (music video)'],
    },
  },
];

// Cada asociado con `foto` tiene tarjeta (inicio y /equipo) y perfil completo en /equipo/<id>.
export interface Asociado {
  id: string; // ruta del perfil: /equipo/<id>
  nombre: string; // tal cual lo escribe la persona (luci le, en minúsculas)
  corta?: string; // una o dos líneas para la tarjeta
  instrumentos?: string;
  nota?: string;
  foto?: string; // src/assets/equipo/
  bio?: string;
  obra?: { titulo: string; nota?: string; url: string }[];
  canciones?: { titulo: string; url: string }[];
  enlaces?: { texto: string; url: string }[];
  // versión en inglés; obra: solo las notas, en el mismo orden
  en?: { corta?: string; instrumentos?: string; nota?: string; bio?: string; obra?: string[] };
}

// Músicos asociados. La idea es que crezca: cuerdas, vientos, voces, percusiones…
export const ASOCIADOS: Asociado[] = [
  {
    id: 'luci-le',
    nombre: 'luci le',
    corta: 'Cantante de sesión y compositora. Voces y coros en español e inglés; su disco es Niña Flor.',
    instrumentos: 'Voz y arreglos vocales',
    foto: 'luci-le.jpg',
    bio: 'Cantante de sesión y arreglista vocal. Graba voces principales y coros en español e inglés, y escribe las armonías y texturas de voces de cada canción. Ha cantado pop, rock, jazz, baladas y música electrónica. Con Santiago hizo «Diostedé» y con Santiago y Martín, «Presagio». También compone: tiene un disco propio, Niña Flor, y ha hecho música para instalaciones de arte y para danza.',
    obra: [
      { titulo: 'Niña Flor', nota: 'disco', url: 'https://www.youtube.com/playlist?list=OLAK5uy_kN_AO6Sde0I0KbFrAOpHAzz9g3u0RvehM' },
      { titulo: 'Las aguas y las nieves', nota: 'música para una instalación de arte', url: 'https://soundcloud.com/user-957267843-410281611/sets/las-aguas-y-las-nieves' },
      {
        titulo: 'Reflejos',
        nota: 'video de danza dirigido por Leo Carreño, con la bailarina Anjah Kihai',
        url: 'https://drive.google.com/file/d/1PWMJBYnmTFEONN2WL9ViYVaMUm-43Eya/view',
      },
    ],
    canciones: [
      { titulo: 'Estudio para no morir de frío', url: 'https://on.soundcloud.com/JoRhIRmKGAPjNAie7W' },
      { titulo: 'Alegra', url: 'https://on.soundcloud.com/YST4Vy6lbHCR31ZEqM' },
      { titulo: 'Campanas Notre Dame', url: 'https://on.soundcloud.com/TNPhMm2BBltL5oRSn6' },
      { titulo: 'extracción', url: 'https://on.soundcloud.com/yN42vwm2NVRu8ra7QK' },
      { titulo: 'Vuoto-Cuerpo', url: 'https://on.soundcloud.com/sfyVYltAovJEzmkXQc' },
      { titulo: 'Reflejos', url: 'https://on.soundcloud.com/pwZcKGx9X3JsDvs8P2' },
    ],
    enlaces: [
      { texto: 'SoundCloud', url: 'https://soundcloud.com/lucileflor' },
      { texto: 'Fiverr', url: 'https://www.fiverr.com/lucillexoxo/be-your-session-singer-and-custom-vocal-arranger' },
    ],
    en: {
      corta: 'Session singer and songwriter. Lead and backing vocals in Spanish and English; her album is Niña Flor.',
      instrumentos: 'Vocals and vocal arrangements',
      bio: 'Session singer and vocal arranger. She records lead and backing vocals in Spanish and English, and writes the harmonies and vocal textures for each song. She has sung pop, rock, jazz, ballads and electronic music. With Santiago she made «Diostedé», and with Santiago and Martín, «Presagio». She also writes her own music: she has an album, Niña Flor, and has composed for art installations and dance.',
      obra: ['album', 'music for an art installation', 'dance film directed by Leo Carreño, with dancer Anjah Kihai'],
    },
  },
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
  quienEn?: string;
}

export const PISTAS: Pista[] = [
  {
    titulo: 'Presagio',
    quien: 'Santiago García, luci le y Martín Perea Tobón',
    quienEn: 'Santiago García, luci le and Martín Perea Tobón',
    nota: 'Vítreo · 2026',
    tipo: 'youtube',
    id: 'avJgkzuIgSw',
    img: 'presagio.jpg',
  },
  { titulo: 'Diostedé', quien: 'Santiago García y luci le', quienEn: 'Santiago García and luci le', tipo: 'soundcloud', url: 'https://soundcloud.com/santiagogarcia103314/diostede', img: 'diostede.jpg' },
  { titulo: 'Cenizas', quien: 'Martín Perea Tobón', nota: 'Sámara · 2026', tipo: 'youtube', id: 'r6Pc4Z1w7J8', img: 'cenizas.jpg' },
  { titulo: 'Batará', quien: 'Santiago García', tipo: 'soundcloud', url: 'https://soundcloud.com/santiagogarcia103314/batara', img: 'batara.jpg' },
  { titulo: 'Cardumen', quien: 'Martín Perea Tobón', tipo: 'soundcloud', url: 'https://soundcloud.com/martin-perea-tobon/cardumen-1', img: 'cardumen.jpg' },
  {
    titulo: 'Martín pescador',
    quien: 'Santiago García con Anamaría Oramas',
    quienEn: 'Santiago García with Anamaría Oramas',
    tipo: 'soundcloud',
    url: 'https://soundcloud.com/santiagogarcia103314/martin-pescador-feat-anamaria',
    img: 'martin-pescador.jpg',
  },
  { titulo: 'Agua', quien: 'Martín Perea Tobón', tipo: 'soundcloud', url: 'https://soundcloud.com/martin-perea-tobon/agua-5', img: 'agua.jpg' },
];

// En el idioma de la página
type L = 'es' | 'en';
export const director = (d: Director, lang: L): Director => {
  if (lang === 'es') return d;
  const { rol, corta, bio, formacion, enlaces, discos } = d.en;
  return {
    ...d,
    rol,
    corta,
    bio,
    formacion: formacion ?? d.formacion,
    enlaces: d.enlaces.map((e, i) => ({ ...e, texto: enlaces?.[i] ?? e.texto })),
    discos: d.discos?.map((x, i) => ({ ...x, titulo: discos?.[i] ?? x.titulo })),
  };
};
export const asociado = (a: Asociado, lang: L): Asociado => {
  if (lang === 'es' || !a.en) return a;
  const { obra, ...resto } = a.en;
  return { ...a, ...resto, obra: a.obra?.map((o, i) => ({ ...o, nota: obra?.[i] ?? o.nota })) };
};
export const pista = (p: Pista, lang: L): Pista => (lang === 'en' && p.quienEn ? { ...p, quien: p.quienEn } : p);
