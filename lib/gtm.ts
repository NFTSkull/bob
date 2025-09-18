// Google Tag Manager Configuration
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || '';

// Google Analytics 4 Configuration
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || '';

// Google Search Console Verification
export const GOOGLE_SITE_VERIFICATION = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '';

// Facebook Pixel Configuration
export const FACEBOOK_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || '';

// LinkedIn Insight Tag Configuration
export const LINKEDIN_INSIGHT_ID = process.env.NEXT_PUBLIC_LINKEDIN_INSIGHT_ID || '';

// Configuración de eventos personalizados
export const CUSTOM_EVENTS = {
  // Eventos de conversión
  QUOTE_REQUEST: 'quote_request',
  CATALOG_DOWNLOAD: 'catalog_download',
  CONTACT_FORM_SUBMIT: 'contact_form_submit',
  
  // Eventos de producto
  PRODUCT_VIEW: 'product_view',
  PRODUCT_CATEGORY_VIEW: 'product_category_view',
  ADD_TO_QUOTE: 'add_to_quote',
  
  // Eventos de navegación
  PAGE_VIEW: 'page_view',
  SECTION_VIEW: 'section_view',
  SCROLL_DEPTH: 'scroll_depth',
  
  // Eventos de interacción
  BUTTON_CLICK: 'button_click',
  LINK_CLICK: 'link_click',
  FORM_START: 'form_start',
  FORM_COMPLETE: 'form_complete',
  
  // Eventos de búsqueda
  SEARCH: 'search',
  SEARCH_RESULTS: 'search_results',
  
  // Eventos de tiempo
  TIME_ON_PAGE: 'time_on_page',
  TIME_ON_SECTION: 'time_on_section',
} as const;

// Configuración de dimensiones personalizadas
export const CUSTOM_DIMENSIONS = {
  USER_TYPE: 'user_type',
  INDUSTRY: 'industry',
  COMPANY_SIZE: 'company_size',
  PRODUCT_CATEGORY: 'product_category',
  CONTACT_METHOD: 'contact_method',
} as const;

// Configuración de métricas personalizadas
export const CUSTOM_METRICS = {
  QUOTE_VALUE: 'quote_value',
  PRODUCTS_IN_QUOTE: 'products_in_quote',
  FORM_COMPLETION_TIME: 'form_completion_time',
  PAGE_SCROLL_DEPTH: 'page_scroll_depth',
} as const;

// Función para inicializar Google Tag Manager
export const initGTM = () => {
  if (typeof window !== 'undefined' && GTM_ID) {
    // Cargar script de GTM
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
    document.head.appendChild(script);

    // Inicializar dataLayer
    window.dataLayer = window.dataLayer || [];
    window.gtag = function() {
      window.dataLayer.push(arguments);
    };
    
    window.gtag('js', new Date());
    window.gtag('config', GTM_ID);
  }
};

// Función para inicializar Google Analytics 4
export const initGA4 = () => {
  if (typeof window !== 'undefined' && GA_ID) {
    // Cargar script de GA4
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script);

    // Inicializar gtag
    window.dataLayer = window.dataLayer || [];
    window.gtag = function() {
      window.dataLayer.push(arguments);
    };
    
    window.gtag('js', new Date());
    window.gtag('config', GA_ID, {
      page_title: document.title,
      page_location: window.location.href,
      custom_map: {
        [CUSTOM_DIMENSIONS.USER_TYPE]: 'user_type',
        [CUSTOM_DIMENSIONS.INDUSTRY]: 'industry',
        [CUSTOM_DIMENSIONS.COMPANY_SIZE]: 'company_size',
        [CUSTOM_DIMENSIONS.PRODUCT_CATEGORY]: 'product_category',
        [CUSTOM_DIMENSIONS.CONTACT_METHOD]: 'contact_method',
      }
    });
  }
};

// Función para trackear eventos personalizados
export const trackCustomEvent = (
  eventName: string,
  parameters?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'custom',
      ...parameters
    });
  }
};

// Función para trackear conversiones
export const trackConversion = (
  eventName: string,
  value?: number,
  currency = 'MXN'
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'conversion',
      value: value,
      currency: currency,
      send_to: GA_ID
    });
  }
};

// Función para trackear vista de página
export const trackPageView = (url: string, title: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_ID, {
      page_title: title,
      page_location: url
    });
  }
};

// Función para trackear scroll depth
export const trackScrollDepth = (depth: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', CUSTOM_EVENTS.SCROLL_DEPTH, {
      event_category: 'engagement',
      custom_parameter_1: depth,
      value: depth
    });
  }
};

// Función para trackear tiempo en página
export const trackTimeOnPage = (timeInSeconds: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', CUSTOM_EVENTS.TIME_ON_PAGE, {
      event_category: 'engagement',
      value: timeInSeconds
    });
  }
};

// Función para trackear formularios
export const trackFormEvent = (
  formName: string,
  eventType: 'start' | 'complete' | 'error',
  additionalData?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    const eventName = eventType === 'start' 
      ? CUSTOM_EVENTS.FORM_START 
      : CUSTOM_EVENTS.FORM_COMPLETE;
    
    window.gtag('event', eventName, {
      event_category: 'form',
      form_name: formName,
      event_type: eventType,
      ...additionalData
    });
  }
};

// Función para trackear productos
export const trackProductEvent = (
  productId: string,
  productName: string,
  category: string,
  eventType: 'view' | 'add_to_quote' | 'remove_from_quote',
  additionalData?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventType === 'view' ? 'view_item' : 'add_to_cart', {
      event_category: 'ecommerce',
      item_id: productId,
      item_name: productName,
      item_category: category,
      event_type: eventType,
      ...additionalData
    });
  }
};

// Declaración de tipos para TypeScript
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}
