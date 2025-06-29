import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import products from '@/public/data/data.json';

// ✅ Define item type
export type Item = {
  id: number;
  image: string;
  text: string;
  price: number;
  category: string;
  inStock: boolean;
  material: string;
  roomType: string;
  style: string;
  quantity: number;
  count: number;
};

// ✅ Store type
type StoreData = {
  items: Item[];
  toggleCart: (id: number) => void;
  incrementCart: (id: number) => void;
};

// ✅ Create store
export const useStoreData = create<StoreData>()(
  devtools(
    persist(
      (set) => ({
        items: (products.products as Item[]).map(item => ({
          ...item,
          count: item.count ?? 0
        })),

        toggleCart: (id) => {
          set((state) => ({
            items: state.items.map(item =>
              item.id === id
                ? { ...item, count: item.count === 0 ? 1 : 0 }
                : item
            )
          }));
        },
        // Increment count by 1
        incrementCart: (id) => {
          set((state) => ({
            items: state.items.map(item =>
              item.id === id
                ? { ...item, count: item.count + 1 }
                : item
            )
          }));
        }
      }),
      {
        name: 'item-store', // localStorage key
      }
    ),
    { name: 'store-data' } // name in devtools
  )
);
