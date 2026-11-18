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
  discografia?: Disco[];
  colaboraciones?: { titulo: string; nota: string; url: string; notaEn?: string }[];
  // versión en inglés; enlaces: solo los textos, en el mismo orden
  en: Pick<Director, 'rol' | 'corta' | 'bio'> & { formacion?: string; enlaces?: string[] };
}

// Discos y sencillos de cada codirector. Cada pista suena en el tocadiscos (como las de «Escuchar»).
// `img` es relativa a src/assets (p. ej. 'discos/arrullos-alados.jpg').
export type TipoDisco = 'disco' | 'ep' | 'sencillo' | 'compilacion' | 'pistas';
export const TIPOS_DISCO: Record<TipoDisco, [string, string]> = {
  disco: ['Disco', 'Album'],
  ep: ['EP', 'EP'],
  sencillo: ['Sencillo', 'Single'],
  compilacion: ['Compilación', 'Compilation'],
  pistas: ['Pistas', 'Tracks'],
};
export interface Disco {
  titulo: string;
  tipo: TipoDisco;
  anio?: string;
  como?: string; // nombre con el que sale, si no es el propio (Sámara)
  img: string;
  nota?: string;
  notaEn?: string;
  pistas: { titulo: string; con?: string; tipo: 'youtube' | 'soundcloud'; id?: string; url?: string }[];
  enlaces?: { texto: string; url: string }[];
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
      'Compositor, arreglista y guitarrista de Bogotá, magíster en Música con énfasis en arreglos de la Universidad El Bosque. Escribe música para cine, documental, animación y videojuegos, y se mueve entre el jazz, la música experimental y el diseño sonoro. Con su proyecto Sámara grabó el disco In-Vitro, un recorrido por compositores del jazz colombiano, y dio un concierto en Corea del Sur. Ha tocado las guitarras de El Lenguaje de las Flórez y colabora como arreglista, compositor o intérprete con artistas como luci le.',
      'Es también realizador audiovisual: dirige Dial, productora y medio donde hace documentales, debates y, con la RED Quynza, el podcast Lo que la gente quiere es vivir. Filma, pilotea dron y monta. Por eso puede entrar a un proyecto desde el guion o el rodaje y pensar la música junto con la imagen, en lugar de recibir el corte terminado.',
    ],
    enlaces: [
      { texto: 'Portafolio', url: 'https://martinpereatobon99.wixsite.com/portafolio' },
      { texto: 'In-Vitro en Spotify', url: 'https://open.spotify.com/album/5BByceS6sogwNmUWkrv41r' },
      { texto: 'SoundCloud', url: 'https://soundcloud.com/martin-perea-tobon' },
      { texto: 'Showreel de guitarra', url: 'https://www.youtube.com/watch?v=MnEB9uhkvxo' },
      { texto: 'Dial', url: 'https://dialmedio.org' },
    ],
    discografia: [
      {
        titulo: 'In-Vitro',
        tipo: 'disco',
        anio: '2026',
        como: 'Sámara',
        img: 'discos/in-vitro.jpg',
        nota: 'Un recorrido por compositores del jazz colombiano.',
        notaEn: 'A journey through Colombian jazz composers.',
        pistas: [
          { titulo: 'Hermano', tipo: 'youtube', id: 'YCbuDiJfgaQ' },
          { titulo: 'Tarde irregular', tipo: 'youtube', id: 'vh6jor1hS2Y' },
          { titulo: 'Sueños', tipo: 'youtube', id: 'yPaiPUgpuMs' },
          { titulo: 'Cenizas', tipo: 'youtube', id: 'r6Pc4Z1w7J8' },
          { titulo: 'Corea', tipo: 'youtube', id: '951ajfi2GZc' },
          { titulo: 'Faisán', tipo: 'youtube', id: 'KRno6UWoVSg' },
          { titulo: 'Delay', tipo: 'youtube', id: 'S_tkTejIqNI' },
          { titulo: 'Iruya', tipo: 'youtube', id: 'BONQUbn5PPI' },
        ],
        enlaces: [{ texto: 'Spotify', url: 'https://open.spotify.com/album/5BByceS6sogwNmUWkrv41r' }],
      },
    ],
    colaboraciones: [
      {
        titulo: 'El Lenguaje de las Flórez',
        nota: 'guitarras en su live show de Noisesion (2024)',
        notaEn: 'guitars in their Noisesion live show (2024)',
        url: 'https://www.youtube.com/watch?v=7lsi10gRnl8',
      },
      { titulo: 'luci le', nota: 'Policarpa, Piedras, No olvidaré y otras canciones', notaEn: 'Policarpa, Piedras, No olvidaré and other songs', url: 'https://www.youtube.com/watch?v=BuzU14eTGFk' },
      { titulo: 'Murmuros y luci le', nota: 'Abeja Melipona, en vivo (2025)', notaEn: 'Abeja Melipona, live (2025)', url: 'https://www.youtube.com/watch?v=HozRVbzWHJc' },
      {
        titulo: 'Todas sus colaboraciones',
        nota: 'lista en YouTube Music',
        notaEn: 'playlist on YouTube Music',
        url: 'https://music.youtube.com/playlist?list=PLtGEMPLbnH8WtY50fllw0nToQ4vt52hIm',
      },
    ],
    en: {
      rol: 'Composition and filmmaking',
      corta: 'Composer, arranger and guitarist. He writes music for film, documentary and animation, and he also shoots.',
      formacion: BOSQUE_EN,
      bio: [
        'Composer, arranger and guitarist from Bogotá, with a master’s degree in music (arranging) from Universidad El Bosque. He writes music for film, documentary, animation and video games, and works across jazz, experimental music and sound design. With his project Sámara he recorded the album In-Vitro, a journey through Colombian jazz composers, and played a concert in South Korea. He has played guitar with El Lenguaje de las Flórez and works as an arranger, composer or performer with artists such as luci le.',
        'He is also a filmmaker: he runs Dial, a production company and media outlet where he makes documentaries, debates and, with RED Quynza, the podcast Lo que la gente quiere es vivir. He shoots, flies a drone and edits. That lets him join a project at the script or shooting stage and think about the music together with the picture, instead of receiving a finished cut.',
      ],
      enlaces: ['Portfolio', 'In-Vitro on Spotify', 'SoundCloud', 'Guitar showreel', 'Dial'],
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
      'Su música propia lleva nombres de aves colombianas y está reunida en dos EP: Cantos de cielo y río (2025), con Toche, Carrao y Martín pescador (estas dos con Anamaría Oramas), y Arrullos alados (2026), con Batará, Mielero y Diostedé (con luci le). También hace arreglos para guitarra, como su versión de Bloomdido, de Charlie Parker. En 2025 recorrió con Martín el Pacífico colombiano para registrar su fauna, su flora y su música; de ese viaje salió el documental Currulao y músicas del Pacífico Sur.',
    ],
    pendiente: 'Descripción armada con su portafolio público. Falta la que mande Santiago.',
    enlaces: [
      { texto: 'Spotify', url: 'https://open.spotify.com/artist/3NWfmbbgneHqdFU8qehWto' },
      { texto: 'Bandcamp', url: 'https://santigarcia.bandcamp.com' },
      { texto: 'SoundCloud', url: 'https://soundcloud.com/santiagogarcia103314' },
      { texto: 'Portafolio de música y sonido', url: 'https://youtube.com/playlist?list=PLXNq94HW_W4o' },
      { texto: 'Discos y redes', url: 'https://linktr.ee/santigarcia.r' },
    ],
    discografia: [
      {
        titulo: 'Arrullos alados',
        tipo: 'ep',
        anio: '2026',
        img: 'discos/arrullos-alados.jpg',
        pistas: [
          { titulo: 'Batará', tipo: 'soundcloud', url: 'https://soundcloud.com/santiagogarcia103314/batara' },
          { titulo: 'Mielero', tipo: 'soundcloud', url: 'https://soundcloud.com/santiagogarcia103314/mielero' },
          { titulo: 'Diostedé', con: 'luci le', tipo: 'soundcloud', url: 'https://soundcloud.com/santiagogarcia103314/diostede' },
        ],
        enlaces: [
          { texto: 'Spotify', url: 'https://open.spotify.com/album/3mOJ7HXs5my3TDUkhKGu8b' },
          { texto: 'Bandcamp', url: 'https://santigarcia.bandcamp.com/album/arrullos-alados' },
          { texto: 'Apple Music', url: 'https://music.apple.com/us/album/arrullos-alados-single/6815861043' },
        ],
      },
      {
        titulo: 'Cantos de cielo y río',
        tipo: 'ep',
        anio: '2025',
        img: 'discos/cantos-de-cielo-y-rio.jpg',
        pistas: [
          { titulo: 'Toche', tipo: 'soundcloud', url: 'https://soundcloud.com/santiagogarcia103314/toche' },
          { titulo: 'Carrao', con: 'Anamaría Oramas', tipo: 'soundcloud', url: 'https://soundcloud.com/santiagogarcia103314/carrao-feat-anamaria-oramas' },
          { titulo: 'Martín pescador', con: 'Anamaría Oramas', tipo: 'soundcloud', url: 'https://soundcloud.com/santiagogarcia103314/martin-pescador-feat-anamaria' },
        ],
        enlaces: [
          { texto: 'Spotify', url: 'https://open.spotify.com/album/4HR03UxSIITs5RfaPIy0oD' },
          { texto: 'Bandcamp', url: 'https://santigarcia.bandcamp.com/album/cantos-de-c-elo-y-r-o' },
        ],
      },
      {
        titulo: 'Presagio',
        tipo: 'sencillo',
        anio: '2026',
        como: 'Vítreo',
        img: 'pistas/presagio.jpg',
        nota: 'Con luci le y Martín (Sámara).',
        notaEn: 'With luci le and Martín (Sámara).',
        pistas: [{ titulo: 'Presagio', tipo: 'youtube', id: 'avJgkzuIgSw' }],
        enlaces: [{ texto: 'Spotify', url: 'https://open.spotify.com/track/0XERABJ0EsbZbLvD4RC54N' }],
      },
    ],
    en: {
      rol: 'Sound design and composition',
      corta: 'Sound designer, composer and arranger. He did the sound for Mazda commercials and has scored animation.',
      formacion: BOSQUE_EN,
      bio: [
        'Sound designer, composer and arranger from Bogotá, with a master’s degree in music (arranging) from Universidad El Bosque. He did the sound design for Mazda’s «Una chispa» and «Un color» commercials and wrote the music for the animated short Walter (2019).',
        'His own music is named after Colombian birds and gathered in two EPs: Cantos de cielo y río (2025), with Toche, Carrao and Martín pescador (the last two with Anamaría Oramas), and Arrullos alados (2026), with Batará, Mielero and Diostedé (with luci le). He also writes guitar arrangements, such as his version of Charlie Parker’s Bloomdido. In 2025 he traveled with Martín along Colombia’s Pacific coast to record its wildlife, its plants and its music; that trip became the documentary Currulao y músicas del Pacífico Sur.',
      ],
      enlaces: ['Spotify', 'Bandcamp', 'SoundCloud', 'Music and sound portfolio', 'Albums and social media'],
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
      'Su música propia sale por Rizoma Lab: el sencillo y videoclip Cuadrúpedos (2025), «un retrato de las masas»; Rizoma 2020, una compilación de dieciséis temas incidentales, y pistas como «Concurso de Bandas Sonoras 2022» y «Run For It».',
    ],
    enlaces: [
      { texto: 'SoundCloud de Rizoma Lab', url: 'https://soundcloud.com/rizoma-lab' },
      { texto: 'YouTube de Rizoma Lab', url: 'https://www.youtube.com/@rizomalab6016' },
      { texto: 'Instagram', url: 'https://www.instagram.com/juanrizoma' },
      { texto: 'Noisesion', url: 'https://www.youtube.com/watch?v=yfccCqJFOZU' },
    ],
    discografia: [
      {
        titulo: 'Cuadrúpedos',
        tipo: 'sencillo',
        anio: '2025',
        img: 'pistas/cuadrupedos.jpg',
        nota: 'Sencillo y videoclip: «un retrato de las masas».',
        notaEn: 'Single and music video: «a portrait of the masses».',
        pistas: [{ titulo: 'Cuadrúpedos', tipo: 'youtube', id: 'kowHKauPk3U' }],
        enlaces: [{ texto: 'YouTube', url: 'https://www.youtube.com/watch?v=kowHKauPk3U' }],
      },
      {
        titulo: 'Rizoma 2020',
        tipo: 'compilacion',
        anio: '2020',
        img: 'discos/rizoma-2020.jpg',
        nota: 'Dieciséis temas incidentales en una sola pista, de «Através de Jupiter vi el fotoplasma» a «Tiempo».',
        notaEn: 'Sixteen pieces of incidental music in a single track, from «Através de Jupiter vi el fotoplasma» to «Tiempo».',
        pistas: [{ titulo: 'Rizoma 2020', tipo: 'soundcloud', url: 'https://soundcloud.com/rizoma-lab/rizoma-2020' }],
        enlaces: [{ texto: 'SoundCloud', url: 'https://soundcloud.com/rizoma-lab/rizoma-2020' }],
      },
      {
        titulo: 'Pistas de Rizoma Lab',
        tipo: 'pistas',
        anio: '2022',
        img: 'pistas/run-for-it.jpg',
        pistas: [
          { titulo: 'Concurso de Bandas Sonoras 2022', tipo: 'soundcloud', url: 'https://soundcloud.com/rizoma-lab/concurso-de-bandas-sonoras-2022' },
          { titulo: 'Run For It', tipo: 'soundcloud', url: 'https://soundcloud.com/rizoma-lab/run-for-it' },
          { titulo: 'Life Bend', tipo: 'soundcloud', url: 'https://soundcloud.com/rizoma-lab/life-bend' },
          { titulo: 'Many Colors', tipo: 'soundcloud', url: 'https://soundcloud.com/rizoma-lab/many-colors' },
          { titulo: 'Joy Joy Joy', tipo: 'soundcloud', url: 'https://soundcloud.com/rizoma-lab/joy-joy-joy' },
          { titulo: 'God News Master', tipo: 'soundcloud', url: 'https://soundcloud.com/rizoma-lab/god-news-master' },
          { titulo: 'Corporativo workflow', tipo: 'soundcloud', url: 'https://soundcloud.com/rizoma-lab/corporativo-workflow' },
        ],
        enlaces: [{ texto: 'SoundCloud', url: 'https://soundcloud.com/rizoma-lab' }],
      },
    ],
    en: {
      rol: 'Music production and sound engineering',
      corta: 'Music producer, percussionist and engineer. He records and mixes live sessions and composes for series and short films.',
      bio: [
        'Music producer from Pereira (Risaralda). As a percussionist he has played with the Nogal Jazz Big Band, Jofman, La Real del Sonido, Frailejón, Filtre Fauna, Buha 2030 and La Vodkanera. With his label Rizoma Lab he produces artists from the jazz and alternative music scene, and he has made audiovisual pieces for Señal Colombianísimas and IDRD.',
        'He composed the music for the second season of Científico por un día (MinCiencias, Señal Colombia and SENA) and for short films such as Intersticio and Tierra sin sol ni luna. With the production company La Noise he has worked on music videos and on Noisesion, a series of sessions with Colombian artists. He is the sound engineer for Dial’s projects, a radio host and producer at RAC (Radio UNAL), and a music production teacher.',
        'His own music comes out through Rizoma Lab: the single and music video Cuadrúpedos (2025), «a portrait of the masses»; Rizoma 2020, a compilation of sixteen pieces of incidental music, and tracks such as «Concurso de Bandas Sonoras 2022» and «Run For It».',
      ],
      enlaces: ['Rizoma Lab on SoundCloud', 'Rizoma Lab on YouTube', 'Instagram', 'Noisesion'],
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
  { titulo: 'Cuadrúpedos', quien: 'Juan Rizoma', nota: 'Rizoma Lab · 2025', tipo: 'youtube', id: 'kowHKauPk3U', img: 'cuadrupedos.jpg' },
  { titulo: 'Diostedé', quien: 'Santiago García y luci le', quienEn: 'Santiago García and luci le', nota: 'Arrullos alados · 2026', tipo: 'soundcloud', url: 'https://soundcloud.com/santiagogarcia103314/diostede', img: 'diostede.jpg' },
  { titulo: 'Cenizas', quien: 'Martín Perea Tobón', nota: 'Sámara · In-Vitro', tipo: 'youtube', id: 'r6Pc4Z1w7J8', img: 'cenizas.jpg' },
  { titulo: 'Batará', quien: 'Santiago García', nota: 'Arrullos alados · 2026', tipo: 'soundcloud', url: 'https://soundcloud.com/santiagogarcia103314/batara', img: 'batara.jpg' },
  { titulo: 'Run For It', quien: 'Juan Rizoma', nota: 'Rizoma Lab · 2022', tipo: 'soundcloud', url: 'https://soundcloud.com/rizoma-lab/run-for-it', img: 'run-for-it.jpg' },
  { titulo: 'Cardumen', quien: 'Martín Perea Tobón', tipo: 'soundcloud', url: 'https://soundcloud.com/martin-perea-tobon/cardumen-1', img: 'cardumen.jpg' },
  {
    titulo: 'Martín pescador',
    quien: 'Santiago García con Anamaría Oramas',
    quienEn: 'Santiago García with Anamaría Oramas',
    nota: 'Cantos de cielo y río · 2025',
    tipo: 'soundcloud',
    url: 'https://soundcloud.com/santiagogarcia103314/martin-pescador-feat-anamaria',
    img: 'martin-pescador.jpg',
  },
  { titulo: 'Life Bend', quien: 'Juan Rizoma', nota: 'Rizoma Lab · 2022', tipo: 'soundcloud', url: 'https://soundcloud.com/rizoma-lab/life-bend', img: 'life-bend.jpg' },
  {
    titulo: 'Carrao',
    quien: 'Santiago García con Anamaría Oramas',
    quienEn: 'Santiago García with Anamaría Oramas',
    nota: 'Cantos de cielo y río · 2025',
    tipo: 'soundcloud',
    url: 'https://soundcloud.com/santiagogarcia103314/carrao-feat-anamaria-oramas',
    img: 'carrao.jpg',
  },
  { titulo: 'Agua', quien: 'Martín Perea Tobón', tipo: 'soundcloud', url: 'https://soundcloud.com/martin-perea-tobon/agua-5', img: 'agua.jpg' },
  { titulo: 'Mielero', quien: 'Santiago García', nota: 'Arrullos alados · 2026', tipo: 'soundcloud', url: 'https://soundcloud.com/santiagogarcia103314/mielero', img: 'mielero.jpg' },
];

// En el idioma de la página
type L = 'es' | 'en';
export const director = (d: Director, lang: L): Director => {
  if (lang === 'es') return d;
  const { rol, corta, bio, formacion, enlaces } = d.en;
  return {
    ...d,
    rol,
    corta,
    bio,
    formacion: formacion ?? d.formacion,
    enlaces: d.enlaces.map((e, i) => ({ ...e, texto: enlaces?.[i] ?? e.texto })),
    discografia: d.discografia?.map((x) => ({ ...x, nota: x.notaEn ?? x.nota })),
    colaboraciones: d.colaboraciones?.map((x) => ({ ...x, nota: x.notaEn ?? x.nota })),
  };
};
export const asociado = (a: Asociado, lang: L): Asociado => {
  if (lang === 'es' || !a.en) return a;
  const { obra, ...resto } = a.en;
  return { ...a, ...resto, obra: a.obra?.map((o, i) => ({ ...o, nota: obra?.[i] ?? o.nota })) };
};
export const pista = (p: Pista, lang: L): Pista => (lang === 'en' && p.quienEn ? { ...p, quien: p.quienEn } : p);
