# BobCoperation - Sitio Web Institucional-Comercial

Sitio web B2B para **BobCoperation**, especializado en EPP (Equipos de Protección Personal) y consumibles industriales. Desarrollado con Next.js 14, TypeScript, TailwindCSS y optimizado para SEO técnico avanzado.

## 🚀 Características Principales

- **Stack Moderno**: Next.js 14 (App Router), TypeScript, TailwindCSS
- **SEO Optimizado**: Sitemap dinámico, robots.txt, JSON-LD estructurado
- **Analítica Completa**: GA4, GTM, eventos personalizados
- **Accesibilidad AA**: Cumple estándares WCAG 2.1 AA
- **Core Web Vitals**: Optimizado para rendimiento
- **Responsive Design**: Mobile-first approach
- **Formularios Validados**: Zod + React Hook Form
- **Datos Reales**: Catálogo completo con productos reales

## 📋 Requisitos Previos

- Node.js 18+ 
- npm o yarn
- Git

## 🛠️ Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/bobcoperation-website.git
   cd bobcoperation-website
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o
   yarn install
   ```

3. **Configurar variables de entorno**
   ```bash
   cp env.example .env.local
   ```
   
   Editar `.env.local` con tus valores:
   ```env
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
   NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   NEXT_PUBLIC_SITE_URL=https://bob-chi-bice.vercel.app
   ```

4. **Ejecutar en desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   ```

5. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Iniciar servidor de producción
npm run start

# Linting
npm run lint

# Type checking
npm run typecheck

# Linting + Type checking
npm run lint && npm run typecheck
```

## 📊 Configuración de Analítica

### Google Analytics 4 (GA4)

1. **Crear propiedad en GA4**
   - Ir a [Google Analytics](https://analytics.google.com/)
   - Crear nueva propiedad
   - Obtener Measurement ID (G-XXXXXXXXXX)

2. **Configurar en .env.local**
   ```env
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

3. **Eventos implementados**:
   - `generate_lead` - Formulario de cotización
   - `download_catalog` - Descarga de catálogo
   - `view_item` - Vista de producto
   - `add_to_quote` - Agregar a cotización
   - `view_search_results` - Resultados de búsqueda

### Google Tag Manager (GTM)

1. **Crear contenedor en GTM**
   - Ir a [Google Tag Manager](https://tagmanager.google.com/)
   - Crear nuevo contenedor
   - Obtener Container ID (GTM-XXXXXXX)

2. **Configurar en .env.local**
   ```env
   NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
   ```

### Google Search Console

1. **Verificar propiedad**
   - Ir a [Google Search Console](https://search.google.com/search-console/)
   - Agregar propiedad
   - Usar método de verificación HTML

2. **Configurar en .env.local**
   ```env
   NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   ```

## 🎨 Personalización

### Colores del Tema

Los colores están definidos en `styles/theme.css` y `tailwind.config.js`:

```css
:root {
  --color-primary: #0B0B0B;        /* Negro industrial */
  --color-accent: #FFC107;         /* Amarillo seguridad */
  --color-secondary: #E7E7E7;      /* Gris claro */
  --color-text-primary: #FFFFFF;  /* Blanco */
  --color-link: #0E5AA7;           /* Azul técnico */
}
```

### Contenido

- **Productos**: Editar archivos en `/data/`
- **Páginas**: Modificar componentes en `/app/`
- **Navegación**: Actualizar `navigation` en `/data/index.ts`

## 📁 Estructura del Proyecto

```
bobcoperation-website/
├── app/                    # App Router de Next.js
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx          # Página de inicio
│   ├── sitemap.ts        # Sitemap dinámico
│   ├── robots.ts         # Robots.txt
│   └── [rutas]/          # Páginas del sitio
├── components/            # Componentes reutilizables
│   ├── Hero.tsx
│   ├── SolutionsGrid.tsx
│   ├── ProductTable.tsx
│   ├── QuoteForm.tsx
│   └── ...
├── data/                  # Datos del catálogo
│   ├── guantes.ts
│   ├── proteccion.ts
│   ├── empaque.ts
│   └── ...
├── lib/                   # Utilidades y configuración
│   ├── analytics.ts
│   ├── metadata.ts
│   ├── utils.ts
│   └── gtm.ts
├── styles/               # Estilos personalizados
│   └── theme.css
├── public/               # Assets estáticos
│   ├── images/
│   └── docs/
└── middleware.ts         # Middleware de Next.js
```

## 🚀 Despliegue

### Vercel (Recomendado)

1. **Conectar repositorio**
   ```bash
   npm i -g vercel
   vercel
   ```

2. **Configurar variables de entorno**
   - Ir a Dashboard de Vercel
   - Settings → Environment Variables
   - Agregar todas las variables de `.env.local`

3. **Desplegar**
   ```bash
   vercel --prod
   ```

### Netlify

1. **Build command**
   ```bash
   npm run build
   ```

2. **Publish directory**
   ```
   .next
   ```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📈 Optimizaciones Implementadas

### Core Web Vitals
- ✅ **LCP**: Imágenes optimizadas con Next.js Image
- ✅ **FID**: JavaScript mínimo y lazy loading
- ✅ **CLS**: Dimensiones fijas para imágenes
- ✅ **TTFB**: Caché optimizado y compresión

### SEO Técnico
- ✅ **Sitemap XML**: Generado dinámicamente
- ✅ **Robots.txt**: Configurado para crawlers
- ✅ **JSON-LD**: Datos estructurados en todas las páginas
- ✅ **Meta tags**: Optimizados por página
- ✅ **Open Graph**: Para redes sociales
- ✅ **Twitter Cards**: Para Twitter

### Accesibilidad
- ✅ **WCAG 2.1 AA**: Cumple estándares
- ✅ **Skip links**: Para navegación por teclado
- ✅ **ARIA labels**: En elementos interactivos
- ✅ **Contraste**: Mínimo 4.5:1
- ✅ **Focus visible**: Indicadores claros

## 🔍 Testing

### Linting y Type Checking
```bash
npm run lint
npm run typecheck
```

### Lighthouse Audit
```bash
# Instalar Lighthouse CLI
npm install -g lighthouse

# Auditar sitio local
lighthouse http://localhost:3000 --output html --output-path ./lighthouse-report.html
```

## 📞 Soporte

Para soporte técnico o consultas sobre el proyecto:

- **Email**: ventas@bobsolution.com
- **Teléfono**: 81 2509 0913
- **Instagram**: @bobcoperation

## 📄 Licencia

Este proyecto es propiedad de BobCoperation. Todos los derechos reservados.

---

**Desarrollado con ❤️ para BobCoperation**
