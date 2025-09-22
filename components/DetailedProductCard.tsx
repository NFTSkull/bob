'use client';

import { Product } from '@/data/products';
import { cn } from '@/lib/utils';

interface DetailedProductCardProps {
  product: Product;
  className?: string;
}

export default function DetailedProductCard({ product, className }: DetailedProductCardProps) {
  return (
    <div className={cn("bg-gray-50/95 backdrop-blur-sm border border-gray-300/40 rounded-xl overflow-hidden hover:border-accent/60 transition-all duration-300 shadow-lg hover:shadow-xl", className)}>
      {/* Product Header */}
      <div className="p-6 border-b border-gray-300/30">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h4 className="text-xl font-bold text-text-dark mb-2">{product.name}</h4>
            <p className="text-gray-700 text-sm leading-relaxed">{product.description}</p>
          </div>
          {product.image && (
            <div className="w-20 h-20 bg-gray-200/80 rounded-lg flex items-center justify-center ml-4 overflow-hidden">
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
            <h5 className="text-accent-dark font-semibold text-sm mb-3 uppercase tracking-wide">Especificaciones Técnicas</h5>
            <div className="grid grid-cols-1 gap-2 text-sm">
              {product.material && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Material:</span>
                  <span className="text-text-dark font-medium">{product.material}</span>
                </div>
              )}
              {product.weight && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Peso:</span>
                  <span className="text-text-dark font-medium">{product.weight}</span>
                </div>
              )}
              {product.thickness && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Grosor:</span>
                  <span className="text-text-dark font-medium">{product.thickness}</span>
                </div>
              )}
              {product.resistance && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Resistencia:</span>
                  <span className="text-text-dark font-medium">{product.resistance}</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Codes & Colors */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {product.codes && product.codes.length > 0 && (
            <div>
              <h5 className="text-accent-dark font-semibold text-sm mb-2 uppercase tracking-wide">Códigos</h5>
              <div className="flex flex-wrap gap-1">
                {product.codes.map((code, index) => (
                  <span key={index} className="bg-gray-200 text-text-dark px-2 py-1 rounded text-xs font-mono">
                    {code}
                  </span>
                ))}
              </div>
            </div>
          )}

          {product.colors && product.colors.length > 0 && (
            <div>
              <h5 className="text-accent-dark font-semibold text-sm mb-2 uppercase tracking-wide">Colores</h5>
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
            <h5 className="text-accent-dark font-semibold text-sm mb-2 uppercase tracking-wide">Tallas Disponibles</h5>
            <div className="flex flex-wrap gap-1">
              {product.sizes.map((size, index) => (
                <span key={index} className="bg-gray-200 text-text-dark px-2 py-1 rounded text-xs font-medium">
                  {size}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Packaging */}
        {(product.packaging || product.masterBox) && (
          <div>
            <h5 className="text-accent-dark font-semibold text-sm mb-2 uppercase tracking-wide">Empaque</h5>
            <div className="space-y-1 text-sm">
              {product.packaging && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Empaque:</span>
                  <span className="text-text-dark">{product.packaging}</span>
                </div>
              )}
              {product.masterBox && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Caja Master:</span>
                  <span className="text-text-dark">{product.masterBox}</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Applications */}
        {product.applications && product.applications.length > 0 && (
          <div>
            <h5 className="text-accent-dark font-semibold text-sm mb-2 uppercase tracking-wide">Aplicaciones</h5>
            <ul className="text-sm text-gray-700 space-y-1">
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
            <h5 className="text-accent-dark font-semibold text-sm mb-2 uppercase tracking-wide">Características</h5>
            <ul className="text-sm text-gray-700 space-y-1">
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
            <h5 className="text-accent-dark font-semibold text-sm mb-2 uppercase tracking-wide">Certificaciones</h5>
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
          <div className="border-t border-gray-300/30 pt-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600 text-sm">Norma:</span>
              <span className="text-accent font-semibold">{product.norm}</span>
            </div>
          </div>
        )}
      </div>

      {/* Action Footer */}
      <div className="p-6 bg-gray-100/80 border-t border-gray-300/30">
        <button className="w-full bg-accent text-primary font-semibold py-2 px-4 rounded-lg hover:bg-accent-dark transition-colors text-sm">
          Solicitar Cotización
        </button>
      </div>
    </div>
  );
}