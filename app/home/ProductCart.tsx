'use client'

import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import React from 'react';
import Image from 'next/image';
import { useStoreData } from '@/store/shopStore';

type ProductCartProps = {
  id: number;
  image: string;
  text: string;
  price: number;
};

const ProductCart: React.FC<ProductCartProps> = ({ id, image, text, price }) => {
  const { toggleCart } = useStoreData();
  const count = useStoreData(state =>
    state.items.find(item => item.id === id)?.count ?? 0
  );

  return (
    <div className='bg-white rounded-lg shadow-lg overflow-visible flex flex-col'>
      <div className='relative w-full h-[200px]'>
        <Image
          src={image}
          alt={text}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <h3 className='text-lg font-semibold text-gray-800 px-4 pt-2 pb-4'>{text}</h3>
      <div className='flex items-center justify-between px-4 pt-0'>
        <span className='text-xl font-bold text-gray-700'>${price}</span>
        <div className='flex space-x-3'>
          <FaHeart />
          <button
            onClick={() => toggleCart(id)}
            className={` cursor-pointer ${count > 0 ? 'text-green-600' : 'text-black'}`}>
            <FaShoppingCart />
          </button> 
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
