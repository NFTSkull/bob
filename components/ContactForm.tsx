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
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-blue-800 text-sm">
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
              className="form-smooth w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors"
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors"
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors"
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors"
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors"
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors"
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
            className="w-full bg-yellow-500 text-white font-bold py-4 px-6 rounded-lg hover:bg-yellow-600 transition-colors text-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
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

        {/* Información de Contacto Alternativo */}
        <div className="border-t border-gray-200 pt-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Contacto Directo Ejecutivo
            </h3>
            <p className="text-gray-600 text-sm mb-6">
              Para consultas urgentes o atención personalizada
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <a
                href="mailto:ventas@bobsolution.com"
                className="group flex items-center justify-center px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-white/30 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-medium opacity-90 uppercase tracking-wide">Email Corporativo</div>
                    <div className="font-semibold">ventas@bobsolution.com</div>
                  </div>
                </div>
              </a>
              <a
                href="tel:+528125090913"
                className="group flex items-center justify-center px-6 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-white/30 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-medium opacity-90 uppercase tracking-wide">Línea Directa</div>
                    <div className="font-semibold">81 2509 0913</div>
                  </div>
                </div>
              </a>
            </div>
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-blue-800 text-sm font-medium">
                <span className="font-bold">Horario de Atención:</span> Lunes a Viernes 8:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
