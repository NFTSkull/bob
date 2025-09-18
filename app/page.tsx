export default function Home() {
  return (
    <div className="min-h-screen bg-primary">
      {/* Header */}
      <header className="bg-primary-light border-b border-accent/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-text-dark">B</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">BobCoperation</h1>
                <p className="text-sm text-secondary">EPP y Consumibles Industriales</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#inicio" className="text-white hover:text-accent transition-colors">Inicio</a>
              <a href="#productos" className="text-white hover:text-accent transition-colors">Productos</a>
              <a href="#servicios" className="text-white hover:text-accent transition-colors">Servicios</a>
              <a href="#contacto" className="text-white hover:text-accent transition-colors">Contacto</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Equipos de Protección Personal
            <span className="block text-accent">Industriales</span>
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto mb-8">
            Proveedor líder de EPP y consumibles industriales en México.
            Cumplimiento normativo, disponibilidad garantizada y entregas puntuales
            para mantener tu operación segura y eficiente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Ver Catálogo de Productos
            </button>
            <button className="btn-secondary">
              Solicitar Cotización
            </button>
          </div>
        </div>
      </section>

      {/* Productos Destacados */}
      <section id="productos" className="py-16 bg-primary-light">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Nuestros Productos Principales
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Guantes Industriales",
                description: "Guantes de nitrilo, PU, anticorte y antiestático para todas las aplicaciones industriales.",
                icon: "🧤"
              },
              {
                title: "Calzado de Seguridad",
                description: "Calzado industrial con protección contra impactos, perforaciones y químicos.",
                icon: "👢"
              },
              {
                title: "Protección Visual",
                description: "Lentes de seguridad y protección auditiva para ambientes industriales exigentes.",
                icon: "🥽"
              },
              {
                title: "Consumibles Industriales",
                description: "Empaque, marcadores industriales y consumibles para líneas de producción.",
                icon: "📦"
              },
              {
                title: "Ergonomía",
                description: "Productos ergonómicos para mejorar la comodidad y productividad laboral.",
                icon: "💪"
              },
              {
                title: "Equipos Especializados",
                description: "EPP especializado para industrias específicas como automotriz y alimentos.",
                icon: "⚙️"
              }
            ].map((producto, index) => (
              <div key={index} className="card card-hover">
                <div className="text-4xl mb-4">{producto.icon}</div>
                <h4 className="text-xl font-semibold text-white mb-3">{producto.title}</h4>
                <p className="text-secondary">{producto.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué BobCoperation */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            ¿Por qué elegir BobCoperation?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Cumplimiento",
                description: "Todos nuestros productos cumplen con normas y estándares internacionales.",
                icon: "✅"
              },
              {
                title: "Disponibilidad",
                description: "Inventario constante para garantizar la disponibilidad cuando lo necesites.",
                icon: "📦"
              },
              {
                title: "Entregas a Tiempo",
                description: "Comprometidos con entregas puntuales en toda la República Mexicana.",
                icon: "🚚"
              },
              {
                title: "Asesoría Experta",
                description: "Nuestro equipo te ayuda a elegir la mejor solución para tus necesidades.",
                icon: "👨‍💼"
              }
            ].map((ventaja, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{ventaja.icon}</div>
                <h4 className="text-xl font-semibold text-white mb-3">{ventaja.title}</h4>
                <p className="text-secondary">{ventaja.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-16 bg-primary-light">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-white mb-8">
            ¿Listo para mejorar la seguridad de tu empresa?
          </h3>
          <p className="text-xl text-secondary mb-8 max-w-2xl mx-auto">
            Contacta con nuestro equipo de expertos para una asesoría personalizada
            y cotización de los productos que necesitas.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">📧</span>
              <span className="text-white">ventas@bobsolution.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">📱</span>
              <span className="text-white">81 2509 0913</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">📍</span>
              <span className="text-white">Monterrey, N.L.</span>
            </div>
          </div>
          <div className="mt-8">
            <button className="btn-primary">
              Solicitar Cotización
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary border-t border-accent/20 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-accent rounded flex items-center justify-center">
              <span className="text-lg font-bold text-text-dark">B</span>
            </div>
            <span className="text-white font-semibold">BobCoperation</span>
          </div>
          <p className="text-secondary text-sm">
            © 2024 BobCoperation. Todos los derechos reservados.
            EPP y consumibles industriales de calidad para tu empresa.
          </p>
        </div>
      </footer>
    </div>
  )
}