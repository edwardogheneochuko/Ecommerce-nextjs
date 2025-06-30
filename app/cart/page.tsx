
'use client'
import React from 'react'
import { FaShoppingBasket, FaTrash } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'


const page = () => {
  return (
    <div className='w-full max-w-7xl mx-auto my-12 px-4 '>
       <h1 className='text-3xl md:text-4xl font-bold text-gray-800 mb-2'>
        Shopping Bag
       </h1>
    </div>
  )
}

export default page