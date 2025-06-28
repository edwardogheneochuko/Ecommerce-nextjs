
import React from 'react'
import {products} from '@/public/data/data.json'
import CardCarousel from './CardCarousel'

const TopSellers = () => {
  
  const cards = products.slice(8,15).map((item) => ({
    id: item.id,
    image: item.image,
    text: item.text,
    price: item.price,
    category: item.category,
    inStock: item.inStock,
}))
  return (
    <div className="text-neutral-500 dark:text-gray-50 dark:bg-neutral-500 p-3">
                <CardCarousel title="Top Sellers" cards={cards}/>
    </div>

  )
}

export default TopSellers
