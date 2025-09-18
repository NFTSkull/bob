import { Metadata } from 'next';

// Tipos para metadatos
export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  openGraph?: {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    type?: string;
  };
  twitter?: {
    card?: string;
    title?: string;
    description?: string;
    image?: string;
  };
}

// Metadatos base del sitio
export const siteConfig = {
  name: 'BobCoperation',
  description: 'EPP y consumibles industriales con cumplimiento y entrega a tiempo. Abasto confiable para empresas, maquila y almacenes.',
  url: 'https://bob-chi-bice.vercel.app',
  ogImage: '/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/bobcoperation',
    instagram: 'https://instagram.com/bobcoperation',
    email: 'ventas@bobsolution.com',
    phone: '81 2509 0913'
  }
};

// Función para generar metadatos
export function generateMetadata({
  title,
  description,
  keywords = [],
  canonical,
  openGraph,
  twitter
}: PageMetadata): Metadata {
  const fullTitle = title.includes('BobCoperation') ? title : `${title} | BobCoperation`;
  
  return {
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: 'BobCoperation' }],
    creator: 'BobCoperation',
    publisher: 'BobCoperation',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: canonical || undefined,
    },
    openGraph: {
      type: 'website',
      locale: 'es_MX',
      url: canonical || siteConfig.url,
      title: fullTitle,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: openGraph?.image || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [openGraph?.image || siteConfig.ogImage],
    },
  };
}

// Metadatos específicos por página
export const pageMetadata = {
  home: {
    title: 'EPP y consumibles industriales para empresas — BobCoperation',
    description: 'Abasto confiable B2B con cumplimiento, disponibilidad y entregas a tiempo. Cotiza hoy.',
    keywords: ['EPP', 'equipos protección personal', 'consumibles industriales', 'guantes industriales', 'calzado seguridad', 'bobcoperation']
  },
  soluciones: {
    title: 'Soluciones de EPP y Consumibles Industriales | BobCoperation',
    description: 'Catálogo completo de equipos de protección personal y consumibles industriales para empresas.',
    keywords: ['soluciones EPP', 'equipos protección', 'consumibles industriales', 'catálogo productos']
  },
  guantes: {
    title: 'Guantes industriales (PU, anticorte, antiestático, algodón) | BobCoperation',
    description: 'Guantes para manufactura y logística. Anticorte nivel 5, PU, algodón, antiestático, nitrilo.',
    keywords: ['guantes industriales', 'guantes PU', 'guantes anticorte', 'guantes antiestático', 'guantes algodón', 'guantes nitrilo']
  },
  anticorte: {
    title: 'Guante anticorte nivel 5 — códigos y especificaciones | BobCoperation',
    description: 'Manejo de lámina, vidrio y cerámica. Paquete 12 pares, caja 240 pares.',
    keywords: ['guantes anticorte', 'nivel 5', 'protección corte', 'lámina vidrio', 'cerámica']
  },
  industrias: {
    title: 'Industrias que Servimos | BobCoperation',
    description: 'EPP especializado para manufactura, automotriz, logística, metalmecánica, electrónica y alimentos.',
    keywords: ['industrias', 'manufactura', 'automotriz', 'logística', 'metalmecánica', 'electrónica', 'alimentos']
  },
  contacto: {
    title: 'Contacto | BobCoperation',
    description: 'Contacta con nuestro equipo de ventas. Email: ventas@bobsolution.com | Tel: 81 2509 0913',
    keywords: ['contacto', 'ventas', 'cotización', 'bobcoperation']
  },
  faq: {
    title: 'Preguntas Frecuentes | BobCoperation',
    description: 'Respuestas a las preguntas más comunes sobre nuestros productos, entregas y servicios.',
    keywords: ['preguntas frecuentes', 'FAQ', 'ayuda', 'soporte']
  }
};

// Función para generar JSON-LD estructurado
export function generateStructuredData(type: string, data: any) {
  const baseStructuredData = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data
  };

  return JSON.stringify(baseStructuredData);
}

// Datos estructurados para la organización
export const organizationStructuredData = generateStructuredData('Organization', {
  name: 'BobCoperation',
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.png`,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: siteConfig.links.phone,
    contactType: 'sales',
    email: siteConfig.links.email,
    availableLanguage: 'Spanish'
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'MX',
    addressRegion: 'Nuevo León'
  },
  sameAs: [
    siteConfig.links.instagram,
    siteConfig.links.twitter
  ]
});

// Datos estructurados para el sitio web
export const websiteStructuredData = generateStructuredData('WebSite', {
  name: siteConfig.name,
  url: siteConfig.url,
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${siteConfig.url}/buscar?q={search_term_string}`
    },
    'query-input': 'required name=search_term_string'
  }
});

// Función para generar breadcrumbs estructurados
export function generateBreadcrumbStructuredData(breadcrumbs: Array<{name: string, href: string}>) {
  return generateStructuredData('BreadcrumbList', {
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `${siteConfig.url}${crumb.href}`
    }))
  });
}

// Función para generar datos estructurados de producto
export function generateProductStructuredData(product: {
  name: string;
  description: string;
  sku: string;
  material?: string;
  color?: string;
  size?: string;
  brand?: string;
  category?: string;
}) {
  return generateStructuredData('Product', {
    name: product.name,
    description: product.description,
    sku: product.sku,
    brand: {
      '@type': 'Brand',
      name: product.brand || 'BobCoperation'
    },
    category: product.category,
    additionalProperty: [
      ...(product.material ? [{ '@type': 'PropertyValue', name: 'Material', value: product.material }] : []),
      ...(product.color ? [{ '@type': 'PropertyValue', name: 'Color', value: product.color }] : []),
      ...(product.size ? [{ '@type': 'PropertyValue', name: 'Talla', value: product.size }] : [])
    ],
    audience: {
      '@type': 'BusinessAudience',
      audienceType: 'Business'
    }
  });
}

// Función para generar datos estructurados de FAQ
export function generateFAQStructuredData(faqs: Array<{question: string, answer: string}>) {
  return generateStructuredData('FAQPage', {
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  });
}
