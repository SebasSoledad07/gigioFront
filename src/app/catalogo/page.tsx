'use client';

import { useState } from 'react';
import Button from '@/components/Button';
import ProductCard from '@/components/ProductCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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
  },
  {
    id: 4,
    name: 'Pijama Estampado Floral',
    price: 45.99,
    category: 'Clásico',
    image: '/placeholder.jpg'
  },
  {
    id: 5,
    name: 'Pijama Rayas Marineras',
    price: 42.99,
    category: 'Clásico',
    image: '/placeholder.jpg'
  },
  {
    id: 6,
    name: 'Pijama Seda Estampada',
    price: 54.99,
    category: 'Veraniego',
    image: '/placeholder.jpg'
  }
];

export default function Catalogo() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [sortBy, setSortBy] = useState<string>('precio-asc');

  const categories = ['Todos', 'Clásico', 'Veraniego', 'Invernal'];

  const filteredProducts = products.filter(product => 
    selectedCategory === 'Todos' || 
    product.category.toLowerCase() === selectedCategory.toLowerCase()
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'precio-asc') return a.price - b.price;
    if (sortBy === 'precio-desc') return b.price - a.price;
    return 0;
  });

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8">Nuestro Catálogo</h1>
          
          {/* Filtros */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'primary' : 'outline'}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
            
            <div className="flex items-center gap-2">
              <label htmlFor="sort" className="text-gray-600">Ordenar por:</label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border rounded-lg px-3 py-2"
              >
                <option value="precio-asc">Precio: Menor a Mayor</option>
                <option value="precio-desc">Precio: Mayor a Menor</option>
              </select>
            </div>
          </div>

          {/* Grid de Productos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedProducts.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
