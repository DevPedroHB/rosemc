import { formatKeyStorage } from "@/functions/format-key-storage";
import type { Product } from "@/types/product";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export interface ICartItem extends Product {
  quantity: number;
  discountedPrice?: number;
}

interface ICartStore {
  items: ICartItem[];
  total: number;
  length: number;
  add: (item: ICartItem) => void;
  changeQuantity: (itemId: string, action: "increase" | "decrease") => void;
  remove: (itemId: string) => void;
  clear: () => void;
}

export const useCartStore = create<ICartStore>()(
  persist(
    immer((set) => ({
      items: [],
      total: 0,
      length: 0,
      add(item) {
        set((state) => {
          const existingItem = state.items.find((i) => i.id === item.id);

          if (existingItem) {
            existingItem.quantity += item.quantity;
          } else {
            item.discountedPrice = calculateDiscount(item.price, item.discount);

            state.items.push(item);
          }

          state.total = calculateTotal(state.items);
          state.length = calculateLength(state.items);
        });
      },
      changeQuantity(itemId, action) {
        set((state) => {
          const item = state.items.find((i) => i.id === itemId);

          if (item) {
            if (action === "increase") {
              item.quantity += 1;
            } else if (action === "decrease") {
              item.quantity = Math.max(item.quantity - 1, 0);
            }

            if (item.quantity === 0) {
              state.items = state.items.filter((i) => i.id !== itemId);
            }
          }

          state.total = calculateTotal(state.items);
          state.length = calculateLength(state.items);
        });
      },
      remove(itemId) {
        set((state) => {
          state.items = state.items.filter((item) => item.id !== itemId);
          state.total = calculateTotal(state.items);
          state.length = calculateLength(state.items);
        });
      },
      clear() {
        set(() => ({
          items: [],
          total: 0,
          length: 0,
        }));
      },
    })),
    {
      name: formatKeyStorage("cart-store"),
    },
  ),
);

export const calculateDiscount = (price: number, discount: number) =>
  price * (1 - discount / 100);

export const calculateTotal = (items: ICartItem[]): number =>
  items.reduce((acc, curr) => acc + curr.discountedPrice! * curr.quantity, 0);

export const calculateLength = (items: ICartItem[]) => items.length;
