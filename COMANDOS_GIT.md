# Comandos para subir BobCoperation a GitHub
# Ejecuta estos comandos uno por uno en Terminal

# 1. Navegar al directorio del proyecto
cd "/Users/grecovillanuevaortiz/Desktop/Bob Coperation"

# 2. Inicializar Git
git init

# 3. Configurar usuario
git config user.name "BobCoperation"
git config user.email "ventas@bobsolution.com"

# 4. Agregar repositorio remoto
git remote add origin https://github.com/NFTSkull/bob.git

# 5. Agregar todos los archivos
git add .

# 6. Hacer commit inicial
git commit -m "Initial commit: BobCoperation website - EPP y consumibles industriales"

# 7. Configurar rama principal
git branch -M main

# 8. Subir al repositorio
git push -u origin main

# ¡Listo! El proyecto estará en GitHub y Vercel hará deploy automático
# URL final: https://bob-chi-bice.vercel.app

# Después del push:
# 1. Ve a Vercel Dashboard
# 2. Verifica que el proyecto esté conectado a https://github.com/NFTSkull/bob
# 3. Configura las variables de entorno en Vercel:
#    - NEXT_PUBLIC_GA_ID
#    - NEXT_PUBLIC_GTM_ID  
#    - NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
#    - NEXT_PUBLIC_SITE_URL=https://bob-chi-bice.vercel.app
# 4. El deploy se hará automáticamente
