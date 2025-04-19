'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Confirmacion() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <svg
              className="w-10 h-10 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        <h1 className="text-3xl font-bold mb-4">¡Gracias por tu compra!</h1>
        <p className="text-gray-600 mb-8">
          Tu pedido ha sido recibido y está siendo procesado. Te enviaremos un correo electrónico con los detalles de tu compra y el número de seguimiento.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold mb-4">Resumen del Pedido</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Número de Pedido</span>
              <span className="font-semibold">#12345</span>
            </div>
            <div className="flex justify-between">
              <span>Fecha</span>
              <span>{new Date().toLocaleDateString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Total</span>
              <span className="font-semibold">$155.96</span>
            </div>
            <div className="flex justify-between">
              <span>Método de Pago</span>
              <span>Tarjeta de Crédito</span>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Productos Comprados</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
              <div className="relative w-16 h-16 bg-gray-200 rounded overflow-hidden">
                <Image
                  src="/placeholder.jpg"
                  alt="Pijama Clásico"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">Pijama Clásico Algodón</h3>
                <p className="text-gray-600">Talla: M | Color: Azul</p>
              </div>
              <div className="text-right">
                <p className="font-semibold">$49.99</p>
                <p className="text-sm text-gray-600">Cantidad: 1</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <Link
            href="/catalogo"
            className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Seguir Comprando
          </Link>
          <p className="text-sm text-gray-600">
            ¿Tienes alguna pregunta?{' '}
            <Link href="/contacto" className="text-purple-600 hover:underline">
              Contáctanos
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
} 