'use client';

import { useState } from 'react';

interface FormData {
  nombre: string;
  empresa: string;
  email: string;
  telefono: string;
  productos: string;
  cantidad: string;
  mensaje: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    productos: '',
    cantidad: '',
    mensaje: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envío del formulario
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        nombre: '',
        empresa: '',
        email: '',
        telefono: '',
        productos: '',
        cantidad: '',
        mensaje: ''
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl shadow-2xl p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">¡Solicitud Enviada!</h3>
        <p className="text-gray-600 mb-6">
          Gracias por contactarnos. Nuestro equipo se pondrá en contacto contigo en las próximas 24 horas.
        </p>
        <div className="bg-bob-blue-50 border border-bob-blue-200 rounded-lg p-4">
          <p className="text-bob-blue-800 text-sm">
            <strong>Próximos pasos:</strong> Revisaremos tu solicitud y te enviaremos una cotización personalizada.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8">
        <div className="text-center mb-8 animate-fade-in-up">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-elegant-hover">Solicitar Cotización</h2>
          <p className="text-gray-600 text-lg text-elegant-hover">
            Completa el formulario y recibe una cotización personalizada en 24 horas
          </p>
        </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Información Personal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="nombre" className="block text-sm font-semibold text-gray-700 mb-2">
              Nombre Completo *
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              className="form-smooth w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bob-blue-500 focus:border-bob-blue-500 transition-colors"
              placeholder="Tu nombre completo"
            />
          </div>

          <div>
            <label htmlFor="empresa" className="block text-sm font-semibold text-gray-700 mb-2">
              Empresa *
            </label>
            <input
              type="text"
              id="empresa"
              name="empresa"
              value={formData.empresa}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bob-blue-500 focus:border-bob-blue-500 transition-colors"
              placeholder="Nombre de tu empresa"
            />
          </div>
        </div>

        {/* Información de Contacto */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              Email Corporativo *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bob-blue-500 focus:border-bob-blue-500 transition-colors"
              placeholder="tu@empresa.com"
            />
          </div>

          <div>
            <label htmlFor="telefono" className="block text-sm font-semibold text-gray-700 mb-2">
              Teléfono *
            </label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bob-blue-500 focus:border-bob-blue-500 transition-colors"
              placeholder="+52 81 1234 5678"
            />
          </div>
        </div>

        {/* Información del Producto */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="productos" className="block text-sm font-semibold text-gray-700 mb-2">
              Productos de Interés *
            </label>
            <select
              id="productos"
              name="productos"
              value={formData.productos}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bob-blue-500 focus:border-bob-blue-500 transition-colors"
            >
              <option value="">Selecciona una categoría</option>
              <option value="guantes">Guantes de Seguridad</option>
              <option value="calzado">Calzado de Seguridad</option>
              <option value="proteccion-cabeza">Protección de Cabeza</option>
              <option value="proteccion-auditiva">Protección Auditiva</option>
              <option value="proteccion-visual">Protección Visual</option>
              <option value="ropa-proteccion">Ropa de Protección</option>
              <option value="marcadores">Marcadores Industriales</option>
              <option value="materiales">Materiales de Empaque</option>
              <option value="multiple">Múltiples Categorías</option>
              <option value="personalizado">Solución Personalizada</option>
            </select>
          </div>

          <div>
            <label htmlFor="cantidad" className="block text-sm font-semibold text-gray-700 mb-2">
              Cantidad Aproximada
            </label>
            <select
              id="cantidad"
              name="cantidad"
              value={formData.cantidad}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bob-blue-500 focus:border-bob-blue-500 transition-colors"
            >
              <option value="">Selecciona un rango</option>
              <option value="1-50">1 - 50 unidades</option>
              <option value="51-200">51 - 200 unidades</option>
              <option value="201-500">201 - 500 unidades</option>
              <option value="501-1000">501 - 1,000 unidades</option>
              <option value="1000+">Más de 1,000 unidades</option>
            </select>
          </div>
        </div>

        {/* Mensaje */}
        <div>
          <label htmlFor="mensaje" className="block text-sm font-semibold text-gray-700 mb-2">
            Mensaje Adicional
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors resize-none"
            placeholder="Describe tus necesidades específicas, fechas de entrega, certificaciones requeridas, etc."
          />
        </div>

        {/* Botón de Envío */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-bob-blue-500 text-white font-bold py-4 px-6 rounded-lg hover:bg-bob-green-500 transition-colors text-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Enviando Solicitud...
              </div>
            ) : (
              'Enviar Solicitud de Cotización'
            )}
          </button>
        </div>

        {/* Horario de Atención */}
        <div className="border-t border-gray-200 pt-8">
          <div className="text-center">
            <div className="p-4 bg-bob-blue-50 border border-bob-blue-200 rounded-lg max-w-md mx-auto">
              <p className="text-bob-blue-800 text-sm font-medium">
                <span className="font-bold">Horario de Atención:</span> Lunes a Viernes 7:00 AM - 5:00 PM
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
