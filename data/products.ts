export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  subcategory?: string;
  image: string;
  material?: string;
  codes?: string[];
  colors?: string[];
  sizes?: string[];
  packaging?: string;
  masterBox?: string;
  specifications?: string[];
  applications?: string[];
  certifications?: string[];
  weight?: string;
  thickness?: string;
  resistance?: string;
  norm?: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  image: string;
  products: Product[];
}

export const productCategories: ProductCategory[] = [
  {
    id: 'guantes',
    name: 'Guantes de Protección',
    description: 'Protección completa para las manos en entornos industriales exigentes',
    icon: 'M20.05,11C20.02,10.82 20,10.63 20,10.5C20,9.12 21.12,8 22.5,8C22.63,8 22.82,8.02 23,8.05V5.5C23,3.57 21.43,2 19.5,2H4.5C2.57,2 1,3.57 1,5.5V16.5C1,18.43 2.57,20 4.5,20H6.5V19C6.5,17.62 7.62,16.5 9,16.5C9.13,16.5 9.32,16.52 9.5,16.55V14H11V16.55C11.18,16.52 11.37,16.5 11.5,16.5C12.88,16.5 14,17.62 14,19V20H16V19C16,17.62 17.12,16.5 18.5,16.5C18.63,16.5 18.82,16.52 19,16.55V14H20.5V16.55C20.68,16.52 20.87,16.5 21,16.5C22.38,16.5 23.5,17.62 23.5,19V22H1.5V19C1.5,17.62 2.62,16.5 4,16.5C4.13,16.5 4.32,16.52 4.5,16.55V5.5C4.5,5.22 4.72,5 5,5H19C19.28,5 19.5,5.22 19.5,5.5V16.55C19.68,16.52 19.87,16.5 20,16.5C20.13,16.5 20.32,16.52 20.5,16.55V11.5C20.32,11.48 20.13,11.45 20.05,11Z',
    image: '/images/cat-seccion-guantes.webp',
    products: [
      {
        id: 'guantes-pu-recubiertos',
        name: 'Guantes de Poliuretano (PU)',
        description: 'Guantes industriales de poliuretano para manipulaciones finas y ensamblaje de piezas. Protección superior contra riesgos mecánicos con máxima destreza y sensibilidad táctil.',
        category: 'guantes',
        subcategory: 'pu-recubierto',
        image: '/images/cat-guantes-pu.webp',
        material: 'Poliéster 70%, Poliuretano 30%',
        codes: ['BGU-0016 a BGU-00110', 'BGU-0026 a BGU-00210'],
        colors: ['Amarillo', 'Blanco', 'Verde', 'Gris', 'Café'],
        sizes: ['XS (6)', 'S (7)', 'M (8)', 'L (9)', 'XL (10)'],
        packaging: 'Paquete 12 pares',
        masterBox: 'Caja máster 240 pares',
        applications: [
          'Manipulaciones finas industriales',
          'Ensamblaje de piezas electrónicas',
          'Protección contra riesgos mecánicos',
          'Trabajo de precisión en manufactura',
          'Control de calidad',
          'Industria automotriz'
        ],
        specifications: [
          'Recubrimiento de poliuretano de alta calidad',
          'Excelente agarre y adherencia',
          'Resistente al desgaste',
          'Lavable y reutilizable'
        ],
        certifications: ['Normas industriales', 'Calidad certificada']
      },
      {
        id: 'guantes-anticorte-nivel-5',
        name: 'Guantes Anticorte Nivel 5',
        description: 'Guantes de seguridad anticorte nivel 5 para manipulación de herramientas de corte, vidrios, láminas y cerámicas. Protección máxima contra materiales filosos con tecnología de fibra de acero.',
        category: 'guantes',
        subcategory: 'anticorte',
        image: '/images/cat-guantes-anticorte-nivel-5.webp',
        material: 'Polietileno 35%, Poliuretano 20%, Acero 15%, Nailon 13%, Vidrio 10%, Elastano 7%',
        codes: ['BGU-0036 a BGU-00310'],
        colors: ['Amarillo', 'Blanco', 'Verde', 'Gris', 'Café'],
        sizes: ['XS (6)', 'S (7)', 'M (8)', 'L (9)', 'XL (10)'],
        packaging: 'Paquete 12 pares',
        masterBox: 'Caja máster 240 pares',
        applications: [
          'Manipulación de herramientas para corte',
          'Trabajo con vidrios y cristales',
          'Manejo de láminas metálicas',
          'Cerámicas y materiales filosos',
          'Industria del vidrio',
          'Construcción y demolición'
        ],
        specifications: [
          'Nivel 5 de protección contra cortes',
          'Fibra de acero integrada',
          'Excelente flexibilidad',
          'Resistente a perforaciones'
        ],
        certifications: ['Nivel 5 de corte', 'ANSI/ISEA 105', 'EN 388']
      },
      {
        id: 'guantes-pu-sin-recubrimiento-negro',
        name: 'Guantes PU sin Recubrimiento (Negros)',
        description: 'Guantes de poliéster sin recubrimiento para manejo e inspección de piezas delicadas. Máxima sensibilidad táctil y protección contra rayaduras sin comprometer la destreza.',
        category: 'guantes',
        subcategory: 'pu-sin-recubrimiento',
        image: '/images/cat-guantes-pu-sin-recubrimiento-negro.webp',
        material: 'Poliéster 100%',
        codes: ['BGU-0046 a BGU-00410'],
        colors: ['Negro'],
        sizes: ['XS (6)', 'S (7)', 'M (8)', 'L (9)', 'XL (10)'],
        packaging: 'Paquete 12 pares',
        masterBox: 'Caja máster 240 pares',
        applications: [
          'Manejo e inspección de piezas delicadas',
          'Protección contra rayaduras',
          'Máxima sensibilidad táctil',
          'Control de calidad industrial',
          'Industria electrónica',
          'Manufactura de precisión'
        ],
        specifications: [
          'Sin recubrimiento para máxima sensibilidad',
          'Evita huellas digitales',
          'Protección contra rayaduras',
          'Excelente destreza'
        ],
        certifications: ['Calidad industrial', 'Normas de precisión']
      },
      {
        id: 'guantes-pu-sin-recubrimiento-blanco',
        name: 'Guantes PU sin Recubrimiento (Blancos)',
        description: 'Guantes blancos de poliéster sin recubrimiento para ambientes de sala limpia y alta precisión. Ideales para industria farmacéutica, electrónica y ambientes estériles.',
        category: 'guantes',
        subcategory: 'pu-sin-recubrimiento',
        image: '/images/cat-guantes-pu-sin-recubrimiento-blanco.webp',
        material: 'Poliéster 100%',
        codes: ['BGU-0056 a BGU-00510'],
        colors: ['Blanco'],
        sizes: ['XS (6)', 'S (7)', 'M (8)', 'L (9)', 'XL (10)'],
        packaging: 'Paquete 12 pares',
        masterBox: 'Caja máster 240 pares',
        applications: [
          'Sala limpia y ambientes estériles',
          'Industria farmacéutica',
          'Electrónica de precisión',
          'Laboratorios especializados',
          'Manufactura de semiconductores',
          'Industria alimentaria'
        ],
        specifications: [
          'Color blanco para ambientes limpios',
          'Sin recubrimiento para máxima sensibilidad',
          'Evita contaminación',
          'Cumple estándares de sala limpia'
        ],
        certifications: ['Sala limpia', 'Normas farmacéuticas', 'ISO 14644']
      },
      {
        id: 'guantes-algodon-45-50g',
        name: 'Guantes de Algodón 45-50g',
        description: 'Guantes de algodón de peso ligero para protección básica en tareas generales industriales. Ideales para almacenes, talleres y uso doméstico con máxima comodidad.',
        category: 'guantes',
        subcategory: 'algodon',
        image: '/images/cat-guantes-algodon-45-50g.webp',
        material: 'Poliéster 70%, Algodón 30%',
        codes: ['BGU-00650'],
        colors: ['Blanco'],
        sizes: ['XS/S'],
        weight: '45-50g',
        packaging: 'Paquete 12 pares',
        masterBox: 'Caja máster 360 pares',
        applications: [
          'Tareas generales en industria',
          'Trabajo en almacenes',
          'Talleres mecánicos',
          'Uso doméstico',
          'Mantenimiento básico',
          'Jardinería'
        ],
        specifications: [
          'Peso ligero 45-50g',
          'Composición mixta algodón-poliéster',
          'Comodidad y transpirabilidad',
          'Lavable y reutilizable'
        ],
        certifications: ['Calidad industrial', 'Normas básicas']
      },
      {
        id: 'guantes-algodon-65g',
        name: 'Guantes de Algodón 65g',
        description: 'Guantes de algodón de peso intermedio para tareas generales con mayor durabilidad. Perfectos para manipulación intensiva y trabajos de construcción ligera.',
        category: 'guantes',
        subcategory: 'algodon',
        image: '/images/cat-guantes-algodon-65g.webp',
        material: 'Poliéster 70%, Algodón 30%',
        codes: ['BGU-00665'],
        colors: ['Gris'],
        sizes: ['M/G'],
        weight: '65g',
        packaging: 'Paquete 12 pares',
        masterBox: 'Caja máster 360 pares',
        applications: [
          'Carga y descarga de materiales',
          'Manipulación de materiales pesados',
          'Construcción ligera',
          'Mantenimiento industrial',
          'Trabajos de jardinería',
          'Almacenamiento'
        ],
        specifications: [
          'Peso intermedio 65g',
          'Mayor durabilidad',
          'Resistente al desgaste',
          'Excelente agarre'
        ],
        certifications: ['Calidad industrial', 'Resistencia certificada']
      },
      {
        id: 'guantes-algodon-70g',
        name: 'Guantes de Algodón 70g',
        description: 'Guantes de algodón de máximo peso para trabajos pesados industriales. Máxima resistencia frente al desgaste, ideales para uso industrial continuo y construcción.',
        category: 'guantes',
        subcategory: 'algodon',
        image: '/images/cat-guantes-algodon-70g.webp',
        material: 'Poliéster 70%, Algodón 30%',
        codes: ['BGU-00670'],
        colors: ['Gris'],
        sizes: ['M/G'],
        weight: '70g',
        packaging: 'Paquete 12 pares',
        masterBox: 'Caja máster 360 pares',
        applications: [
          'Trabajo pesado industrial',
          'Construcción y demolición',
          'Soldadura ligera',
          'Mantenimiento industrial pesado',
          'Minería',
          'Industria metalúrgica'
        ],
        specifications: [
          'Peso máximo 70g',
          'Máxima resistencia al desgaste',
          'Diseñado para uso continuo',
          'Protección superior'
        ],
        certifications: ['Calidad industrial pesada', 'Resistencia máxima']
      },
      {
        id: 'guantes-antiestaticos-completo',
        name: 'Guante Antiestático Completo',
        description: 'Guantes antiestáticos con recubrimiento completo para protección ESD total. Evita descargas electrostáticas y contaminación en componentes electrónicos sensibles.',
        category: 'guantes',
        subcategory: 'antiestatico',
        image: '/images/cat-guantes-antiestatico-completo.webp',
        material: 'Poliéster 70%, Poliuretano 20%, Carbono 10%',
        codes: ['BGU-0076 a BGU-00710', 'BGU-0090 a BGU-0094'],
        colors: ['Amarillo', 'Blanco', 'Verde', 'Gris', 'Café'],
        sizes: ['XS (6)', 'S (7)', 'M (8)', 'L (9)', 'XL (10)'],
        packaging: 'Paquete 12 pares',
        masterBox: 'Caja máster 240 pares',
        applications: [
          'Evita contaminación de componentes electrónicos',
          'Ensamble de PCB y circuitos',
          'Manufactura electrónica',
          'Equipos sensibles ESD',
          'Industria de semiconductores',
          'Laboratorios electrónicos'
        ],
        specifications: [
          'Recubrimiento antiestático completo',
          'Protección ESD certificada',
          'Conductividad controlada',
          'Evita descargas electrostáticas'
        ],
        certifications: ['ESD S20.20', 'IEC 61340', 'ANSI/ESD S20.20']
      },
      {
        id: 'guantes-antiestaticos-punta',
        name: 'Guante Antiestático Punta',
        description: 'Guantes antiestáticos con recubrimiento solo en la punta para manipulación delicada de electrónicos. Máxima sensibilidad y control con protección ESD en las yemas.',
        category: 'guantes',
        subcategory: 'antiestatico',
        image: '/images/cat-guantes-antiestatico-punta.webp',
        material: 'Poliéster 75%, Poliuretano 10%, Carbono 15%',
        codes: ['BGU-0086 a BGU-00810'],
        colors: ['Amarillo', 'Blanco', 'Verde', 'Gris', 'Café'],
        sizes: ['XS (6)', 'S (7)', 'M (8)', 'L (9)', 'XL (10)'],
        packaging: 'Paquete 12 pares',
        masterBox: 'Caja máster 240 pares',
        applications: [
          'Manipulación delicada en electrónica',
          'Componentes sensibles ESD',
          'Reparación electrónica de precisión',
          'Testing de componentes',
          'Microelectrónica',
          'Laboratorios de investigación'
        ],
        specifications: [
          'Recubrimiento antiestático solo en punta',
          'Máxima sensibilidad táctil',
          'Protección ESD en yemas',
          'Control de precisión superior'
        ],
        certifications: ['ESD S20.20', 'IEC 61340', 'Precisión certificada']
      },
      {
        id: 'guantes-nitrilo-desechables',
        name: 'Guantes Nitrilo Desechables',
        description: 'Guantes desechables de nitrilo para protección frente a bacterias, virus y químicos. Máxima comodidad y precisión en tareas delicadas con resistencia química superior.',
        category: 'guantes',
        subcategory: 'desechable',
        image: '/images/cat-guantes-nitrilo-desechable.webp',
        material: 'NBR 100%',
        codes: ['BGU-0087 (S)', 'BGU-0088 (M)', 'BGU-0089 (L)'],
        colors: ['Azul'],
        sizes: ['S (7)', 'M (8)', 'L (9)'],
        packaging: 'Caja 100 pares',
        masterBox: 'Caja máster 1000 pares',
        applications: [
          'Protección frente a bacterias y virus',
          'Manejo de sustancias químicas',
          'Alta precisión en tareas delicadas',
          'Laboratorios y análisis',
          'Industria alimentaria',
          'Sector médico y farmacéutico'
        ],
        specifications: [
          'Material NBR 100%',
          'Libre de látex',
          'Resistente a químicos',
          'Excelente sensibilidad táctil'
        ],
        certifications: ['Libre de látex', 'Resistente a químicos', 'FDA aprobado']
      }
    ]
  },
  {
    id: 'proteccion-visual-auditiva',
    name: 'Protección Visual y Auditiva',
    description: 'Equipos especializados para proteger vista y oído en entornos industriales',
    icon: 'M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5M2,8.5C2,8.22 2.22,8 2.5,8H4.5C4.78,8 5,8.22 5,8.5V15.5C5,15.78 4.78,16 4.5,16H2.5C2.22,16 2,15.78 2,15.5V8.5M19,8.5C19,8.22 19.22,8 19.5,8H21.5C21.78,8 22,8.22 22,8.5V15.5C22,15.78 21.78,16 21.5,16H19.5C19.22,16 19,15.78 19,15.5V8.5Z',
    image: '/images/cat-lentes-seguridad.webp',
    products: [
      {
        id: 'lentes-seguridad',
        name: 'Lentes de Seguridad Industrial',
        description: 'Protección ocular confiable en entornos de riesgo industrial. Fabricados en policarbonato de alta resistencia con diseño unitalla cómodo para máxima protección y visibilidad clara.',
        category: 'proteccion-visual-auditiva',
        subcategory: 'visual',
        image: '/images/cat-lentes-seguridad.webp',
        material: 'Policarbonato de alta resistencia',
        codes: ['BLE-001'],
        colors: ['Transparente'],
        sizes: ['Unitalla'],
        packaging: 'Caja con 12 pz',
        masterBox: 'Caja máster con 300 pz',
        applications: [
          'Protección contra partículas sólidas',
          'Salpicaduras ligeras en áreas industriales',
          'Trabajo en entornos de riesgo',
          'Manufactura y producción industrial',
          'Construcción y demolición',
          'Laboratorios y áreas químicas'
        ],
        specifications: [
          'Lentes de policarbonato de alta resistencia',
          'Diseño unitalla cómodo y ergonómico',
          'Protección contra impactos y partículas',
          'Visibilidad clara sin distorsión',
          'Resistente a rayaduras'
        ],
        certifications: ['ANSI Z87.1', 'Resistencia al impacto', 'Normas industriales']
      },
      {
        id: 'tapones-auditivos',
        name: 'Tapones Auditivos con Cordón Desechables',
        description: 'Protección auditiva ligera y desechable elaborada en espuma de poliuretano con cordón azul para mayor practicidad. Combina comodidad y practicidad en entornos de alto ruido.',
        category: 'proteccion-visual-auditiva',
        subcategory: 'auditiva',
        image: '/images/cat-tapones-auditivos.webp',
        material: 'Espuma de poliuretano',
        codes: ['BTA-001'],
        colors: ['Naranja (cordón azul)'],
        sizes: ['Unitalla'],
        packaging: 'Paquete con 200 pares',
        masterBox: 'Caja máster con 2000 pares',
        applications: [
          'Reducción de ruidos en ambientes industriales',
          'Protección auditiva en entornos de alto ruido',
          'Manufactura y producción industrial',
          'Construcción y demolición',
          'Aeropuertos y talleres mecánicos',
          'Eventos y conciertos'
        ],
        specifications: [
          'Espuma de poliuretano de alta calidad',
          'Cordón azul para mayor practicidad',
          'Diseño desechable e higiénico',
          'Ajuste perfecto y cómodo',
          'Fácil inserción y extracción'
        ],
        certifications: ['Normas de protección auditiva', 'Materiales seguros', 'Desechable certificado']
      }
    ]
  },
  {
    id: 'empaque-consumibles',
    name: 'Empaque y Consumibles',
    description: 'Soluciones completas para empaque, protección y logística industrial',
    icon: 'M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L5,8.09V15.91L12,19.85L19,15.91V8.09L12,4.15Z',
    image: '/images/cat-poliestretch-pallet.webp',
    products: [
      {
        id: 'trapo-industrial',
        name: 'Trapo Industrial',
        description: 'Trapo de algodón para limpieza industrial y mantenimiento.',
        category: 'empaque-consumibles',
        subcategory: 'limpieza',
        image: '/images/cat-trapo-industrial.webp',
        material: 'Algodón',
        codes: ['BTR-001'],
        packaging: 'Caja 200 pares',
        masterBox: 'Caja máster 2000 pares',
        applications: [
          'Limpieza industrial',
          'Mantenimiento',
          'Absorción de líquidos',
          'Talleres'
        ]
      },
      {
        id: 'cinta-adhesiva',
        name: 'Cinta Adhesiva Transparente',
        description: 'Cinta de alta adherencia para sellado profesional.',
        category: 'empaque-consumibles',
        subcategory: 'adhesivos',
        image: '/images/cat-cinta-adhesiva.webp',
        material: 'Poliéster',
        codes: ['BCT-001'],
        colors: ['Transparente'],
        specifications: ['48 mm x 150 m', 'Alta adherencia'],
        applications: [
          'Sellado de cajas',
          'Empaque',
          'Etiquetado',
          'Reparaciones'
        ]
      },
      {
        id: 'pelicula-poliestretch',
        name: 'Película Poliestretch',
        description: 'Film estirable de alta resistencia para asegurar cargas.',
        category: 'empaque-consumibles',
        subcategory: 'film',
        image: '/images/cat-poliestretch-pallet.webp',
        material: 'Poliestretch',
        codes: ['BPP-001 (18" cal 80, 1.6 kg)', 'BPP-002 (18" cal 80, 2 kg)', 'BPP-003 (18" cal 80, 2.5 kg)'],
        colors: ['Transparente'],
        packaging: 'Paquete 4 pz',
        applications: [
          'Paletizado',
          'Aseguramiento de cargas',
          'Almacén',
          'Transporte'
        ]
      },
      {
        id: 'polifoam',
        name: 'Polifoam',
        description: 'Rollo de polifoam para acolchonamiento y protección.',
        category: 'empaque-consumibles',
        subcategory: 'proteccion',
        image: '/images/cat-polifoam-acolchado.webp',
        material: 'Foam de polietileno',
        thickness: '1/32" a 1/4" + Foam 3000',
        applications: [
          'Acolchonamiento',
          'Absorción de vibración',
          'Protección contra golpes',
          'Embalaje de productos delicados'
        ]
      }
    ]
  },
  {
    id: 'ergonomia-proteccion',
    name: 'Ergonomía y Protección',
    description: 'Equipos ergonómicos para prevenir lesiones y mejorar la comodidad laboral',
    icon: 'M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M11,6V12L15.5,14.5L16.5,12.9L12.5,10.8V6H11M7,2H9V5H7V2M15,2H17V5H15V2M7,19H9V22H7V19M15,19H17V22H15V19Z',
    image: '/images/cat-faja-sacrolumbar.webp',
    products: [
      {
        id: 'faja-sacrolumbar',
        name: 'Faja Sacrolumbar',
        description: 'Soporte lumbar con doble refuerzo y varillas de soporte.',
        category: 'ergonomia-proteccion',
        subcategory: 'soporte',
        image: '/images/cat-faja-sacrolumbar.webp',
        material: 'Nylon + Polietileno',
        codes: ['BFA-0017 (CH)', 'BFA-0018 (M)', 'BFA-0019 (G)', 'BFA-0010 (XXG)'],
        colors: ['Negro'],
        sizes: ['CH', 'M', 'G', 'XXG'],
        specifications: [
          '100% elástica',
          'Doble refuerzo',
          '8" en zona lumbar',
          '5 varillas de soporte'
        ],
        applications: [
          'Levantamiento de cargas',
          'Soporte lumbar',
          'Prevención de lesiones',
          'Trabajo pesado'
        ]
      },
      {
        id: 'mandil-mezclilla',
        name: 'Mandil de Mezclilla',
        description: 'Protección frontal resistente contra chispas y partículas.',
        category: 'ergonomia-proteccion',
        subcategory: 'vestimenta',
        image: '/images/cat-mandil-mezclilla.webp',
        material: 'Mezclilla',
        codes: ['BMM-001'],
        colors: ['Negro'],
        sizes: ['Unitalla'],
        applications: [
          'Protección contra chispas de soldadura',
          'Partículas sólidas',
          'Resistente a salpicaduras',
          'Taller mecánico'
        ]
      },
      {
        id: 'mangas-mezclilla',
        name: 'Manga de Mezclilla',
        description: 'Protección específica para brazos, resistente y lavable.',
        category: 'ergonomia-proteccion',
        subcategory: 'vestimenta',
        image: '/images/cat-mangas-mezclilla.webp',
        material: 'Mezclilla',
        codes: ['BMM-002'],
        colors: ['Negro'],
        sizes: ['Unitalla'],
        applications: [
          'Protección de brazos',
          'Resistente',
          'Lavable',
          'Ambidiestra'
        ]
      }
    ]
  },
  {
    id: 'calzado-seguridad',
    name: 'Calzado de Seguridad',
    description: 'Calzado industrial certificado para máxima protección y comodidad',
    icon: 'M3,17V19H9V17H3M3,13V15H7V13H3M3,9V11H9V9H3M3,5V7H7V5H3M11,17V19H17V17H11M11,13V15H15V13H11M11,9V11H17V9H11M11,5V7H15V5H11M19,17V19H21V17H19M19,13V15H21V13H19M19,9V11H21V9H19M19,5V7H21V5H19M5,20C4.45,20 4,19.55 4,19V18H8V19C8,19.55 7.55,20 7,20H5M13,20C12.45,20 12,19.55 12,19V18H16V19C16,19.55 15.55,20 15,20H13Z',
    image: '/images/cat-calzado-punta-acero.webp',
    products: [
      {
        id: 'calzado-punta-acero',
        name: 'Calzado de Seguridad',
        description: 'Bota industrial con punta de acero y máxima protección.',
        category: 'calzado-seguridad',
        subcategory: 'botas',
        image: '/images/cat-calzado-punta-acero.webp',
        material: 'Poliuretano + Acero',
        codes: ['BZA-0013 a BZA-0019'],
        colors: ['Negro'],
        sizes: ['Tallas 23-29'],
        norm: 'NOM-113 (punta de acero)',
        resistance: 'Resiste hasta 15 kN de presión y 200J de impacto',
        applications: [
          'Construcción',
          'Manufactura pesada',
          'Soldadura',
          'Industria en general'
        ],
        certifications: ['NOM-113', 'Punta de acero certificada']
      }
    ]
  },
  {
    id: 'marcadores-industriales',
    name: 'Marcadores Industriales',
    description: 'Marcadores especializados para identificación en diversos materiales',
    icon: 'M20.71,4.63L19.37,3.29C19,2.9 18.35,2.9 17.96,3.29L9,12.25L11.75,15L20.71,6.04C21.1,5.65 21.1,5 20.71,4.63M7,14A3,3 0 0,0 4,17C4,18.31 2.84,19 2,19C2.92,20.22 4.5,21 6,21A4,4 0 0,0 10,17A3,3 0 0,0 7,14M14.75,3.25L13.5,2L11,4.5L12.25,5.75L14.75,3.25Z',
    image: '/images/marcador-base-alcohol.png',
    products: [
      {
        id: 'marcadores-base-aceite',
        name: 'Marcadores Base Aceite',
        description: 'Marcador permanente con tinta opaca base aceite.',
        category: 'marcadores-industriales',
        subcategory: 'permanente',
        image: '/images/marcador-base-aceite.png',
        codes: ['BMA-001 a BMA-011'],
        colors: ['Blanco', 'Negro', 'Rojo', 'Naranja', 'Rosa', 'Morado', 'Verde', 'Amarillo', 'Azul', 'Plata', 'Oro'],
        specifications: [
          'Marcador permanente',
          'Tinta opaca base aceite',
          'Punta redonda media'
        ],
        packaging: 'Caja 12 pz',
        masterBox: 'Caja máster 576 pz',
        applications: [
          'Marcado en metal',
          'Identificación permanente',
          'Control de calidad',
          'Inventarios'
        ]
      },
      {
        id: 'marcadores-base-alcohol',
        name: 'Marcadores Base Alcohol',
        description: 'Rotulador permanente tipo Sharpie con punta fina.',
        category: 'marcadores-industriales',
        subcategory: 'multiuso',
        image: '/images/marcador-base-alcohol.png',
        codes: ['BMA-012 a BMA-015'],
        colors: ['Negro', 'Verde', 'Rojo', 'Azul'],
        specifications: [
          'Rotulador permanente tipo Sharpie',
          'Punta fina 1.5 mm',
          'Tinta a base de alcohol'
        ],
        packaging: 'Caja 12 pz / Caja 144 pz',
        masterBox: 'Caja máster 864 pz',
        applications: [
          'Plásticos',
          'Cerámica',
          'Vidrio',
          'Etiquetado general'
        ]
      }
    ]
  }
];

export const getAllProducts = (): Product[] => {
  return productCategories.flatMap(category => category.products);
};

export const getProductsByCategory = (categoryId: string): Product[] => {
  const category = productCategories.find(cat => cat.id === categoryId);
  return category ? category.products : [];
};

export const getProductById = (productId: string): Product | undefined => {
  return getAllProducts().find(product => product.id === productId);
};