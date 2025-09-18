import type { Metadata } from 'next';
import Tabs from '@/components/Tabs';
import ProductTable from '@/components/ProductTable';
import { generateMetadata as generatePageMetadata } from '@/lib/metadata';
import { pageMetadata } from '@/data';
import { guantesCategories } from '@/data/guantes';

export const metadata: Metadata = generatePageMetadata(pageMetadata.gloves);

export default function GuantesPage() {
  // Crear tabs para cada categoría de guantes
  const tabs = guantesCategories.map(category => ({
    id: category.id,
    label: category.name,
    content: (
      <div className="space-y-6">
        {/* Descripción de la categoría */}
        <div className="card">
          <h3 className="text-xl font-semibold text-white mb-4">
            {category.name}
          </h3>
          <p className="text-secondary mb-4">
            {category.description}
          </p>
          
          {/* Usos */}
          {category.usos && (
            <div className="mb-4">
              <h4 className="text-white font-medium mb-2">Aplicaciones:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {category.usos.map((uso, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-accent mt-1">•</span>
                    <span className="text-secondary text-sm">{uso}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {/* Composición */}
          {category.composicion && (
            <div className="mb-4">
              <h4 className="text-white font-medium mb-2">Composición:</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {category.composicion.map((comp, index) => (
                  <div key={index} className="flex justify-between text-secondary text-sm">
                    <span>{comp.comp}</span>
                    <span className="text-accent">{comp.pct}%</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Empaque */}
          {category.empaque && (
            <div>
              <h4 className="text-white font-medium mb-2">Empaque:</h4>
              <div className="flex space-x-6 text-secondary text-sm">
                <span>Paquete: {category.empaque.paquete}</span>
                <span>Caja Master: {category.empaque.cajaMaster}</span>
              </div>
            </div>
          )}
        </div>
        
        {/* Tabla de productos */}
        <ProductTable
          products={category.products}
          title={`Productos - ${category.name}`}
          showAddToQuote={true}
        />
      </div>
    )
  }));

  return (
    <div className="min-h-screen bg-primary">
      {/* Hero Section */}
      <section className="py-16 bg-primary-light">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Guantes Industriales
            </h1>
            <p className="text-xl text-secondary leading-relaxed">
              Protección completa para las manos con guantes especializados para diferentes 
              aplicaciones industriales. Desde guantes anticorte nivel 5 hasta guantes 
              nitrilo desechables.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs de categorías */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs tabs={tabs} />
        </div>
      </section>

      {/* Información adicional */}
      <section className="py-16 bg-primary-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Guía de selección */}
            <div className="card">
              <h3 className="text-xl font-semibold text-white mb-4">
                ¿Cómo elegir el guante correcto?
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-medium mb-2">Guantes Anticorte Nivel 5</h4>
                  <p className="text-secondary text-sm">
                    Para trabajos con materiales filosos, láminas, vidrio y cerámica. 
                    Máxima protección contra cortes.
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">Guantes PU</h4>
                  <p className="text-secondary text-sm">
                    Excelente agarre y resistencia química. Ideales para manejo de herramientas 
                    y trabajo en líneas de producción.
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">Guantes Antiestático</h4>
                  <p className="text-secondary text-sm">
                    Para trabajo con componentes electrónicos y protección contra descargas 
                    electrostáticas (ESD).
                  </p>
                </div>
              </div>
            </div>

            {/* Normas y estándares */}
            <div className="card">
              <h3 className="text-xl font-semibold text-white mb-4">
                Normas y Estándares
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-accent text-sm font-bold">EN</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">EN 388</h4>
                    <p className="text-secondary text-sm">
                      Estándar europeo para guantes de protección contra riesgos mecánicos
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-accent text-sm font-bold">ANSI</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">ANSI/ISEA 105</h4>
                    <p className="text-secondary text-sm">
                      Estándar americano para clasificación de guantes de protección
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-accent text-sm font-bold">ESD</span>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">ESD S20.20</h4>
                    <p className="text-secondary text-sm">
                      Estándar para control de descargas electrostáticas
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Necesitas ayuda para elegir?
          </h2>
          <p className="text-lg text-secondary mb-8 max-w-2xl mx-auto">
            Nuestro equipo de expertos puede ayudarte a seleccionar los guantes 
            ideales para tu aplicación específica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#cotizar"
              className="btn-primary text-lg px-8 py-4"
            >
              Solicitar Cotización
            </a>
            <a
              href="/contacto"
              className="btn-secondary text-lg px-8 py-4"
            >
              Contactar Especialista
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
