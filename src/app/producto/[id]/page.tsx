'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  sizes: string[];
  colors: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: 'Pijama Clásico Algodón',
    price: 49.99,
    description: 'Pijama de algodón 100% premium, suave y cómodo para uso diario. Ideal para todas las estaciones del año.',
    category: 'clasico',
    image: '/placeholder.jpg',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Azul', 'Blanco', 'Gris']
  },
  // ... otros productos
];

export default function ProductoDetalle() {
  const params = useParams();
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);

  const product = products.find(p => p.id === Number(params.id));

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Imagen del Producto */}
        <div className="relative h-[500px] bg-gray-200 rounded-lg overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Información del Producto */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl font-semibold text-purple-600 mb-4">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-gray-600 mb-6">{product.description}</p>

          {/* Selector de Talla */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Talla</h3>
            <div className="flex gap-2">
              {product.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded ${
                    selectedSize === size
                      ? 'border-purple-600 bg-purple-100 text-purple-600'
                      : 'border-gray-300 hover:border-purple-600'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Selector de Color */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Color</h3>
            <div className="flex gap-2">
              {product.colors.map(color => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-4 py-2 border rounded ${
                    selectedColor === color
                      ? 'border-purple-600 bg-purple-100 text-purple-600'
                      : 'border-gray-300 hover:border-purple-600'
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Selector de Cantidad */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Cantidad</h3>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-2 border rounded hover:bg-gray-100"
              >
                -
              </button>
              <span className="text-xl">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-2 border rounded hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>

          {/* Botón de Compra */}
          <button
            className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors"
            disabled={!selectedSize || !selectedColor}
          >
            Añadir al Carrito
          </button>
        </div>
      </div>
    </div>
  );
} 