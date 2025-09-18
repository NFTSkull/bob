#!/bin/bash

# Script para subir BobCoperation a GitHub y activar Vercel
echo "🚀 Iniciando proceso de deployment..."

# Navegar al directorio del proyecto
cd "/Users/grecovillanuevaortiz/Desktop/Bob Coperation"

# Verificar que estamos en el directorio correcto
echo "📁 Directorio actual: $(pwd)"
echo "📋 Archivos en el directorio:"
ls -la | head -10

# Configurar Git
echo "⚙️ Configurando Git..."
git config user.name "BobCoperation"
git config user.email "ventas@bobsolution.com"

# Inicializar repositorio
echo "📦 Inicializando repositorio Git..."
git init

# Agregar repositorio remoto
echo "🔗 Configurando repositorio remoto..."
git remote add origin https://github.com/NFTSkull/bob.git

# Agregar todos los archivos
echo "📄 Agregando archivos..."
git add .

# Hacer commit inicial
echo "💾 Haciendo commit inicial..."
git commit -m "Initial commit: BobCoperation website - EPP y consumibles industriales

- Sitio web B2B completo para BobCoperation
- Catálogo de productos EPP y consumibles industriales
- SEO técnico avanzado con sitemap y robots.txt
- Analítica GA4/GTM configurada
- Formularios validados con Zod
- Accesibilidad AA implementada
- Core Web Vitals optimizados
- Configuración para Vercel: https://bob-chi-bice.vercel.app"

# Configurar rama principal
echo "🌿 Configurando rama principal..."
git branch -M main

# Subir al repositorio
echo "⬆️ Subiendo a GitHub..."
git push -u origin main

echo "✅ ¡Proyecto subido exitosamente a GitHub!"
echo "🔗 Repositorio: https://github.com/NFTSkull/bob"
echo "🚀 Vercel debería detectar automáticamente los cambios"
echo "🌐 URL final: https://bob-chi-bice.vercel.app"
echo ""
echo "📋 Próximos pasos:"
echo "1. Ve a https://vercel.com/viozs-projects/bob"
echo "2. Verifica que aparezca el deployment"
echo "3. Configura las variables de entorno en Vercel"
echo "4. El sitio estará disponible en https://bob-chi-bice.vercel.app"