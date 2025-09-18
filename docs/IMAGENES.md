# Optimización de imágenes para BobCoperation

## Configuración de Next.js Image

El proyecto está configurado para optimizar automáticamente las imágenes usando Next.js Image component con las siguientes características:

### Formatos Soportados
- WebP (preferido)
- AVIF (mejor compresión)
- JPEG (fallback)
- PNG (para transparencias)

### Tamaños Responsivos
- Mobile: 640px
- Tablet: 750px, 828px
- Desktop: 1080px, 1200px, 1920px, 2048px, 3840px

### Configuración en next.config.js
```javascript
images: {
  formats: ['image/webp', 'image/avif'],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
}
```

## Imágenes Requeridas

### Hero Images
- `/public/images/hero-industrial.jpg` (1920x1080)
- `/public/images/hero-warehouse.jpg` (1920x1080)
- `/public/images/hero-manufacturing.jpg` (1920x1080)

### Product Categories
- `/public/images/guantes-industriales.jpg` (800x600)
- `/public/images/proteccion-visual.jpg` (800x600)
- `/public/images/empaque-consumibles.jpg` (800x600)
- `/public/images/ergonomia-proteccion.jpg` (800x600)
- `/public/images/calzado-seguridad.jpg` (800x600)
- `/public/images/marcadores-industriales.jpg` (800x600)

### Icons and Logos
- `/public/logo.png` (512x512)
- `/public/favicon.ico` (32x32)
- `/public/apple-touch-icon.png` (180x180)
- `/public/favicon-32x32.png` (32x32)
- `/public/favicon-16x16.png` (16x16)

### Social Media
- `/public/og-image.jpg` (1200x630)
- `/public/twitter-image.jpg` (1200x630)

### Documents
- `/public/docs/catalogo-bobcoperation.pdf`

## Optimización Manual

### Herramientas Recomendadas
1. **Squoosh** (https://squoosh.app/) - Compresión online
2. **ImageOptim** - Para macOS
3. **TinyPNG** - Compresión con pérdida mínima

### Configuración Recomendada
- **JPEG**: Calidad 85-90%
- **PNG**: Compresión máxima
- **WebP**: Calidad 80-85%
- **AVIF**: Calidad 70-80%

## Lazy Loading

Todas las imágenes implementan lazy loading automático:

```tsx
<Image
  src="/images/product.jpg"
  alt="Descripción"
  width={800}
  height={600}
  loading="lazy"
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>
```

## Responsive Images

Uso de `sizes` para optimizar carga:

```tsx
<Image
  src="/images/hero.jpg"
  alt="Hero"
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  priority // Solo para above-the-fold
/>
```

## Preload de Imágenes Críticas

Para imágenes above-the-fold:

```tsx
<Image
  src="/images/hero.jpg"
  alt="Hero"
  priority // Precarga automática
/>
```

## Fallbacks

Implementación de fallbacks para navegadores antiguos:

```css
.image-fallback {
  background-image: url('/images/fallback.jpg');
  background-size: cover;
  background-position: center;
}
```
