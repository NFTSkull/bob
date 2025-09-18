// Tipos para protección visual y auditiva
export interface ProteccionVisualAuditiva {
  id: string;
  name: string;
  description: string;
  slug: string;
  tipo: 'lentes' | 'tapones';
  material?: string;
  usos?: string[];
  productos: ProductoProteccion[];
}

export interface ProductoProteccion {
  codigo: string;
  modelo?: string;
  material: string;
  color: string;
  empaque?: string;
  notas?: string;
  caracteristicas?: string[];
}

// Lentes de Protección
export const lentesProteccion: ProteccionVisualAuditiva = {
  id: 'lentes-proteccion',
  name: 'Lentes de Protección',
  description: 'Protección ocular para ambientes industriales',
  slug: 'lentes-proteccion',
  tipo: 'lentes',
  material: 'Policarbonato',
  usos: [
    'Protección ocular',
    'Protección contra partículas',
    'Protección UV',
    'Ambientes industriales'
  ],
  productos: [
    {
      codigo: 'BLP-001',
      modelo: 'Industrial Clear',
      material: 'Policarbonato',
      color: 'Transparente',
      empaque: 'C/12 pz',
      caracteristicas: [
        'Protección UV 400',
        'Anti-rayaduras',
        'Anti-empañamiento',
        'Resistente a impactos'
      ]
    },
    {
      codigo: 'BLP-002',
      modelo: 'Industrial Smoke',
      material: 'Policarbonato',
      color: 'Humo',
      empaque: 'C/12 pz',
      caracteristicas: [
        'Protección UV 400',
        'Anti-rayaduras',
        'Anti-empañamiento',
        'Resistente a impactos'
      ]
    },
    {
      codigo: 'BLP-003',
      modelo: 'Industrial Amber',
      material: 'Policarbonato',
      color: 'Ámbar',
      empaque: 'C/12 pz',
      caracteristicas: [
        'Protección UV 400',
        'Anti-rayaduras',
        'Anti-empañamiento',
        'Resistente a impactos',
        'Mejora contraste'
      ]
    }
  ]
};

// Tapones Auditivos
export const taponesAuditivos: ProteccionVisualAuditiva = {
  id: 'tapones-auditivos',
  name: 'Tapones Auditivos',
  description: 'Protección auditiva con cordón para evitar pérdidas',
  slug: 'tapones-auditivos',
  tipo: 'tapones',
  material: 'Espuma de poliuretano',
  usos: [
    'Protección auditiva',
    'Reducción de ruido',
    'Ambientes ruidosos',
    'Conformidad OSHA'
  ],
  productos: [
    {
      codigo: 'BTA-001',
      material: 'Espuma de poliuretano',
      color: 'Amarillo',
      empaque: 'C/50 pares',
      notas: 'Con cordón',
      caracteristicas: [
        'NRR 33 dB',
        'Con cordón',
        'Desechable',
        'Comfortable'
      ]
    },
    {
      codigo: 'BTA-002',
      material: 'Espuma de poliuretano',
      color: 'Naranja',
      empaque: 'C/50 pares',
      notas: 'Con cordón',
      caracteristicas: [
        'NRR 33 dB',
        'Con cordón',
        'Desechable',
        'Comfortable'
      ]
    },
    {
      codigo: 'BTA-003',
      material: 'Espuma de poliuretano',
      color: 'Verde',
      empaque: 'C/50 pares',
      notas: 'Con cordón',
      caracteristicas: [
        'NRR 33 dB',
        'Con cordón',
        'Desechable',
        'Comfortable'
      ]
    }
  ]
};

// Exportar todas las categorías de protección
export const proteccionVisualAuditiva: ProteccionVisualAuditiva[] = [
  lentesProteccion,
  taponesAuditivos
];
