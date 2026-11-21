// Servicios de Fototoma (antes dentro de servicios.astro). Desde el 21 nov 2026 (SEO) «cine» y «sesiones»
// tienen página propia en /servicios/<id> (y /en/servicios/<id>); publicidad ya tenía la suya en /publicidad.

export const BLOQUES_ES = [
  {
    id: 'cine',
    etq: 'Cine, series y documental',
    titulo: 'Música y sonido para películas, series y documentales',
    img: 'mongolia-fotograma.jpg',
    pie: 'Los últimos nómadas de Mongolia · música y diseño sonoro de Martín Perea Tobón',
    servicios: [
      {
        nombre: 'Música original',
        texto:
          'Composición a la imagen: temas, ambientes musicales y piezas sincronizadas con el corte. Grabamos con músicos reales y entregamos partituras cuando hacen falta.',
      },
      {
        nombre: 'Diseño sonoro',
        texto:
          'Ambientes, efectos, foley y texturas: el sonido de los lugares, los objetos y los movimientos de cada escena.',
      },
      {
        nombre: 'Edición de diálogos y mezcla final',
        texto:
          'Limpieza de diálogos, edición de sonido directo y mezcla para sala de cine, televisión o plataformas, con las especificaciones de cada una.',
      },
      {
        nombre: 'Supervisión musical',
        texto:
          'Si la película necesita canciones que ya existen, ayudamos a escogerlas, a pedir los permisos y a llevar el registro de la música usada.',
      },
      {
        nombre: 'Animación y videojuegos',
        texto: 'Música y efectos que siguen el movimiento cuadro a cuadro, y música por capas para juegos.',
      },
      {
        nombre: 'Desde el rodaje',
        texto:
          'Martín también es realizador: podemos sumarnos desde el guion o el rodaje para pensar la música junto con los planos, o registrar sonido y música en campo.',
      },
    ],
  },
  {
    id: 'publicidad',
    etq: 'Publicidad y marcas',
    titulo: 'Música para comerciales, campañas y contenido de marca',
    img: 'x_8pQ2hT2iE.jpg',
    pie: 'Mazda — Un color',
    servicios: [
      { nombre: 'Música original y jingles', texto: 'Compuesta para la idea y el ritmo del corte, con letra cuando la campaña la pide.' },
      { nombre: 'Diseño sonoro', texto: 'Sonido de producto, transiciones y ambientes, hechos a la medida del corte.' },
      { nombre: 'Identidad sonora', texto: 'Logo sonoro y un sistema de música para que la marca suene igual en todos sus canales.' },
      {
        nombre: 'Versiones y entregables',
        texto: 'Cortes de 6, 10, 15, 20, 30 y 60 segundos, pistas separadas para la posproducción y mezclas para cada medio.',
      },
    ],
    enlace: { url: '/publicidad', texto: 'Cómo trabajamos con agencias y marcas' },
  },
  {
    id: 'sesiones',
    etq: 'Artistas, sesiones y medios',
    titulo: 'Sesiones en vivo, discos, videoclips y podcasts',
    img: 'yfccCqJFOZU.jpg',
    pie: 'Noisesion · La Noise',
    servicios: [
      {
        nombre: 'Sesiones en vivo',
        texto:
          'Grabación multipista y filmación de bandas y solistas en vivo, con la mezcla y el video entregados juntos. Juan ha grabado series como Noisesion y Sesiones Macarena 360.',
      },
      {
        nombre: 'Producción musical y arreglos',
        texto: 'Producción de discos y sencillos, arreglos para ensambles y orquesta, y dirección de grabaciones.',
      },
      { nombre: 'Videoclips', texto: 'Idea, rodaje, cámara, dron y montaje, con la música en el centro.' },
      {
        nombre: 'Podcast y radio',
        texto: 'Grabación, edición y mezcla de voz, música para el programa, cortinas y locución.',
      },
      { nombre: 'Mezcla y masterización', texto: 'Para discos, sesiones y piezas audiovisuales, al nivel que pide cada plataforma.' },
    ],
  },
];


export const BLOQUES_EN: typeof BLOQUES_ES = [
  {
    id: 'cine',
    etq: 'Film, series and documentary',
    titulo: 'Music and sound for films, series and documentaries',
    img: 'mongolia-fotograma.jpg',
    pie: 'The last nomads of Mongolia · music and sound design by Martín Perea Tobón',
    servicios: [
      {
        nombre: 'Original music',
        texto:
          'Composing to picture: themes, musical atmospheres and cues synced to the cut. We record with real musicians and deliver sheet music when it is needed.',
      },
      {
        nombre: 'Sound design',
        texto: 'Ambiences, effects, foley and textures: the sound of the places, objects and movements in each scene.',
      },
      {
        nombre: 'Dialogue editing and final mix',
        texto:
          'Dialogue cleanup, production sound editing and mixing for cinema, television or streaming, to each one’s delivery specs.',
      },
      {
        nombre: 'Music supervision',
        texto:
          'If the film needs existing songs, we help choose them, clear the rights and keep the cue sheet of the music used.',
      },
      {
        nombre: 'Animation and video games',
        texto: 'Music and effects that follow the movement frame by frame, and layered, adaptive music for games.',
      },
      {
        nombre: 'From the shoot',
        texto:
          'Martín is also a filmmaker: we can join at the script or shooting stage to think about the music together with the shots, or record sound and music in the field.',
      },
    ],
  },
  {
    id: 'publicidad',
    etq: 'Advertising and brands',
    titulo: 'Music for commercials, campaigns and branded content',
    img: 'x_8pQ2hT2iE.jpg',
    pie: 'Mazda — Un color',
    servicios: [
      { nombre: 'Original music and jingles', texto: 'Written for the idea and the rhythm of the cut, with lyrics when the campaign calls for them.' },
      { nombre: 'Sound design', texto: 'Product sounds, transitions and ambiences, made to fit the cut.' },
      { nombre: 'Sonic identity', texto: 'A sound logo and a music system so the brand sounds the same on every channel.' },
      {
        nombre: 'Versions and deliverables',
        texto: 'Cutdowns of 6, 10, 15, 20, 30 and 60 seconds, stems for post-production and mixes for each medium.',
      },
    ],
    enlace: { url: '/publicidad', texto: 'How we work with agencies and brands' },
  },
  {
    id: 'sesiones',
    etq: 'Artists, sessions and media',
    titulo: 'Live sessions, albums, music videos and podcasts',
    img: 'yfccCqJFOZU.jpg',
    pie: 'Noisesion · La Noise',
    servicios: [
      {
        nombre: 'Live sessions',
        texto:
          'Multitrack recording and filming of bands and solo artists live, with the mix and the video delivered together. Juan has recorded series such as Noisesion and Sesiones Macarena 360.',
      },
      {
        nombre: 'Music production and arranging',
        texto: 'Producing albums and singles, arrangements for ensembles and orchestra, and directing recording sessions.',
      },
      { nombre: 'Music videos', texto: 'Concept, shoot, camera, drone and editing, with the music at the center.' },
      {
        nombre: 'Podcasts and radio',
        texto: 'Voice recording, editing and mixing, music for the show, stingers and voice-over.',
      },
      { nombre: 'Mixing and mastering', texto: 'For albums, sessions and audiovisual pieces, to the level each platform requires.' },
    ],
  },
];
export const PASOS_ES = [
  {
    nombre: 'Conversación',
    texto: 'Nos cuentas el proyecto y nos mandas lo que tengas: guion, corte, referencias. Preguntamos lo necesario.',
  },
  {
    nombre: 'Propuesta',
    texto: 'Te mandamos alcance, equipo, tiempos y valor. Si el proyecto lo pide, una primera maqueta corta.',
  },
  {
    nombre: 'Maquetas',
    texto: 'Bocetos sobre la imagen para acordar el tono antes de grabar. Aquí se hacen los cambios grandes.',
  },
  {
    nombre: 'Grabación y producción',
    texto: 'Convocamos a los músicos asociados que pida la música, grabamos y hacemos el diseño sonoro.',
  },
  {
    nombre: 'Mezcla y entrega',
    texto: 'Mezcla para cada medio, pistas separadas, partituras si aplica, y la licencia o cesión de derechos por escrito.',
  },
];
export const PASOS_EN: typeof PASOS_ES = [
  {
    nombre: 'Conversation',
    texto: 'You tell us about the project and send whatever you have: script, cut, references. We ask what we need to know.',
  },
  {
    nombre: 'Proposal',
    texto: 'We send you scope, team, timeline and fee. If the project calls for it, a short first demo.',
  },
  {
    nombre: 'Demos',
    texto: 'Sketches over the picture to agree on the tone before recording. This is where the big changes happen.',
  },
  {
    nombre: 'Recording and production',
    texto: 'We bring in the associate musicians the music needs, record, and do the sound design.',
  },
  {
    nombre: 'Mix and delivery',
    texto: 'Mixes for each medium, stems, sheet music if needed, and the license or rights assignment in writing.',
  },
];

// Páginas propias de servicio (SEO, 21 nov 2026): título y descripción con lo que se busca, texto y preguntas.
type Texto = { es: string; en: string };
export type Pagina = {
  id: 'cine' | 'sesiones';
  titulo: Texto;
  descripcion: Texto;
  h1: Texto;
  parrafos: { es: string[]; en: string[] };
  preguntas: { es: [string, string][]; en: [string, string][] };
};
export const PAGINAS: Pagina[] = [
  {
    id: 'cine',
    titulo: {
      es: 'Música original y diseño sonoro para cine y documental',
      en: 'Film composers and sound design for documentary and series',
    },
    descripcion: {
      es: 'Música original grabada con músicos reales, diseño sonoro, edición de diálogos y mezcla final para películas, documentales, series, animación y videojuegos. Productora de música en Bogotá, Colombia.',
      en: 'Original music recorded with real musicians, sound design, dialogue editing and final mix for films, documentaries, series, animation and video games. Music production company based in Bogotá, Colombia.',
    },
    h1: { es: 'Música y sonido para cine, series y documental', en: 'Music and sound for film, series and documentary' },
    parrafos: {
      es: [
        'Componemos música a la imagen para largometrajes, cortos, documentales, series, animación y videojuegos. También nos encargamos del resto de la banda sonora: diseño sonoro, foley, edición de diálogos y mezcla final para sala de cine, televisión o plataformas.',
        'Somos tres codirectores. Martín Perea Tobón compone y también es realizador, así que puede sumarse desde el guion o el rodaje; Santiago García hace diseño sonoro y composición; Juan Rizoma se ocupa de la producción y la ingeniería. Cuando la música lo pide, grabamos con los músicos asociados de nuestra red.',
      ],
      en: [
        'We compose to picture for feature films, shorts, documentaries, series, animation and video games. We also take care of the rest of the soundtrack: sound design, foley, dialogue editing and the final mix for cinema, television or streaming.',
        'We are three co-directors. Martín Perea Tobón composes and is also a filmmaker, so he can join at the script or shooting stage; Santiago García does sound design and composition; Juan Rizoma handles production and engineering. When the music calls for it, we record with the associate musicians in our network.',
      ],
    },
    preguntas: {
      es: [
        ['¿Pueden hacer solo la música o solo la mezcla?', 'Sí. Podemos hacer la banda sonora completa o sumarnos a un equipo que ya existe para resolver una parte: la música, el diseño sonoro, los diálogos o la mezcla.'],
        ['¿Cómo se acuerda el tono de la música?', 'Con maquetas sobre la imagen antes de grabar. Los cambios grandes se hacen en esa etapa; después grabamos con músicos, hacemos el diseño sonoro y mezclamos.'],
        ['¿Quién queda con los derechos de la música?', 'Se acuerda en cada proyecto y queda por escrito, como licencia de uso o como cesión de derechos.'],
        ['¿Cuánto cuesta la música de una película o un documental?', 'No tenemos precios fijos. Cada propuesta se arma con lo que pide la pieza: alcance, equipo, tiempos y valor.'],
      ],
      en: [
        ['Can you do just the music, or just the mix?', 'Yes. We can do the whole soundtrack or join an existing team to handle one part: music, sound design, dialogue or the mix.'],
        ['How do we agree on the tone of the music?', 'With demos over the picture before recording. The big changes happen at that stage; then we record with musicians, do the sound design and mix.'],
        ['Who owns the rights to the music?', 'It is agreed for each project and put in writing, either as a license or as a rights assignment.'],
        ['How much does music for a film or documentary cost?', 'We have no fixed rates. Each proposal is built around what the piece needs: scope, team, timeline and fee.'],
      ],
    },
  },
  {
    id: 'sesiones',
    titulo: {
      es: 'Sesiones en vivo, producción musical, mezcla y podcast',
      en: 'Live sessions, music production, mixing and mastering',
    },
    descripcion: {
      es: 'Grabación y filmación de sesiones en vivo, producción de discos y arreglos, videoclips, mezcla y masterización, y podcast. Fototoma Producciones, productora de música en Bogotá.',
      en: 'Recording and filming live sessions, album production and arranging, music videos, mixing and mastering, and podcasts. Fototoma Producciones, music production company in Bogotá, Colombia.',
    },
    h1: { es: 'Sesiones en vivo, discos, videoclips y podcasts', en: 'Live sessions, albums, music videos and podcasts' },
    parrafos: {
      es: [
        'Grabamos y filmamos bandas y solistas en vivo, y entregamos la mezcla y el video juntos. Juan Rizoma ha grabado series como Noisesion y Sesiones Macarena 360.',
        'También producimos discos y sencillos, escribimos arreglos para ensambles y orquesta, dirigimos grabaciones, hacemos videoclips con la música en el centro y grabamos, editamos y mezclamos podcasts y programas de radio.',
      ],
      en: [
        'We record and film bands and solo artists live, and deliver the mix and the video together. Juan Rizoma has recorded series such as Noisesion and Sesiones Macarena 360.',
        'We also produce albums and singles, write arrangements for ensembles and orchestra, direct recording sessions, make music videos with the music at the center, and record, edit and mix podcasts and radio shows.',
      ],
    },
    preguntas: {
      es: [
        ['¿Graban el audio y el video de la sesión al mismo tiempo?', 'Sí. Hacemos la grabación multipista y la filmación, y entregamos la mezcla y el video juntos.'],
        ['¿Mezclan y masterizan discos que ya están grabados?', 'Sí. Hacemos mezcla y masterización para discos, sesiones y piezas audiovisuales, al nivel que pide cada plataforma.'],
        ['¿Escriben arreglos?', 'Sí, para ensambles y orquesta, y dirigimos las grabaciones. Martín y Santiago tienen maestría en Música con énfasis en arreglos.'],
        ['¿Cuánto cuesta una sesión o un disco?', 'No tenemos precios fijos. Cada propuesta se arma con lo que pide el proyecto: alcance, equipo, tiempos y valor.'],
      ],
      en: [
        ['Do you record the audio and film the session at the same time?', 'Yes. We do the multitrack recording and the filming, and deliver the mix and the video together.'],
        ['Do you mix and master albums that are already recorded?', 'Yes. We mix and master albums, sessions and audiovisual pieces to the level each platform requires.'],
        ['Do you write arrangements?', 'Yes, for ensembles and orchestra, and we direct the recording sessions. Martín and Santiago hold master’s degrees in music with a focus on arranging.'],
        ['How much does a session or an album cost?', 'We have no fixed rates. Each proposal is built around what the project needs: scope, team, timeline and fee.'],
      ],
    },
  },
];
