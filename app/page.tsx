'use client';

import { productCategories } from '@/data/products';
import CategoryAccordion from '@/components/CategoryAccordion';
import { useCategoryNavigation } from '@/hooks/useCategoryNavigation';
import { HeaderLogo, FooterLogo } from '@/components/HeaderLogo';
import ContactForm from '@/components/ContactForm';
import { ScrollReveal, StaggeredReveal, TextReveal, CounterReveal } from '@/components/ScrollReveal';

export default function Home() {
  const { isCategoryOpen, toggleCategory, navigateToCategory } = useCategoryNavigation();

  return (
    <div className="min-h-screen bg-white">
      {/* Executive Header */}
      <header className="relative bg-white border-b border-bob-blue-500/20 shadow-lg">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(46,108,230,0.05),transparent_50%)]" />
        <div className="relative container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <HeaderLogo />
            </div>
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#productos" className="bg-bob-blue-500 text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-bob-green-500 transition-colors shadow-lg hover:shadow-xl">Productos</a>
              <a href="#servicios" className="bg-bob-blue-500 text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-bob-green-500 transition-colors shadow-lg hover:shadow-xl">Servicios</a>
              <a href="#contacto" className="bg-bob-blue-500 text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-bob-green-500 transition-colors shadow-lg hover:shadow-xl">Contacto</a>
              <a 
                href="#formulario-cotizacion"
                className="bg-bob-blue-500 text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-bob-green-500 transition-colors shadow-lg hover:shadow-xl"
              >
                Cotizar Ahora
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Executive Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover scale-110"
            aria-label="Video de fondo corporativo BOB Coperation"
          >
            <source src="/hero-bob.mp4" type="video/mp4" />
            Tu navegador no soporta el elemento video.
          </video>
          
          {/* Overlay con gradiente elegante */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />
          
          {/* Overlay corporativo sutil */}
          <div className="absolute inset-0 bg-gradient-to-r from-bob-blue-900/20 via-transparent to-bob-blue-900/20" />
          
          {/* Patrón sutil para textura */}
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full bg-[radial-gradient(circle_at_25%_25%,rgba(46,108,230,0.1),transparent_50%),radial-gradient(circle_at_75%_75%,rgba(163,214,63,0.1),transparent_50%)]" />
          </div>
        </div>

        {/* Contenido del Hero */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal animation="fadeInUp" delay={0}>
              <div className="inline-flex items-center bg-bob-green-500/20 backdrop-blur-sm text-bob-green-400 font-semibold px-6 py-3 rounded-full text-sm mb-8 border border-bob-green-500/30 shadow-lg">
                <div className="w-2 h-2 bg-bob-green-500 rounded-full mr-3 animate-pulse" />
                Proveedor Certificado de EPP Industrial
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fadeInUp" delay={200}>
              <div className="mb-8">
                <div className="flex justify-center mb-6">
                  <img 
                    src="/logo-hero.png" 
                    alt="BOB Coperation Logo" 
                    className="h-48 md:h-64 lg:h-80 w-auto object-contain"
                  />
                </div>
                <div className="w-24 h-1 bg-bob-green-500 mx-auto rounded-full mb-6" />
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fadeInUp" delay={400}>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                <span className="block text-shadow-lg">LIDER EN SOLUCIONES</span>
                <span className="block text-bob-green-400 text-shadow-lg">
                  Y MATERIALES INDUSTRIALES
                </span>
              </h1>
            </ScrollReveal>

            {/* Stats con fondo semitransparente */}
            <StaggeredReveal staggerDelay={150} animation="scaleIn">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {[
                  { value: '22+', label: 'Categorías de Productos' },
                  { value: '99.8%', label: 'Disponibilidad' },
                  { value: '24h', label: 'Tiempo de Respuesta' },
                  { value: '500+', label: 'Empresas Atendidas' }
                ].map((stat, index) => (
                  <div key={index} className="text-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                    <div className="text-2xl md:text-3xl font-bold text-bob-green-400 mb-2 text-shadow-md">{stat.value}</div>
                    <div className="text-xs md:text-sm text-gray-200 uppercase tracking-wide text-shadow-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </StaggeredReveal>
          </div>
        </div>

        {/* Indicador de scroll */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section id="productos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fadeInUp" delay={0}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 heading-transition">
                Catálogo de Productos Profesionales
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto paragraph-transition">
                Equipos de protección personal certificados para las industrias más exigentes
              </p>
            </div>
          </ScrollReveal>

          <StaggeredReveal staggerDelay={150} animation="fadeInUp">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productCategories.map((category) => (
                <div
                  key={category.id}
                  onClick={() => navigateToCategory(category.id)}
                  className="group bg-white border border-gray-200 rounded-lg p-8 hover:border-bob-blue-500 transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-bob-blue-50 rounded-lg mb-6 group-hover:bg-bob-blue-100 transition-all duration-300 group-hover:scale-110">
                    <svg
                      className="w-8 h-8 text-bob-blue-500 group-hover:text-bob-blue-600 transition-colors duration-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d={category.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-bob-blue-500 text-hover-gentle text-scale-gentle">
                    {category.name}
                  </h3>
                  <p className="text-bob-gray-500 mb-4 text-sm leading-relaxed text-hover-gentle">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-bob-green-500 font-semibold text-sm group-hover:text-bob-green-600 transition-colors duration-300">
                      {category.products.length} productos
                    </span>
                    <div className="text-bob-blue-500 group-hover:translate-x-1 group-hover:text-bob-blue-600 transition-all duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </StaggeredReveal>
        </div>
      </section>

      {/* Interactive Product Categories */}
      <section id="catalogo-detallado" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fadeInUp" delay={0}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 heading-transition">
                Catálogo Técnico Completo
              </h2>
              <p className="text-xl text-gray-800 max-w-3xl mx-auto mb-8 font-medium paragraph-transition">
                Especificaciones técnicas detalladas para cada producto. Haga clic en cualquier categoría para expandir el catálogo completo.
              </p>
              <div className="inline-flex items-center bg-bob-green-50 text-bob-green-600 font-bold px-4 py-2 rounded-full text-sm border border-bob-green-500 shadow-sm">
                <div className="w-2 h-2 bg-bob-green-500 rounded-full mr-2 animate-pulse" />
                Catálogo Interactivo • Especificaciones Completas
              </div>
            </div>
          </ScrollReveal>

          <StaggeredReveal staggerDelay={200} animation="fadeInUp">
            {productCategories.map((category, index) => (
              <div
                key={category.id}
                className="animate-fade-in-up"
                style={{
                  animationDelay: `${index * 150}ms`,
                  animationFillMode: 'both'
                }}
              >
                <CategoryAccordion
                  category={category}
                  isOpen={isCategoryOpen(category.id)}
                  onToggle={() => toggleCategory(category.id)}
                />
              </div>
            ))}
          </StaggeredReveal>
        </div>
      </section>

      {/* Executive CTA Section */}
      <section id="contacto" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(46,108,230,0.05),transparent_70%)]" />
        <div className="relative container mx-auto px-4 text-center">
          <ScrollReveal animation="fadeInUp" delay={0}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Optimice la Seguridad de su Operación
            </h2>
          </ScrollReveal>
          
          <ScrollReveal animation="fadeInUp" delay={200}>
            <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
              Nuestro equipo de ingenieros especializados está listo para desarrollar
              una solución personalizada que cumpla con los más altos estándares de seguridad industrial.
            </p>
          </ScrollReveal>

          <StaggeredReveal staggerDelay={200} animation="scaleIn">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="group executive-card border border-gray-200 rounded-lg p-8 hover:border-bob-blue-500 transition-all duration-300 hover:shadow-xl hover:scale-105">
                <div className="w-20 h-20 bg-gradient-to-br from-bob-blue-500 to-bob-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 icon-smooth">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-bob-blue-500 transition-colors text-elegant-hover">Email Ejecutivo</h3>
                <p className="text-bob-gray-500 mb-4 text-sm text-elegant-hover">Para consultas técnicas y cotizaciones</p>
                <a 
                  href="mailto:ventas@bobsolution.com"
                  className="btn-professional inline-flex items-center px-6 py-3 bg-gradient-to-r from-bob-blue-500 to-bob-blue-600 text-white font-semibold rounded-lg hover:from-bob-blue-600 hover:to-bob-blue-700 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-4 h-4 mr-2 icon-smooth" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  ventas@bobsolution.com
                </a>
              </div>

              <div className="group executive-card border border-gray-200 rounded-lg p-8 hover:border-bob-green-500 transition-all duration-300 hover:shadow-xl hover:scale-105">
                <div className="w-20 h-20 bg-gradient-to-br from-bob-green-500 to-bob-green-600 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 icon-smooth">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-bob-green-500 transition-colors text-elegant-hover">Línea Directa</h3>
                <p className="text-bob-gray-500 mb-4 text-sm text-elegant-hover">Atención inmediata y personalizada</p>
                <a 
                  href="tel:+528125090913"
                  className="btn-professional inline-flex items-center px-6 py-3 bg-gradient-to-r from-bob-green-500 to-bob-green-600 text-white font-semibold rounded-lg hover:from-bob-green-600 hover:to-bob-green-700 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-4 h-4 mr-2 icon-smooth" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  81 2509 0913
                </a>
              </div>

              <div className="group executive-card border border-gray-200 rounded-lg p-8 hover:border-bob-gray-500 transition-all duration-300 hover:shadow-xl hover:scale-105">
                <div className="w-20 h-20 bg-gradient-to-br from-bob-gray-500 to-bob-gray-600 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 icon-smooth">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-bob-gray-500 transition-colors text-elegant-hover">Ubicación</h3>
                <p className="text-bob-gray-500 mb-4 text-sm text-elegant-hover">Centro industrial de Monterrey</p>
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-bob-gray-500 to-bob-gray-600 text-white font-semibold rounded-lg shadow-lg badge-modern">
                  <svg className="w-4 h-4 mr-2 icon-smooth" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Monterrey, Nuevo León
                </div>
              </div>
            </div>
          </StaggeredReveal>

          <ScrollReveal animation="fadeInUp" delay={600}>
            <a 
              href="#formulario-cotizacion"
              className="bg-bob-blue-500 text-white font-bold px-12 py-4 rounded-lg hover:bg-bob-green-500 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 text-lg inline-block"
            >
              Solicitar Cotización Ejecutiva
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Formulario de Cotización */}
      <section id="formulario-cotizacion" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal animation="fadeInScale" delay={0}>
              <ContactForm />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Executive Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          {/* Sección Principal del Footer */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <StaggeredReveal staggerDelay={150} animation="fadeInUp">
              {/* Información de la Empresa */}
              <div className="md:col-span-1">
                <div className="flex items-center space-x-4 mb-6">
                  <FooterLogo />
                  <div>
                    <div className="text-white font-bold text-xl">BobCoperation</div>
                    <div className="text-gray-300 text-sm">Seguridad Industrial Premium</div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  Líder en equipos de protección personal para la industria. Soluciones certificadas 
                  que garantizan la seguridad y cumplimiento normativo de su empresa.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-bob-green-500 rounded-full animate-pulse"></div>
                    <span className="text-gray-400 text-xs font-medium">En línea</span>
                  </div>
                  <div className="text-gray-400 text-xs">
                    Horario: Lun-Vie 7:00 AM - 5:00 PM
                  </div>
                </div>
              </div>

              {/* Navegación */}
              <div className="text-left">
                <h3 className="text-white font-bold text-lg mb-6">Navegación</h3>
                <div className="space-y-4">
                  <a href="#productos" className="block text-gray-300 text-sm hover:text-bob-green-400 transition-colors duration-300">
                    Productos
                  </a>
                  <a href="#catalogo-detallado" className="block text-gray-300 text-sm hover:text-bob-green-400 transition-colors duration-300">
                    Catálogo Técnico
                  </a>
                  <a href="#contacto" className="block text-gray-300 text-sm hover:text-bob-green-400 transition-colors duration-300">
                    Contacto
                  </a>
                  <a href="#formulario-cotizacion" className="block text-gray-300 text-sm hover:text-bob-green-400 transition-colors duration-300">
                    Solicitar Cotización
                  </a>
                </div>
              </div>

              {/* Servicios */}
              <div className="text-left">
                <h3 className="text-white font-bold text-lg mb-6">Servicios</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-1.5 h-1.5 bg-bob-green-500 rounded-full"></div>
                    <span className="text-gray-300 text-sm">Cotizaciones Personalizadas</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-1.5 h-1.5 bg-bob-green-500 rounded-full"></div>
                    <span className="text-gray-300 text-sm">Asesoría Técnica</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-1.5 h-1.5 bg-bob-green-500 rounded-full"></div>
                    <span className="text-gray-300 text-sm">Certificaciones</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-1.5 h-1.5 bg-bob-green-500 rounded-full"></div>
                    <span className="text-gray-300 text-sm">Entrega Nacional</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-1.5 h-1.5 bg-bob-green-500 rounded-full"></div>
                    <span className="text-gray-300 text-sm">Soporte 24/7</span>
                  </div>
                </div>
              </div>
            </StaggeredReveal>
          </div>

          {/* Línea divisoria */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
              {/* Copyright y Certificaciones */}
              <div className="text-left">
                <p className="text-gray-400 text-sm mb-2">
                  © 2025 BobCoperation. Todos los derechos reservados.
                </p>
                <p className="text-gray-500 text-xs">
                  Equipos de Protección Personal • Certificaciones Internacionales • ISO 9001
                </p>
              </div>
              
              {/* Botón de acción */}
              <div className="flex items-center space-x-4">
                <a 
                  href="#formulario-cotizacion"
                  className="bg-bob-blue-500 text-white font-semibold px-8 py-3 rounded-lg hover:bg-bob-green-500 transition-all duration-300 text-sm shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Cotizar Ahora
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}