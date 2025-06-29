'use client'

import React from 'react';
import { useStoreData } from '@/store/shopStore';
import CardCarousel from './CardCarousel';

const NewArrival = () => {
  const items = useStoreData(state => state.items);

  const cards = items.slice(0, 8);

  return (
    <div className='dark:bg-neutral-800'>
      <CardCarousel title="New Arrivals" cards={cards} />
    </div>
  );
};

export default NewArrival;
