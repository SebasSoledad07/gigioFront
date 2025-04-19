'use client';

import React from 'react';
import Image from 'next/image';
import Button from './Button';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

export default function ProductCard({ id, name, price, image, category }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, name, price, image, category });
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-64 bg-gray-100">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold">{name}</h3>
          <span className="text-purple-600 font-semibold">${price.toFixed(2)}</span>
        </div>
        <p className="text-sm text-gray-500 mb-4">{category}</p>
        <Button fullWidth onClick={handleAddToCart}>
          Añadir al carrito
        </Button>
      </div>
    </div>
  );
} 