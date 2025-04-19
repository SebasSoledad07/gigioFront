'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Pijama Clásico Algodón',
    price: 49.99,
    category: 'clasico',
    image: '/placeholder.jpg'
  },
  {
    id: 2,
    name: 'Pijama Veraniego Seda',
    price: 39.99,
    category: 'veraniego',
    image: '/placeholder.jpg'
  },
  {
    id: 3,
    name: 'Pijama Invernal Felpa',
    price: 59.99,
    category: 'invernal',
    image: '/placeholder.jpg'
  },
  {
    id: 4,
    name: 'Pijama Estampado Floral',
    price: 45.99,
    category: 'estampado',
    image: '/placeholder.jpg'
  },
  {
    id: 5,
    name: 'Pijama Rayas Náuticas',
    price: 42.99,
    category: 'estampado',
    image: '/placeholder.jpg'
  },
  {
    id: 6,
    name: 'Pijama Navideño',
    price: 54.99,
    category: 'especial',
    image: '/placeholder.jpg'
  }
];

export default function Catalogo() {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [sortBy, setSortBy] = useState<string>('precio-asc');

  const categories = ['todos', 'clasico', 'veraniego', 'invernal', 'estampado', 'especial'];

  const filteredProducts = products
    .filter(product => selectedCategory === 'todos' || product.category === selectedCategory)
    .sort((a, b) => {
      if (sortBy === 'precio-asc') return a.price - b.price;
      if (sortBy === 'precio-desc') return b.price - a.price;
      return 0;
    });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Nuestro Catálogo de Pijamas</h1>
      
      {/* Filtros */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 rounded border border-gray-300"
        >
          <option value="precio-asc">Precio: Menor a Mayor</option>
          <option value="precio-desc">Precio: Mayor a Menor</option>
        </select>
      </div>

      {/* Grid de Productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 bg-gray-200 relative">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
              <button className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition-colors">
                Añadir al carrito
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
