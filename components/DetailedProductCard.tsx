'use client';

import { Product } from '@/data/products';
import { cn } from '@/lib/utils';

interface DetailedProductCardProps {
  product: Product;
  className?: string;
}

export default function DetailedProductCard({ product, className }: DetailedProductCardProps) {
  return (
    <div className={cn("bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-accent/50 transition-all duration-300", className)}>
      {/* Product Header */}
      <div className="p-6 border-b border-white/10">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h4 className="text-xl font-bold text-white mb-2">{product.name}</h4>
            <p className="text-gray-300 text-sm leading-relaxed">{product.description}</p>
          </div>
          {product.image && (
            <div className="w-16 h-16 bg-white/5 rounded-lg flex items-center justify-center ml-4">
              <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
          )}
        </div>

        {product.subcategory && (
          <div className="inline-flex items-center bg-accent/10 text-accent font-medium px-3 py-1 rounded-full text-xs">
            {product.subcategory}
          </div>
        )}
      </div>

      {/* Technical Specifications */}
      <div className="p-6 space-y-6">
        {/* Material & Basic Info */}
        {(product.material || product.weight || product.thickness) && (
          <div>
            <h5 className="text-accent font-semibold text-sm mb-3 uppercase tracking-wide">Especificaciones Técnicas</h5>
            <div className="grid grid-cols-1 gap-2 text-sm">
              {product.material && (
                <div className="flex justify-between">
                  <span className="text-gray-400">Material:</span>
                  <span className="text-white font-medium">{product.material}</span>
                </div>
              )}
              {product.weight && (
                <div className="flex justify-between">
                  <span className="text-gray-400">Peso:</span>
                  <span className="text-white font-medium">{product.weight}</span>
                </div>
              )}
              {product.thickness && (
                <div className="flex justify-between">
                  <span className="text-gray-400">Grosor:</span>
                  <span className="text-white font-medium">{product.thickness}</span>
                </div>
              )}
              {product.resistance && (
                <div className="flex justify-between">
                  <span className="text-gray-400">Resistencia:</span>
                  <span className="text-white font-medium">{product.resistance}</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Codes & Colors */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {product.codes && product.codes.length > 0 && (
            <div>
              <h5 className="text-accent font-semibold text-sm mb-2 uppercase tracking-wide">Códigos</h5>
              <div className="flex flex-wrap gap-1">
                {product.codes.map((code, index) => (
                  <span key={index} className="bg-white/10 text-white px-2 py-1 rounded text-xs font-mono">
                    {code}
                  </span>
                ))}
              </div>
            </div>
          )}

          {product.colors && product.colors.length > 0 && (
            <div>
              <h5 className="text-accent font-semibold text-sm mb-2 uppercase tracking-wide">Colores</h5>
              <div className="flex flex-wrap gap-1">
                {product.colors.map((color, index) => (
                  <span key={index} className="bg-accent/10 text-accent px-2 py-1 rounded text-xs">
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
            <h5 className="text-accent font-semibold text-sm mb-2 uppercase tracking-wide">Tallas Disponibles</h5>
            <div className="flex flex-wrap gap-1">
              {product.sizes.map((size, index) => (
                <span key={index} className="bg-white/10 text-white px-2 py-1 rounded text-xs font-medium">
                  {size}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Packaging */}
        {(product.packaging || product.masterBox) && (
          <div>
            <h5 className="text-accent font-semibold text-sm mb-2 uppercase tracking-wide">Empaque</h5>
            <div className="space-y-1 text-sm">
              {product.packaging && (
                <div className="flex justify-between">
                  <span className="text-gray-400">Empaque:</span>
                  <span className="text-white">{product.packaging}</span>
                </div>
              )}
              {product.masterBox && (
                <div className="flex justify-between">
                  <span className="text-gray-400">Caja Master:</span>
                  <span className="text-white">{product.masterBox}</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Applications */}
        {product.applications && product.applications.length > 0 && (
          <div>
            <h5 className="text-accent font-semibold text-sm mb-2 uppercase tracking-wide">Aplicaciones</h5>
            <ul className="text-sm text-gray-300 space-y-1">
              {product.applications.map((app, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  {app}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Specifications */}
        {product.specifications && product.specifications.length > 0 && (
          <div>
            <h5 className="text-accent font-semibold text-sm mb-2 uppercase tracking-wide">Características</h5>
            <ul className="text-sm text-gray-300 space-y-1">
              {product.specifications.map((spec, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  {spec}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Certifications */}
        {product.certifications && product.certifications.length > 0 && (
          <div>
            <h5 className="text-accent font-semibold text-sm mb-2 uppercase tracking-wide">Certificaciones</h5>
            <div className="flex flex-wrap gap-2">
              {product.certifications.map((cert, index) => (
                <span key={index} className="bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-semibold border border-accent/30">
                  {cert}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Norm */}
        {product.norm && (
          <div className="border-t border-white/10 pt-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">Norma:</span>
              <span className="text-accent font-semibold">{product.norm}</span>
            </div>
          </div>
        )}
      </div>

      {/* Action Footer */}
      <div className="p-6 bg-white/5 border-t border-white/10">
        <button className="w-full bg-accent text-primary font-semibold py-2 px-4 rounded-lg hover:bg-accent-dark transition-colors text-sm">
          Solicitar Cotización
        </button>
      </div>
    </div>
  );
}