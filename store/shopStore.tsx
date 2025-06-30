import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import products from '@/public/data/data.json';

//  Define item type
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

// Store type
type StoreData = {
  items: Item[];
  toggleCart: (id: number) => void;
  wishlist: number[]
  toggleWishlist: (id:number) => void
  isInWishlist: (id: number) => boolean
  getWishlistItems: () => Item[]
  incrementCart: (id: number) => void;
  decrementCart: (id:number) => void
  getPickedItems: () => Item[]
};

export const useStoreData = create<StoreData>()(
  devtools(
    persist(
      (set,get) => ({
        items: (products.products as Item[]).map(item => ({
          ...item,
          count: item.count ?? 0
        })),
        wishlist: [],
        toggleCart: (id) => {
          set((state) => ({
            items: state.items.map(item =>
              item.id === id
                ? { ...item, count: item.count === 0 ? 1 : 0 }
                : item
            )
          }));
        },
        toggleWishlist: (id) =>
          set((state) => ({
            wishlist: state.wishlist.includes(id)
            ? state.wishlist.filter((itemId) => itemId !== id)
            : [...state.wishlist, id],
          })),
          isInWishlist: (id) => get().wishlist.includes(id),
          
      getWishlistItems: () => {
        const state = get()
        return state.items.filter((item) => state.wishlist.includes(item.id))
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
        },
        decrementCart: (id) => {
          set((state) => ({
            items: state.items.map(item =>
              item.id === id && item.count > 0 ? {...item, count: item.count - 1}
              : item
            )
          }))
        },
        getPickedItems: () => {
          return get().items.filter((item) => item.count > 0)
        }
      }),
      {
        name: 'item-store', // localStorage key
      }
    ),
    { name: 'store-data' } // name in devtools
  )
);
