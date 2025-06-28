
import { FaCheck, FaHeart, FaShoppingCart } from 'react-icons/fa';
import React from 'react'
import Image from 'next/image';
import toast from 'react-hot-toast';


type Item = {
  image: string
  text: string
  price: number
  category: string
  inStock: boolean
}


const ProductCart: React.FC<Item> = ({image,text,price,category,inStock}) => {
  return (
    <div className='bg-white rounded-lg shadow-lg overflow-visible flex flex-col'>
      <div className='relative w-full h-[200px]'>
        <Image src={image} alt={'Product Image'} fill style={{ objectFit: 'cover' }} />
      </div>
      <h3 className='text-lg font-semibold text-gray-800 px-4 pt-2 pb-4'>{text}</h3>
      <div className='flex items-center justify-between px-4 pt-0'>
      <span className='text-xl font-bold text-gray-700'>${price}</span>
       <div className='flex space-x-3'>
      <FaHeart />
      <FaShoppingCart />
       </div>
      </div>
    </div>
  )
}

export default ProductCart