// Configuración de Google Analytics 4
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || '';

// Eventos de GA4
export const GA_EVENTS = {
  // Eventos de conversión
  GENERATE_LEAD: 'generate_lead',
  DOWNLOAD_CATALOG: 'download_catalog',
  
  // Eventos de producto
  VIEW_ITEM: 'view_item',
  ADD_TO_QUOTE: 'add_to_quote',
  VIEW_SEARCH_RESULTS: 'view_search_results',
  
  // Eventos de navegación
  PAGE_VIEW: 'page_view',
  SCROLL: 'scroll',
  CLICK: 'click'
} as const;

// Función para inicializar GA4
export const initGA = () => {
  if (typeof window !== 'undefined' && GA_TRACKING_ID) {
    // Cargar script de GA4
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script);

    // Inicializar gtag
    window.gtag = window.gtag || function() {
      (window.gtag as any).q = (window.gtag as any).q || [];
      (window.gtag as any).q.push(arguments);
    };
    
    window.gtag('js', new Date());
    window.gtag('config', GA_TRACKING_ID, {
      page_title: document.title,
      page_location: window.location.href
    });
  }
};

// Función para trackear eventos
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'engagement',
      ...parameters
    });
  }
};

// Función para trackear conversiones
export const trackConversion = (eventName: string, value?: number, currency = 'MXN') => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'conversion',
      value: value,
      currency: currency
    });
  }
};

// Función para trackear vista de producto
export const trackProductView = (productId: string, productName: string, category: string) => {
  trackEvent(GA_EVENTS.VIEW_ITEM, {
    item_id: productId,
    item_name: productName,
    item_category: category,
    event_category: 'ecommerce'
  });
};

// Función para trackear generación de lead
export const trackLeadGeneration = (formType: string, value?: number) => {
  trackConversion(GA_EVENTS.GENERATE_LEAD, value);
  trackEvent(GA_EVENTS.GENERATE_LEAD, {
    form_type: formType,
    event_category: 'conversion'
  });
};

// Función para trackear descarga de catálogo
export const trackCatalogDownload = () => {
  trackEvent(GA_EVENTS.DOWNLOAD_CATALOG, {
    file_name: 'catalogo-bobcoperation.pdf',
    event_category: 'engagement'
  });
};

// Función para trackear agregar a cotización
export const trackAddToQuote = (productId: string, productName: string) => {
  trackEvent(GA_EVENTS.ADD_TO_QUOTE, {
    item_id: productId,
    item_name: productName,
    event_category: 'ecommerce'
  });
};

// Función para trackear búsqueda
export const trackSearch = (searchTerm: string, resultsCount: number) => {
  trackEvent(GA_EVENTS.VIEW_SEARCH_RESULTS, {
    search_term: searchTerm,
    results_count: resultsCount,
    event_category: 'engagement'
  });
};

// Función para trackear scroll
export const trackScroll = (scrollDepth: number) => {
  trackEvent(GA_EVENTS.SCROLL, {
    scroll_depth: scrollDepth,
    event_category: 'engagement'
  });
};

// Función para trackear clics
export const trackClick = (elementName: string, elementType: string) => {
  trackEvent(GA_EVENTS.CLICK, {
    element_name: elementName,
    element_type: elementType,
    event_category: 'engagement'
  });
};

// Hook para usar GA4 en componentes
export const useGA = () => {
  const trackEventCallback = (eventName: string, parameters?: Record<string, any>) => {
    trackEvent(eventName, parameters);
  };

  const trackConversionCallback = (eventName: string, value?: number) => {
    trackConversion(eventName, value);
  };

  return {
    trackEvent: trackEventCallback,
    trackConversion: trackConversionCallback,
    trackProductView,
    trackLeadGeneration,
    trackCatalogDownload,
    trackAddToQuote,
    trackSearch,
    trackScroll,
    trackClick
  };
};

// Declaración de tipos para TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}
