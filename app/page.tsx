'use client';

import { productCategories } from '@/data/products';
import CategoryAccordion from '@/components/CategoryAccordion';
import { useCategoryNavigation } from '@/hooks/useCategoryNavigation';

export default function Home() {
  const { isCategoryOpen, toggleCategory, navigateToCategory } = useCategoryNavigation();

  return (
    <div className="min-h-screen bg-primary">
      {/* Executive Header */}
      <header className="relative bg-gradient-to-br from-primary via-primary-light to-primary border-b border-accent/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,193,7,0.1),transparent_50%)]" />
        <div className="relative container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src="/header.png" 
                alt="BobCoperation Logo" 
                className="h-14 w-auto"
              />
            </div>
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#productos" className="text-white hover:text-accent transition-colors font-medium">Productos</a>
              <a href="#servicios" className="text-white hover:text-accent transition-colors font-medium">Servicios</a>
              <a href="#contacto" className="text-white hover:text-accent transition-colors font-medium">Contacto</a>
              <button className="bg-accent text-primary font-semibold px-6 py-2.5 rounded-lg hover:bg-accent-dark transition-colors shadow-lg hover:shadow-xl">
                Cotizar Ahora
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Executive Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-primary" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(255,193,7,0.15),transparent_70%)]" />
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-accent/10 text-accent font-semibold px-4 py-2 rounded-full text-sm mb-8 border border-accent/20">
              <div className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse" />
              Proveedor Certificado de EPP Industrial
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Seguridad Industrial
              <span className="block bg-gradient-to-r from-accent to-accent-dark bg-clip-text text-transparent">
                de Clase Mundial
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              Soluciones integrales de protección personal para empresas líderes.
              <span className="block mt-2 text-accent font-medium">
                Cumplimiento normativo • Disponibilidad garantizada • Entregas puntuales
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <button className="bg-accent text-primary font-bold px-8 py-4 rounded-xl hover:bg-accent-dark transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105">
                Explorar Catálogo Completo
              </button>
              <button className="bg-white/10 backdrop-blur-sm text-white border border-white/20 font-semibold px-8 py-4 rounded-xl hover:bg-white/20 transition-all duration-300">
                Solicitar Asesoría Técnica
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { value: '22+', label: 'Categorías de Productos' },
                { value: '99.8%', label: 'Disponibilidad' },
                { value: '24h', label: 'Tiempo de Respuesta' },
                { value: '500+', label: 'Empresas Atendidas' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section id="productos" className="py-20 bg-gradient-to-b from-primary to-primary-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Catálogo de Productos Profesionales
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Equipos de protección personal certificados para las industrias más exigentes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {productCategories.map((category) => (
              <div
                key={category.id}
                onClick={() => navigateToCategory(category.id)}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-accent/50 transition-all duration-300 hover:scale-105 cursor-pointer animate-fade-in-up"
                style={{
                  animationDelay: `${productCategories.indexOf(category) * 100}ms`,
                  animationFillMode: 'both'
                }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-xl mb-6 group-hover:bg-accent/20 transition-all duration-300 group-hover:scale-110">
                  <svg
                    className="w-8 h-8 text-accent group-hover:text-accent-dark transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={category.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">
                  {category.name}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {category.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-accent font-semibold text-sm group-hover:text-accent-dark transition-colors duration-300">
                    {category.products.length} productos
                  </span>
                  <div className="text-accent group-hover:translate-x-1 group-hover:text-accent-dark transition-all duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Product Categories */}
      <section id="catalogo-detallado" className="py-20 bg-gradient-to-b from-primary-light to-primary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Catálogo Técnico Completo
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Especificaciones técnicas detalladas para cada producto. Haga clic en cualquier categoría para expandir el catálogo completo.
            </p>
            <div className="inline-flex items-center bg-accent/10 text-accent font-semibold px-4 py-2 rounded-full text-sm border border-accent/20">
              <div className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse" />
              Catálogo Interactivo • Especificaciones Completas
            </div>
          </div>

          <div className="space-y-8">
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
          </div>
        </div>
      </section>

      {/* Executive CTA Section */}
      <section id="contacto" className="py-20 bg-gradient-to-br from-primary via-primary-light to-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,193,7,0.1),transparent_70%)]" />
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Optimice la Seguridad de su Operación
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Nuestro equipo de ingenieros especializados está listo para desarrollar
            una solución personalizada que cumpla con los más altos estándares de seguridad industrial.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email Ejecutivo</h3>
              <p className="text-accent font-medium">ventas@bobsolution.com</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Línea Directa</h3>
              <p className="text-accent font-medium">81 2509 0913</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Ubicación</h3>
              <p className="text-accent font-medium">Monterrey, Nuevo León</p>
            </div>
          </div>

          <button className="bg-accent text-primary font-bold px-12 py-4 rounded-xl hover:bg-accent-dark transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 text-lg">
            Solicitar Cotización Ejecutiva
          </button>
        </div>
      </section>

      {/* Executive Footer */}
      <footer className="bg-primary border-t border-accent/20 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-6 md:mb-0">
              <img 
                src="/header.png" 
                alt="BobCoperation Logo" 
                className="h-10 w-auto"
              />
              <div>
                <div className="text-white font-bold">BobCoperation</div>
                <div className="text-sm text-gray-400">Seguridad Industrial Premium</div>
              </div>
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © 2024 BobCoperation. Todos los derechos reservados.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Equipos de Protección Personal • Certificaciones Internacionales
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}