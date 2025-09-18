// Tipos para calzado de seguridad
export interface CalzadoSeguridad {
  id: string;
  name: string;
  description: string;
  slug: string;
  norma: string;
  proteccion: string;
  productos: ProductoCalzado[];
}

export interface ProductoCalzado {
  codigo: string;
  talla: string;
  material: string;
  color: string;
  empaque?: string;
  caracteristicas?: string[];
  aplicaciones?: string[];
}

// Calzado de Seguridad con Punta de Acero
export const calzadoSeguridad: CalzadoSeguridad = {
  id: 'calzado-seguridad',
  name: 'Calzado de Seguridad',
  description: 'Calzado con punta de acero conforme a NOM-113',
  slug: 'calzado-seguridad',
  norma: 'NOM-113 (referencia)',
  proteccion: 'Punta de acero conforme a estándares europeos y NOM-113; soporta hasta 15 kN de presión y 200J de impacto',
  productos: [
    {
      codigo: 'BZA-0013',
      talla: '23',
      material: 'Poliuretano/Acero',
      color: 'Negro',
      empaque: 'C/1 par',
      caracteristicas: [
        'Punta de acero',
        'Suela antideslizante',
        'Resistente a impactos',
        'Conforme NOM-113'
      ],
      aplicaciones: [
        'Construcción',
        'Manufactura',
        'Almacenes',
        'Trabajo pesado'
      ]
    },
    {
      codigo: 'BZA-0014',
      talla: '24',
      material: 'Poliuretano/Acero',
      color: 'Negro',
      empaque: 'C/1 par',
      caracteristicas: [
        'Punta de acero',
        'Suela antideslizante',
        'Resistente a impactos',
        'Conforme NOM-113'
      ],
      aplicaciones: [
        'Construcción',
        'Manufactura',
        'Almacenes',
        'Trabajo pesado'
      ]
    },
    {
      codigo: 'BZA-0015',
      talla: '25',
      material: 'Poliuretano/Acero',
      color: 'Negro',
      empaque: 'C/1 par',
      caracteristicas: [
        'Punta de acero',
        'Suela antideslizante',
        'Resistente a impactos',
        'Conforme NOM-113'
      ],
      aplicaciones: [
        'Construcción',
        'Manufactura',
        'Almacenes',
        'Trabajo pesado'
      ]
    },
    {
      codigo: 'BZA-0016',
      talla: '26',
      material: 'Poliuretano/Acero',
      color: 'Negro',
      empaque: 'C/1 par',
      caracteristicas: [
        'Punta de acero',
        'Suela antideslizante',
        'Resistente a impactos',
        'Conforme NOM-113'
      ],
      aplicaciones: [
        'Construcción',
        'Manufactura',
        'Almacenes',
        'Trabajo pesado'
      ]
    },
    {
      codigo: 'BZA-0017',
      talla: '27',
      material: 'Poliuretano/Acero',
      color: 'Negro',
      empaque: 'C/1 par',
      caracteristicas: [
        'Punta de acero',
        'Suela antideslizante',
        'Resistente a impactos',
        'Conforme NOM-113'
      ],
      aplicaciones: [
        'Construcción',
        'Manufactura',
        'Almacenes',
        'Trabajo pesado'
      ]
    },
    {
      codigo: 'BZA-0018',
      talla: '28',
      material: 'Poliuretano/Acero',
      color: 'Negro',
      empaque: 'C/1 par',
      caracteristicas: [
        'Punta de acero',
        'Suela antideslizante',
        'Resistente a impactos',
        'Conforme NOM-113'
      ],
      aplicaciones: [
        'Construcción',
        'Manufactura',
        'Almacenes',
        'Trabajo pesado'
      ]
    },
    {
      codigo: 'BZA-0019',
      talla: '29',
      material: 'Poliuretano/Acero',
      color: 'Negro',
      empaque: 'C/1 par',
      caracteristicas: [
        'Punta de acero',
        'Suela antideslizante',
        'Resistente a impactos',
        'Conforme NOM-113'
      ],
      aplicaciones: [
        'Construcción',
        'Manufactura',
        'Almacenes',
        'Trabajo pesado'
      ]
    }
  ]
};

// Exportar calzado de seguridad
export const calzadoSeguridadData: CalzadoSeguridad[] = [calzadoSeguridad];
