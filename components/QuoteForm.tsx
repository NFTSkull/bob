'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { cn } from '@/lib/utils';
import { trackLeadGeneration } from '@/lib/analytics';

// Esquema de validación con Zod
const quoteFormSchema = z.object({
  empresa: z.string().min(2, 'El nombre de la empresa es requerido'),
  rfc: z.string().optional(),
  contacto: z.string().min(2, 'El nombre del contacto es requerido'),
  puesto: z.string().optional(),
  email: z.string().email('Email inválido'),
  telefono: z.string().min(10, 'Teléfono inválido'),
  categorias: z.array(z.string()).min(1, 'Selecciona al menos una categoría'),
  codigos: z.string().optional(),
  cantidades: z.string().optional(),
  frecuencia: z.enum(['unica', 'mensual', 'trimestral']).optional(),
  ciudad: z.string().min(2, 'Ciudad es requerida'),
  estado: z.string().min(2, 'Estado es requerido'),
  tipoEnvio: z.enum(['estandar', 'express', 'programado']).optional(),
  mensaje: z.string().optional(),
  consentimiento: z.boolean().refine(val => val === true, 'Debes aceptar el aviso de privacidad')
});

type QuoteFormData = z.infer<typeof quoteFormSchema>;

interface QuoteFormProps {
  id?: string;
  className?: string;
  onSuccess?: (data: QuoteFormData) => void;
}

const categorias = [
  { id: 'guantes', label: 'Guantes' },
  { id: 'proteccion-visual', label: 'Protección Visual y Auditiva' },
  { id: 'empaque', label: 'Empaque y Consumibles' },
  { id: 'ergonomia', label: 'Ergonomía y Protección' },
  { id: 'calzado', label: 'Calzado de Seguridad' },
  { id: 'marcadores', label: 'Marcadores Industriales' }
];

export default function QuoteForm({ id = 'cotizar', className, onSuccess }: QuoteFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    getValues
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      categorias: [],
      frecuencia: 'unica',
      tipoEnvio: 'estandar',
      consentimiento: false
    }
  });

  const watchedCategorias = watch('categorias');

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simular envío del formulario
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Trackear conversión
      trackLeadGeneration('quote_form', undefined);
      
      setIsSubmitted(true);
      onSuccess?.(data);
      
      // Resetear formulario después de 3 segundos
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
      
    } catch (error) {
      console.error('Error al enviar formulario:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCategoriaChange = (categoriaId: string, checked: boolean) => {
    const currentCategorias = getValues('categorias');
    if (checked) {
      setValue('categorias', [...currentCategorias, categoriaId]);
    } else {
      setValue('categorias', currentCategorias.filter(c => c !== categoriaId));
    }
  };

  if (isSubmitted) {
    return (
      <div className={cn('text-center py-12', className)}>
        <div className="bg-accent/10 border border-accent rounded-lg p-8">
          <div className="text-accent text-6xl mb-4">✓</div>
          <h3 className="text-2xl font-bold text-white mb-4">
            ¡Cotización Enviada!
          </h3>
          <p className="text-secondary">
            Hemos recibido tu solicitud. Nuestro equipo se pondrá en contacto contigo en las próximas 24 horas.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      id={id}
      onSubmit={handleSubmit(onSubmit)}
      className={cn('space-y-6', className)}
      noValidate
    >
      {/* Información de la empresa */}
      <div className="card">
        <h3 className="text-xl font-semibold text-white mb-4">
          Información de la Empresa
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="empresa" className="form-label">
              Empresa *
            </label>
            <input
              {...register('empresa')}
              type="text"
              id="empresa"
              className={cn('form-input w-full', errors.empresa && 'border-red-500')}
              placeholder="Nombre de la empresa"
              aria-describedby={errors.empresa ? 'empresa-error' : undefined}
            />
            {errors.empresa && (
              <p id="empresa-error" className="text-red-500 text-sm mt-1">
                {errors.empresa.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="rfc" className="form-label">
              RFC
            </label>
            <input
              {...register('rfc')}
              type="text"
              id="rfc"
              className="form-input w-full"
              placeholder="RFC de la empresa"
            />
          </div>
        </div>
      </div>

      {/* Información de contacto */}
      <div className="card">
        <h3 className="text-xl font-semibold text-white mb-4">
          Información de Contacto
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="contacto" className="form-label">
              Nombre del Contacto *
            </label>
            <input
              {...register('contacto')}
              type="text"
              id="contacto"
              className={cn('form-input w-full', errors.contacto && 'border-red-500')}
              placeholder="Nombre completo"
              aria-describedby={errors.contacto ? 'contacto-error' : undefined}
            />
            {errors.contacto && (
              <p id="contacto-error" className="text-red-500 text-sm mt-1">
                {errors.contacto.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="puesto" className="form-label">
              Puesto
            </label>
            <input
              {...register('puesto')}
              type="text"
              id="puesto"
              className="form-input w-full"
              placeholder="Puesto o cargo"
            />
          </div>

          <div>
            <label htmlFor="email" className="form-label">
              Email *
            </label>
            <input
              {...register('email')}
              type="email"
              id="email"
              className={cn('form-input w-full', errors.email && 'border-red-500')}
              placeholder="email@empresa.com"
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <p id="email-error" className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="telefono" className="form-label">
              Teléfono *
            </label>
            <input
              {...register('telefono')}
              type="tel"
              id="telefono"
              className={cn('form-input w-full', errors.telefono && 'border-red-500')}
              placeholder="81 1234 5678"
              aria-describedby={errors.telefono ? 'telefono-error' : undefined}
            />
            {errors.telefono && (
              <p id="telefono-error" className="text-red-500 text-sm mt-1">
                {errors.telefono.message}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Productos de interés */}
      <div className="card">
        <h3 className="text-xl font-semibold text-white mb-4">
          Productos de Interés *
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
          {categorias.map((categoria) => (
            <label key={categoria.id} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={watchedCategorias.includes(categoria.id)}
                onChange={(e) => handleCategoriaChange(categoria.id, e.target.checked)}
                className="w-4 h-4 text-accent bg-primary-light border-secondary-dark rounded focus:ring-accent focus:ring-2"
              />
              <span className="text-secondary text-sm">{categoria.label}</span>
            </label>
          ))}
        </div>
        
        {errors.categorias && (
          <p className="text-red-500 text-sm">
            {errors.categorias.message}
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label htmlFor="codigos" className="form-label">
              Códigos/SKU específicos
            </label>
            <textarea
              {...register('codigos')}
              id="codigos"
              rows={3}
              className="form-input w-full"
              placeholder="BGU-0036, BGU-0037, etc."
            />
          </div>

          <div>
            <label htmlFor="cantidades" className="form-label">
              Cantidades aproximadas
            </label>
            <textarea
              {...register('cantidades')}
              id="cantidades"
              rows={3}
              className="form-input w-full"
              placeholder="Guantes PU: 100 pares, Calzado: 50 pares, etc."
            />
          </div>
        </div>
      </div>

      {/* Información adicional */}
      <div className="card">
        <h3 className="text-xl font-semibold text-white mb-4">
          Información Adicional
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="frecuencia" className="form-label">
              Frecuencia de compra
            </label>
            <select
              {...register('frecuencia')}
              id="frecuencia"
              className="form-input w-full"
            >
              <option value="unica">Compra única</option>
              <option value="mensual">Mensual</option>
              <option value="trimestral">Trimestral</option>
            </select>
          </div>

          <div>
            <label htmlFor="ciudad" className="form-label">
              Ciudad *
            </label>
            <input
              {...register('ciudad')}
              type="text"
              id="ciudad"
              className={cn('form-input w-full', errors.ciudad && 'border-red-500')}
              placeholder="Monterrey"
              aria-describedby={errors.ciudad ? 'ciudad-error' : undefined}
            />
            {errors.ciudad && (
              <p id="ciudad-error" className="text-red-500 text-sm mt-1">
                {errors.ciudad.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="estado" className="form-label">
              Estado *
            </label>
            <input
              {...register('estado')}
              type="text"
              id="estado"
              className={cn('form-input w-full', errors.estado && 'border-red-500')}
              placeholder="Nuevo León"
              aria-describedby={errors.estado ? 'estado-error' : undefined}
            />
            {errors.estado && (
              <p id="estado-error" className="text-red-500 text-sm mt-1">
                {errors.estado.message}
              </p>
            )}
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="mensaje" className="form-label">
            Mensaje adicional
          </label>
          <textarea
            {...register('mensaje')}
            id="mensaje"
            rows={4}
            className="form-input w-full"
            placeholder="Información adicional sobre tu solicitud..."
          />
        </div>
      </div>

      {/* Consentimiento */}
      <div className="card">
        <label className="flex items-start space-x-3 cursor-pointer">
          <input
            {...register('consentimiento')}
            type="checkbox"
            className={cn(
              'w-4 h-4 text-accent bg-primary-light border-secondary-dark rounded focus:ring-accent focus:ring-2 mt-1',
              errors.consentimiento && 'border-red-500'
            )}
            aria-describedby={errors.consentimiento ? 'consentimiento-error' : undefined}
          />
          <div className="text-sm text-secondary">
            <span className="text-white">Acepto el </span>
            <a href="/aviso-privacidad" className="text-accent hover:underline">
              Aviso de Privacidad
            </a>
            <span className="text-white"> y autorizo el tratamiento de mis datos personales para fines comerciales. *</span>
          </div>
        </label>
        {errors.consentimiento && (
          <p id="consentimiento-error" className="text-red-500 text-sm mt-2">
            {errors.consentimiento.message}
          </p>
        )}
      </div>

      {/* Botón de envío */}
      <div className="text-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            'btn-primary text-lg px-12 py-4 min-w-[200px]',
            isSubmitting && 'opacity-50 cursor-not-allowed'
          )}
          aria-label="Enviar solicitud de cotización"
        >
          {isSubmitting ? 'Enviando...' : 'Enviar Cotización'}
        </button>
      </div>
    </form>
  );
}
