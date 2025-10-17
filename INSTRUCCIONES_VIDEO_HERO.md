# 🎥 Instrucciones para el Video Hero - BOB Coperation

## 📍 **Ubicación del Video**
Para que el video `bob-hero.mov` aparezca en el hero, debes colocarlo en:

```
public/videos/bob-hero.mov
```

## 🎯 **Especificaciones Técnicas Recomendadas**

### **Formatos Soportados:**
- **Principal**: `bob-hero.mov` (QuickTime)
- **Alternativo**: `bob-hero.mp4` (MP4 para compatibilidad)

### **Características del Video:**
- **Duración**: 10-30 segundos (se reproduce en loop)
- **Resolución**: Mínimo 1920x1080 (Full HD)
- **Aspecto**: 16:9 (landscape)
- **Peso**: Máximo 10MB para carga rápida
- **Formato**: H.264 codec recomendado

### **Contenido Sugerido:**
- Ambiente industrial/profesional
- Equipos de protección personal
- Entornos de trabajo seguros
- Movimiento sutil y elegante
- Colores que complementen la paleta corporativa

## 🚀 **Pasos para Implementar:**

### 1. **Preparar el Video:**
```bash
# Convertir a formato optimizado (opcional)
ffmpeg -i video-original.mov -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k bob-hero.mp4
```

### 2. **Colocar en el Proyecto:**
```bash
# Copiar el video a la carpeta correcta
cp bob-hero.mov "public/videos/bob-hero.mov"
cp bob-hero.mp4 "public/videos/bob-hero.mp4"  # Opcional
```

### 3. **Verificar:**
- El video aparecerá automáticamente en el hero
- Si no está disponible, se mostrará un fallback elegante con gradiente corporativo

## 🎨 **Fallback Actual:**
Mientras no tengas el video, el hero muestra:
- Gradiente corporativo elegante (azul BOB)
- Patrón geométrico sutil
- Logo "BOB" semi-transparente
- Overlays profesionales

## ⚡ **Optimizaciones Automáticas:**
- **Carga diferida**: `preload="metadata"`
- **Reproducción automática**: `autoplay muted loop`
- **Compatibilidad móvil**: `playsInline`
- **Accesibilidad**: `aria-label` descriptivo

## 🔧 **Solución de Problemas:**

### **Video no se reproduce:**
1. Verifica que esté en `public/videos/bob-hero.mov`
2. Comprueba el formato (MOV o MP4)
3. Verifica el peso del archivo (< 10MB)

### **Video se ve pixelado:**
- Usa resolución mínima 1920x1080
- Optimiza con compresión H.264

### **Carga lenta:**
- Reduce la duración del video
- Optimiza el peso del archivo
- Considera usar formato MP4

## 📱 **Compatibilidad:**
- ✅ Chrome/Edge/Firefox (desktop)
- ✅ Safari (desktop/móvil)
- ✅ Chrome móvil
- ✅ Fallback automático si no es compatible

---

**💡 Tip:** Una vez que coloques el video en `public/videos/bob-hero.mov`, se verá automáticamente en http://localhost:3000