'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { trackClick, trackAddToQuote } from '@/lib/analytics';

interface Product {
  codigo: string;
  talla?: string;
  material: string;
  color: string;
  empaque?: string;
  notas?: string;
}

interface ProductTableProps {
  products: Product[];
  title?: string;
  description?: string;
  showAddToQuote?: boolean;
  className?: string;
}

export default function ProductTable({
  products,
  title,
  description,
  showAddToQuote = true,
  className
}: ProductTableProps) {
  const [selectedProducts, setSelectedProducts] = useState<Set<string>>(new Set());
  const [sortField, setSortField] = useState<keyof Product>('codigo');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const handleSort = (field: keyof Product) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
    trackClick(`Sort by ${field}`, 'table_sort');
  };

  const handleSelectProduct = (codigo: string) => {
    const newSelected = new Set(selectedProducts);
    if (newSelected.has(codigo)) {
      newSelected.delete(codigo);
    } else {
      newSelected.add(codigo);
    }
    setSelectedProducts(newSelected);
  };

  const handleAddToQuote = () => {
    selectedProducts.forEach(codigo => {
      const product = products.find(p => p.codigo === codigo);
      if (product) {
        trackAddToQuote(product.codigo, `${product.codigo} - ${product.material}`);
      }
    });
    
    // Aquí podrías abrir un modal o redirigir a un formulario
    alert(`Se agregaron ${selectedProducts.size} productos a la cotización`);
  };

  const sortedProducts = [...products].sort((a, b) => {
    const aValue = a[sortField] || '';
    const bValue = b[sortField] || '';
    
    if (sortDirection === 'asc') {
      return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
    } else {
      return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
    }
  });

  const SortIcon = ({ field }: { field: keyof Product }) => {
    if (sortField !== field) {
      return (
        <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
        </svg>
      );
    }
    
    return sortDirection === 'asc' ? (
      <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
      </svg>
    ) : (
      <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
      </svg>
    );
  };

  return (
    <div className={cn('space-y-6', className)}>
      {/* Encabezado */}
      {(title || description) && (
        <div className="text-center">
          {title && (
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-secondary max-w-3xl mx-auto">
              {description}
            </p>
          )}
        </div>
      )}

      {/* Controles */}
      {showAddToQuote && selectedProducts.size > 0 && (
        <div className="flex justify-between items-center bg-accent/10 p-4 rounded-lg">
          <span className="text-white font-medium">
            {selectedProducts.size} producto(s) seleccionado(s)
          </span>
          <button
            onClick={handleAddToQuote}
            className="btn-primary"
            aria-label="Agregar productos seleccionados a cotización"
          >
            Agregar a Cotización
          </button>
        </div>
      )}

      {/* Tabla */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-primary-light rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-primary border-b border-secondary-dark">
              {showAddToQuote && (
                <th className="p-4 text-left">
                  <input
                    type="checkbox"
                    checked={selectedProducts.size === products.length && products.length > 0}
                    onChange={() => {
                      if (selectedProducts.size === products.length) {
                        setSelectedProducts(new Set());
                      } else {
                        setSelectedProducts(new Set(products.map(p => p.codigo)));
                      }
                    }}
                    className="w-4 h-4 text-accent bg-primary-light border-secondary-dark rounded focus:ring-accent focus:ring-2"
                    aria-label="Seleccionar todos los productos"
                  />
                </th>
              )}
              <th className="p-4 text-left">
                <button
                  onClick={() => handleSort('codigo')}
                  className="flex items-center space-x-2 text-white font-semibold hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary rounded"
                >
                  <span>Código</span>
                  <SortIcon field="codigo" />
                </button>
              </th>
              <th className="p-4 text-left">
                <button
                  onClick={() => handleSort('talla')}
                  className="flex items-center space-x-2 text-white font-semibold hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary rounded"
                >
                  <span>Talla/Medida</span>
                  <SortIcon field="talla" />
                </button>
              </th>
              <th className="p-4 text-left">
                <button
                  onClick={() => handleSort('material')}
                  className="flex items-center space-x-2 text-white font-semibold hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary rounded"
                >
                  <span>Material</span>
                  <SortIcon field="material" />
                </button>
              </th>
              <th className="p-4 text-left">
                <button
                  onClick={() => handleSort('color')}
                  className="flex items-center space-x-2 text-white font-semibold hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary rounded"
                >
                  <span>Color</span>
                  <SortIcon field="color" />
                </button>
              </th>
              <th className="p-4 text-left">
                <button
                  onClick={() => handleSort('empaque')}
                  className="flex items-center space-x-2 text-white font-semibold hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary rounded"
                >
                  <span>Empaque</span>
                  <SortIcon field="empaque" />
                </button>
              </th>
              <th className="p-4 text-left">
                <span className="text-white font-semibold">Notas</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedProducts.map((product, index) => (
              <tr
                key={product.codigo}
                className={cn(
                  'border-b border-secondary-dark/50 hover:bg-primary/50 transition-colors',
                  index % 2 === 0 ? 'bg-primary-light' : 'bg-primary-light/50'
                )}
              >
                {showAddToQuote && (
                  <td className="p-4">
                    <input
                      type="checkbox"
                      checked={selectedProducts.has(product.codigo)}
                      onChange={() => handleSelectProduct(product.codigo)}
                      className="w-4 h-4 text-accent bg-primary-light border-secondary-dark rounded focus:ring-accent focus:ring-2"
                      aria-label={`Seleccionar producto ${product.codigo}`}
                    />
                  </td>
                )}
                <td className="p-4">
                  <span className="font-mono text-accent font-semibold">
                    {product.codigo}
                  </span>
                </td>
                <td className="p-4 text-secondary">
                  {product.talla || '-'}
                </td>
                <td className="p-4 text-secondary">
                  {product.material}
                </td>
                <td className="p-4 text-secondary">
                  {product.color}
                </td>
                <td className="p-4 text-secondary">
                  {product.empaque || '-'}
                </td>
                <td className="p-4 text-secondary text-sm">
                  {product.notas || '-'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Información adicional */}
      <div className="text-center text-secondary text-sm">
        Mostrando {products.length} producto(s)
      </div>
    </div>
  );
}
