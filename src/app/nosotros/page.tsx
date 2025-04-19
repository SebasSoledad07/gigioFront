'use client';

import Image from 'next/image';

export default function Nosotros() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Sobre Gigio</h1>

        {/* Historia */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Nuestra Historia</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-600 mb-4">
                Gigio nació en 2020 con un sueño simple pero poderoso: crear pijamas que no solo fueran cómodos,
                sino que también reflejaran la personalidad y el estilo de quienes los usan.
              </p>
              <p className="text-gray-600 mb-4">
                Todo comenzó en un pequeño taller donde cada pijama era confeccionado con amor y atención al detalle.
                Hoy, seguimos manteniendo esa misma pasión y dedicación en cada una de nuestras prendas.
              </p>
              <p className="text-gray-600">
                Nuestro compromiso con la calidad y el diseño nos ha permitido crecer, pero nunca hemos perdido
                de vista nuestros valores fundamentales: comodidad, estilo y sostenibilidad.
              </p>
            </div>
            <div className="relative h-64 md:h-96">
              <Image
                src="/placeholder.jpg"
                alt="Taller de Gigio"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Nuestros Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Calidad</h3>
              <p className="text-gray-600">
                Nos comprometemos a usar solo los mejores materiales y procesos de producción para garantizar
                la máxima calidad en cada pijama.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sostenibilidad</h3>
              <p className="text-gray-600">
                Nos preocupamos por el medio ambiente y trabajamos con materiales sostenibles y procesos
                de producción responsables.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovación</h3>
              <p className="text-gray-600">
                Constantemente buscamos nuevas formas de mejorar nuestros productos y procesos,
                manteniéndonos a la vanguardia del diseño y la comodidad.
              </p>
            </div>
          </div>
        </section>

        {/* Equipo */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Nuestro Equipo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center gap-4">
              <div className="relative w-24 h-24 rounded-full overflow-hidden">
                <Image
                  src="/placeholder.jpg"
                  alt="Miembro del equipo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold">María García</h3>
                <p className="text-gray-600">Fundadora y Diseñadora</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative w-24 h-24 rounded-full overflow-hidden">
                <Image
                  src="/placeholder.jpg"
                  alt="Miembro del equipo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Carlos Rodríguez</h3>
                <p className="text-gray-600">Director de Operaciones</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 