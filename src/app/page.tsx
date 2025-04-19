'use client';

import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';
import ProductCard from '@/components/ProductCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const featuredProducts = [
  {
    id: 1,
    name: 'Pijama Clásico Algodón',
    price: 49.99,
    category: 'Clásico',
    image: '/placeholder.jpg'
  },
  {
    id: 2,
    name: 'Pijama Veraniego Seda',
    price: 39.99,
    category: 'Veraniego',
    image: '/placeholder.jpg'
  },
  {
    id: 3,
    name: 'Pijama Invernal Felpa',
    price: 59.99,
    category: 'Invernal',
    image: '/placeholder.jpg'
  }
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative h-[600px] bg-gray-100">
          <div className="absolute inset-0">
            <Image
              src="/hero-bg.jpg"
              alt="Pijamas cómodos"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-40" />
          </div>
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-5xl font-bold mb-4">
                Descubre la Comodidad en Cada Noche
              </h1>
              <p className="text-xl mb-8">
                Pijamas de alta calidad diseñados para tu máximo confort. 
                Explora nuestra colección y encuentra tu estilo perfecto.
              </p>
              <div className="flex gap-4">
                <Link href="/catalogo">
                  <Button size="lg">
                    Ver Catálogo
                  </Button>
                </Link>
                <Link href="/nosotros">
                  <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-gray-900">
                    Conócenos
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Productos Destacados</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Descubre nuestras selecciones más populares, diseñadas para brindarte 
                la máxima comodidad y estilo.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map(product => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/catalogo">
                <Button variant="outline" size="lg">
                  Ver Todo el Catálogo
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Calidad Garantizada</h3>
                <p className="text-gray-600">
                  Materiales premium seleccionados para tu máximo confort y durabilidad.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Envío Rápido</h3>
                <p className="text-gray-600">
                  Recibe tus pedidos en tiempo récord, con seguimiento en tiempo real.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Pago Seguro</h3>
                <p className="text-gray-600">
                  Procesamos tus pagos de forma segura con las últimas tecnologías.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              ¿Listo para Descubrir tu Nuevo Pijama Favorito?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Únete a miles de clientes satisfechos que ya disfrutan de la comodidad 
              de nuestros pijamas.
            </p>
            <Link href="/catalogo">
              <Button variant="secondary" size="lg">
                Comenzar a Comprar
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
