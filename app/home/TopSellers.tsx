'use client'

import React from 'react';
import { useStoreData } from '@/store/shopStore';
import CardCarousel from './CardCarousel';

const TopSellers = () => {
  const items = useStoreData(state => state.items);

  // Take items 8–15 as "Top Sellers"
  const cards = items.slice(8, 15);

  return (
    <div className="text-neutral-500 dark:text-gray-50 dark:bg-neutral-500 p-3">
      <CardCarousel title="Top Sellers" cards={cards} />
    </div>
  );
};

export default TopSellers;
