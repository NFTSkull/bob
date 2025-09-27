# Paleta de Colores BOB - Ejemplos de Uso

## Variables CSS Disponibles

### Colores Primarios (Azules del Logo)
```css
--brand-50: #e9f4ff   /* Azul muy claro */
--brand-100: #cfe9ff  /* Azul claro */
--brand-200: #a4d3ff  /* Azul medio claro */
--brand-300: #75bbff  /* Azul medio */
--brand-400: #4aa0f0  /* Azul claro del trazo */
--brand-500: #1f84d6  /* Azul principal */
--brand-600: #0e5aa7  /* Azul oscuro (letras) */
--brand-700: #0c4a86  /* Azul muy oscuro */
--brand-800: #093864  /* Azul carbón */
--brand-900: #062642  /* Azul negro */
```

### Colores de Acento (Verde del Logo)
```css
--accent-100: #e8f7d1  /* Verde muy claro */
--accent-300: #c6ee88  /* Verde claro */
--accent-500: #9bd018  /* Verde acento principal */
--accent-700: #6a9c0f  /* Verde oscuro */
```

### Tokens Semánticos
```css
--bg: var(--neutral-50)           /* Fondo principal */
--surface: var(--neutral-100)     /* Superficie de tarjetas */
--text: var(--neutral-900)        /* Texto principal */
--muted: var(--neutral-600)       /* Texto secundario */
--primary: var(--brand-600)       /* Color primario */
--primary-contrast: #ffffff       /* Contraste del primario */
--primary-hover: var(--brand-700) /* Hover del primario */
--accent: var(--accent-500)       /* Color de acento */
--accent-hover: var(--accent-700) /* Hover del acento */
--ring: var(--brand-400)          /* Color de focus ring */
--link: var(--brand-600)         /* Color de enlaces */
--link-hover: var(--brand-700)   /* Hover de enlaces */
--border: var(--neutral-200)      /* Color de bordes */
--border-hover: var(--brand-400)  /* Hover de bordes */
```

## Clases Tailwind Disponibles

### Colores Base
```html
<!-- Azules del logo -->
<div class="bg-brand-50">Fondo azul muy claro</div>
<div class="bg-brand-500">Fondo azul principal</div>
<div class="bg-brand-600">Fondo azul oscuro</div>

<!-- Verde acento -->
<div class="bg-accent-100">Fondo verde claro</div>
<div class="bg-accent-500">Fondo verde principal</div>

<!-- Tokens semánticos -->
<div class="bg-bg">Fondo principal</div>
<div class="bg-surface">Fondo de superficie</div>
<div class="text-text">Texto principal</div>
<div class="text-muted">Texto secundario</div>
```

### Botones Institucionales
```html
<!-- Botón primario -->
<button class="btn-primary">Acción Principal</button>

<!-- Botón secundario -->
<button class="btn-secondary">Acción Secundaria</button>

<!-- Botón de acento -->
<button class="btn-accent">Acción Destacada</button>

<!-- Botones con colores específicos -->
<button class="bg-[var(--primary)] text-[var(--primary-contrast)] hover:bg-[var(--primary-hover)]">
  CTA Personalizado
</button>
```

### Tarjetas y Contenedores
```html
<!-- Tarjeta básica -->
<div class="card">
  <h3 class="text-text">Título</h3>
  <p class="text-muted">Contenido</p>
</div>

<!-- Tarjeta con hover -->
<div class="card card-hover">
  <h3 class="text-text">Título Interactivo</h3>
</div>

<!-- Tarjeta de producto -->
<div class="product-card">
  <img src="producto.jpg" alt="Producto" />
  <div class="p-4">
    <h3 class="text-text">Nombre del Producto</h3>
    <p class="text-muted">Descripción</p>
  </div>
</div>
```

### Headers y Tipografía
```html
<!-- Header ejecutivo -->
<h1 class="executive-header">Título Principal</h1>

<!-- Subheader profesional -->
<h2 class="professional-subheader">Subtítulo</h2>

<!-- Texto con gradiente -->
<h3 class="text-gradient">Título con Gradiente Azul</h3>
<h3 class="text-accent-gradient">Título con Gradiente Verde</h3>
```

### Indicadores de Estado
```html
<!-- Indicador de acento -->
<span class="status-indicator">Estado Activo</span>

<!-- Indicador de seguridad -->
<span class="status-safety">Certificado</span>

<!-- Indicadores con colores específicos -->
<span class="bg-status-success text-white px-3 py-1 rounded-full">Éxito</span>
<span class="bg-status-warning text-white px-3 py-1 rounded-full">Advertencia</span>
<span class="bg-status-error text-white px-3 py-1 rounded-full">Error</span>
<span class="bg-status-info text-white px-3 py-1 rounded-full">Información</span>
```

### Enlaces y Navegación
```html
<!-- Enlaces con colores semánticos -->
<a href="#" class="text-link hover:text-[var(--link-hover)]">Enlace Principal</a>

<!-- Enlaces con colores específicos -->
<a href="#" class="text-brand-600 hover:text-brand-700">Enlace Azul</a>
<a href="#" class="text-accent-500 hover:text-accent-700">Enlace Verde</a>
```

### Gradientes Institucionales
```html
<!-- Gradiente radial -->
<div class="gradient-radial p-8">
  <h2 class="text-text">Contenido con Gradiente Radial</h2>
</div>

<!-- Gradiente profesional -->
<div class="gradient-professional text-white p-8">
  <h2>Contenido con Gradiente Profesional</h2>
</div>

<!-- Gradiente de seguridad -->
<div class="gradient-safety text-white p-8">
  <h2>Contenido con Gradiente de Seguridad</h2>
</div>

<!-- Gradiente institucional -->
<div class="gradient-institutional p-8">
  <h2 class="text-text">Contenido con Gradiente Institucional</h2>
</div>
```

### Sombras Profesionales
```html
<!-- Sombra profesional -->
<div class="shadow-professional p-6 rounded-xl">
  <h3 class="text-text">Contenido con Sombra Profesional</h3>
</div>

<!-- Sombra ejecutiva -->
<div class="shadow-executive p-6 rounded-xl">
  <h3 class="text-text">Contenido con Sombra Ejecutiva</h3>
</div>
```

## Ejemplo de Layout Completo

```html
<body class="bg-bg text-text">
  <header class="bg-surface border-b border-border">
    <nav class="container flex items-center justify-between py-4">
      <div class="text-gradient text-2xl font-bold">BOB</div>
      <div class="space-x-6">
        <a href="#" class="text-link hover:text-[var(--link-hover)]">Productos</a>
        <a href="#" class="text-link hover:text-[var(--link-hover)]">Servicios</a>
        <a href="#" class="text-link hover:text-[var(--link-hover)]">Contacto</a>
      </div>
      <button class="btn-primary">Solicitar Cotización</button>
    </nav>
  </header>

  <main class="container py-12">
    <section class="text-center mb-16">
      <h1 class="executive-header mb-6">Soluciones Industriales BOB</h1>
      <p class="professional-subheader mb-8">Equipos de protección personal y seguridad industrial</p>
      <div class="flex gap-4 justify-center">
        <button class="btn-primary">Ver Catálogo</button>
        <button class="btn-secondary">Contactar Ventas</button>
      </div>
    </section>

    <section class="grid md:grid-cols-3 gap-8">
      <div class="product-card">
        <div class="p-6">
          <h3 class="text-text font-semibold mb-2">Guantes de Seguridad</h3>
          <p class="text-muted mb-4">Protección certificada para manos</p>
          <span class="status-safety">Certificado</span>
        </div>
      </div>
      
      <div class="product-card">
        <div class="p-6">
          <h3 class="text-text font-semibold mb-2">Calzado Industrial</h3>
          <p class="text-muted mb-4">Punta de acero y antideslizante</p>
          <span class="status-indicator">Disponible</span>
        </div>
      </div>
      
      <div class="product-card">
        <div class="p-6">
          <h3 class="text-text font-semibold mb-2">Protección Visual</h3>
          <p class="text-muted mb-4">Lentes de seguridad profesionales</p>
          <span class="status-safety">Certificado</span>
        </div>
      </div>
    </section>
  </main>
</body>
```

## Modo Oscuro

La paleta incluye soporte automático para modo oscuro usando `prefers-color-scheme: dark`. Los tokens semánticos se ajustan automáticamente:

- `--bg` cambia a fondo oscuro
- `--text` cambia a texto claro
- `--surface` cambia a superficie oscura
- `--primary` se ajusta para mejor contraste
- `--accent` se ajusta para mejor visibilidad

## Notas de Accesibilidad

- Todos los colores cumplen con estándares de contraste AA
- Los colores de estado incluyen indicadores visuales claros
- Los focus rings usan colores de alta visibilidad
- Los gradientes mantienen legibilidad del texto
