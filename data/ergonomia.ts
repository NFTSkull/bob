// Tipos para ergonomía y protección
export interface ErgonomiaProteccion {
  id: string;
  name: string;
  description: string;
  slug: string;
  categoria: 'faja' | 'mandil' | 'mangas';
  productos: ProductoErgonomia[];
  advertencias?: string[];
}

export interface ProductoErgonomia {
  codigo: string;
  talla: string;
  material: string;
  color: string;
  empaque?: string;
  notas?: string;
  aplicaciones?: string[];
  caracteristicas?: string[];
}

// Faja Sacrolumbar
export const fajaSacrolumbar: ErgonomiaProteccion = {
  id: 'faja-sacrolumbar',
  name: 'Faja Sacrolumbar',
  description: 'Faja elástica con refuerzo para protección lumbar',
  slug: 'faja-sacrolumbar',
  categoria: 'faja',
  advertencias: [
    'No garantiza evitar lesiones; usar técnica adecuada de levantamiento',
    'Consultar con médico antes de uso prolongado'
  ],
  productos: [
    {
      codigo: 'BFA-0017',
      talla: 'CH / Chica',
      material: 'Nylon/Polietileno',
      color: 'Negro',
      empaque: 'C/1 pz',
      caracteristicas: [
        '100% elástica',
        'Doble refuerzo',
        '8" en parte lumbar',
        '5 varillas',
        'Elástico 5"'
      ],
      aplicaciones: [
        'Levantamiento de cargas',
        'Trabajo físico pesado',
        'Protección lumbar',
        'Prevención de lesiones'
      ]
    },
    {
      codigo: 'BFA-0018',
      talla: 'M / Mediana',
      material: 'Nylon/Polietileno',
      color: 'Negro',
      empaque: 'C/1 pz',
      caracteristicas: [
        '100% elástica',
        'Doble refuerzo',
        '8" en parte lumbar',
        '5 varillas',
        'Elástico 5"'
      ],
      aplicaciones: [
        'Levantamiento de cargas',
        'Trabajo físico pesado',
        'Protección lumbar',
        'Prevención de lesiones'
      ]
    },
    {
      codigo: 'BFA-0019',
      talla: 'G / Grande',
      material: 'Nylon/Polietileno',
      color: 'Negro',
      empaque: 'C/1 pz',
      caracteristicas: [
        '100% elástica',
        'Doble refuerzo',
        '8" en parte lumbar',
        '5 varillas',
        'Elástico 5"'
      ],
      aplicaciones: [
        'Levantamiento de cargas',
        'Trabajo físico pesado',
        'Protección lumbar',
        'Prevención de lesiones'
      ]
    },
    {
      codigo: 'BFA-0010',
      talla: 'XXG / Extra Grande',
      material: 'Nylon/Polietileno',
      color: 'Negro',
      empaque: 'C/1 pz',
      caracteristicas: [
        '100% elástica',
        'Doble refuerzo',
        '8" en parte lumbar',
        '5 varillas',
        'Elástico 5"'
      ],
      aplicaciones: [
        'Levantamiento de cargas',
        'Trabajo físico pesado',
        'Protección lumbar',
        'Prevención de lesiones'
      ]
    }
  ]
};

// Mandil de Mezclilla
export const mandilMezclilla: ErgonomiaProteccion = {
  id: 'mandil-mezclilla',
  name: 'Mandil de Mezclilla',
  description: 'Mandil de mezclilla para protección corporal en soldadura',
  slug: 'mandil-mezclilla',
  categoria: 'mandil',
  productos: [
    {
      codigo: 'BMM-001',
      talla: 'Unitalla',
      material: 'Mezclilla',
      color: 'Negro',
      empaque: 'C/1 pz',
      aplicaciones: [
        'Soldadura',
        'Partículas sólidas volátiles',
        'Protección corporal',
        'Resistente a salpicaduras'
      ],
      caracteristicas: [
        'Material resistente',
        'Protección completa',
        'Fácil de limpiar',
        'Duradero'
      ]
    }
  ]
};

// Mangas de Mezclilla
export const mangasMezclilla: ErgonomiaProteccion = {
  id: 'mangas-mezclilla',
  name: 'Mangas de Mezclilla',
  description: 'Mangas de mezclilla para protección de brazos',
  slug: 'mangas-mezclilla',
  categoria: 'mangas',
  productos: [
    {
      codigo: 'BMM-002',
      talla: 'Unitalla',
      material: 'Mezclilla',
      color: 'Negro',
      empaque: 'C/1 pz',
      aplicaciones: [
        'Protección de brazos',
        'Trabajo con materiales abrasivos',
        'Soldadura',
        'Actividades industriales'
      ],
      caracteristicas: [
        'Elástico en extremos',
        'Ambidiestra',
        'Alta duración',
        'Lavable'
      ],
      notas: 'Elástico en extremos, ambidiestra, alta duración, lavable'
    }
  ]
};

// Exportar todas las categorías de ergonomía
export const ergonomiaProteccion: ErgonomiaProteccion[] = [
  fajaSacrolumbar,
  mandilMezclilla,
  mangasMezclilla
];
