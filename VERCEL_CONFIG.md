# Configuración para Vercel - BobCoperation
# Dominio: https://bob-chi-bice.vercel.app

## Variables de Entorno Requeridas en Vercel

Configura estas variables en el dashboard de Vercel:

### Google Analytics 4
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

### Google Tag Manager
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

### Google Search Console Verification
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

### URL del Sitio
NEXT_PUBLIC_SITE_URL=https://bob-chi-bice.vercel.app

## Configuración de Dominio en Vercel

1. Ve a tu proyecto en Vercel Dashboard
2. Settings → Domains
3. Agrega el dominio: bob-chi-bice.vercel.app
4. Verifica que esté configurado como dominio principal

## Configuración de Build

- Framework: Next.js
- Build Command: npm run build
- Output Directory: .next
- Install Command: npm install

## Verificación Post-Deploy

Una vez desplegado, verifica:

✅ https://bob-chi-bice.vercel.app - Página principal
✅ https://bob-chi-bice.vercel.app/sitemap.xml - Sitemap
✅ https://bob-chi-bice.vercel.app/robots.txt - Robots
✅ https://bob-chi-bice.vercel.app/soluciones - Página de soluciones
✅ https://bob-chi-bice.vercel.app/contacto - Formulario de contacto

## Analytics

Configura Google Analytics 4 con:
- Property URL: https://bob-chi-bice.vercel.app
- Measurement ID: G-XXXXXXXXXX

## Search Console

Agrega la propiedad en Google Search Console:
- URL: https://bob-chi-bice.vercel.app
- Método de verificación: HTML tag (usar NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION)
