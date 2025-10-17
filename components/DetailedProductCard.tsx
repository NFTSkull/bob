'use client';

import { Product } from '@/data/products';
import { cn } from '@/lib/utils';

interface DetailedProductCardProps {
  product: Product;
  className?: string;
}

export default function DetailedProductCard({ product, className }: DetailedProductCardProps) {
  return (
    <div className={cn("bg-white backdrop-blur-sm border border-gray-300/60 rounded-xl overflow-hidden hover:border-yellow-500/60 transition-all duration-300 shadow-lg hover:shadow-xl", className)}>
      {/* Product Header */}
      <div className="p-6 border-b border-gray-300/50">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h4 className="text-xl font-bold text-gray-900 mb-2 heading-transition">{product.name}</h4>
            <p className="text-gray-800 text-sm leading-relaxed paragraph-transition">{product.description}</p>
          </div>
          {product.image && (
            <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center ml-4 overflow-hidden border border-gray-200">
              <img 
                src={product.image} 
                alt={`${product.name} - ${product.description}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          )}
        </div>

        {product.subcategory && (
          <div className="inline-flex items-center bg-yellow-100 text-yellow-800 font-semibold px-3 py-1 rounded-full text-xs border border-yellow-200">
            {product.subcategory}
          </div>
        )}
      </div>

      {/* Technical Specifications */}
      <div className="p-6 space-y-6">
        {/* Material & Basic Info */}
        {(product.material || product.weight || product.thickness) && (
          <div>
            <h5 className="text-gray-900 font-bold text-sm mb-3 uppercase tracking-wide heading-transition">Especificaciones Técnicas</h5>
            <div className="grid grid-cols-1 gap-2 text-sm">
              {product.material && (
                <div className="flex justify-between">
                  <span className="text-gray-700 font-medium">Material:</span>
                  <span className="text-gray-900 font-semibold">{product.material}</span>
                </div>
              )}
              {product.weight && (
                <div className="flex justify-between">
                  <span className="text-gray-700 font-medium">Peso:</span>
                  <span className="text-gray-900 font-semibold">{product.weight}</span>
                </div>
              )}
              {product.thickness && (
                <div className="flex justify-between">
                  <span className="text-gray-700 font-medium">Grosor:</span>
                  <span className="text-gray-900 font-semibold">{product.thickness}</span>
                </div>
              )}
              {product.resistance && (
                <div className="flex justify-between">
                  <span className="text-gray-700 font-medium">Resistencia:</span>
                  <span className="text-gray-900 font-semibold">{product.resistance}</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Codes & Colors */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {product.codes && product.codes.length > 0 && (
            <div>
              <h5 className="text-gray-900 font-bold text-sm mb-2 uppercase tracking-wide heading-transition">Códigos</h5>
              <div className="flex flex-wrap gap-1">
                {product.codes.map((code, index) => (
                  <span key={index} className="bg-gray-300 text-gray-900 px-2 py-1 rounded text-xs font-mono font-semibold border border-gray-400">
                    {code}
                  </span>
                ))}
              </div>
            </div>
          )}

          {product.colors && product.colors.length > 0 && (
            <div>
              <h5 className="text-gray-900 font-bold text-sm mb-2 uppercase tracking-wide heading-transition">Colores</h5>
              <div className="flex flex-wrap gap-1">
                {product.colors.map((color, index) => (
                  <span key={index} className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-semibold border border-yellow-200">
                    {color}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sizes */}
        {product.sizes && product.sizes.length > 0 && (
          <div>
            <h5 className="text-gray-900 font-bold text-sm mb-2 uppercase tracking-wide heading-transition">Tallas Disponibles</h5>
            <div className="flex flex-wrap gap-1">
              {product.sizes.map((size, index) => (
                <span key={index} className="bg-gray-300 text-gray-900 px-2 py-1 rounded text-xs font-semibold border border-gray-400">
                  {size}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Packaging */}
        {(product.packaging || product.masterBox) && (
          <div>
            <h5 className="text-gray-900 font-bold text-sm mb-2 uppercase tracking-wide heading-transition">Empaque</h5>
            <div className="space-y-1 text-sm">
              {product.packaging && (
                <div className="flex justify-between">
                  <span className="text-gray-700 font-medium">Empaque:</span>
                  <span className="text-gray-900 font-semibold">{product.packaging}</span>
                </div>
              )}
              {product.masterBox && (
                <div className="flex justify-between">
                  <span className="text-gray-700 font-medium">Caja Master:</span>
                  <span className="text-gray-900 font-semibold">{product.masterBox}</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Applications */}
        {product.applications && product.applications.length > 0 && (
          <div>
            <h5 className="text-gray-900 font-bold text-sm mb-2 uppercase tracking-wide heading-transition">Aplicaciones</h5>
            <ul className="text-sm text-gray-800 space-y-1">
              {product.applications.map((app, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-yellow-600 mr-2 font-bold">•</span>
                  {app}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Specifications */}
        {product.specifications && product.specifications.length > 0 && (
          <div>
            <h5 className="text-gray-900 font-bold text-sm mb-2 uppercase tracking-wide heading-transition">Características</h5>
            <ul className="text-sm text-gray-800 space-y-1">
              {product.specifications.map((spec, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-yellow-600 mr-2 font-bold">•</span>
                  {spec}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Certifications */}
        {product.certifications && product.certifications.length > 0 && (
          <div>
            <h5 className="text-gray-900 font-bold text-sm mb-2 uppercase tracking-wide heading-transition">Certificaciones</h5>
            <div className="flex flex-wrap gap-2">
              {product.certifications.map((cert, index) => (
                <span key={index} className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-bold border border-yellow-300">
                  {cert}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Norm */}
        {product.norm && (
          <div className="border-t border-gray-300/30 pt-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-700 text-sm font-medium">Norma:</span>
              <span className="text-yellow-700 font-bold">{product.norm}</span>
            </div>
          </div>
        )}
      </div>

      {/* Action Footer */}
      <div className="p-6 bg-gray-50 border-t border-gray-300/50">
        <a 
          href="#formulario-cotizacion"
          className="w-full bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 transition-colors text-sm shadow-md hover:shadow-lg inline-block text-center"
        >
          Solicitar Cotización
        </a>
      </div>
    </div>
  );
}