

import React from 'react';
import { products } from '@/public/data/data.json';
import CardCarousel from './CardCarousel';

const NewArrival = () => {

  const cards = products.slice(0, 8).map((item) => ({
    id: item.id,
    image: item.image,
    text: item.text,
    price: item.price,
    category: item.category,
    inStock: item.inStock,
  }));

  return (
    <div className='dark:bg-neutral-800'>
      <CardCarousel title="New Arrivals" cards={cards} />
    </div>
  );
};

export default NewArrival;
