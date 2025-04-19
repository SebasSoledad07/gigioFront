'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Cart from './Cart';

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-purple-600">
          Pijamas Cómodos
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="/catalogo"
            className={`${
              isActive('/catalogo')
                ? 'text-purple-600 font-medium'
                : 'text-gray-600 hover:text-purple-600'
            }`}
          >
            Catálogo
          </Link>
          <Link
            href="/nosotros"
            className={`${
              isActive('/nosotros')
                ? 'text-purple-600 font-medium'
                : 'text-gray-600 hover:text-purple-600'
            }`}
          >
            Nosotros
          </Link>
          <Link
            href="/contacto"
            className={`${
              isActive('/contacto')
                ? 'text-purple-600 font-medium'
                : 'text-gray-600 hover:text-purple-600'
            }`}
          >
            Contacto
          </Link>
          <Cart />
        </div>
      </div>
    </nav>
  );
} 