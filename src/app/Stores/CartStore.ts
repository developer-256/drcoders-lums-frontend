import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type CartItem = {
  id: number;
  count: number;
};

type CartStore = {
  cartItems: CartItem[];
  addCartItem: (id: number) => void;
  removeCartItem: (id: number) => void;
};

export const useCartStore = create<CartStore>()(
  devtools(
    persist(
      (set) => ({
        cartItems: [],
        addCartItem: (id) =>
          set((state) => {
            const existingItem = state.cartItems.find((item) => item.id === id);

            if (existingItem) {
              return {
                cartItems: state.cartItems.map((item) =>
                  item.id === id ? { ...item, count: item.count + 1 } : item,
                ),
              };
            } else {
              return {
                cartItems: [...state.cartItems, { id, count: 1 }],
              };
            }
          }),
        removeCartItem: (id) =>
          set((state) => {
            const existingItem = state.cartItems.find((item) => item.id === id);

            if (existingItem) {
              if (existingItem.count > 1) {
                return {
                  cartItems: state.cartItems.map((item) =>
                    item.id === id ? { ...item, count: item.count - 1 } : item,
                  ),
                };
              } else {
                return {
                  cartItems: state.cartItems.filter((item) => item.id !== id),
                };
              }
            }
            return state;
          }),
      }),
      { name: "cartStore" },
    ),
  ),
);

//   getTotalItems: () => {
//     (state) => {
//       // Calculate total items by summing the 'count' of all cart items
//       return state.cartItems.reduce((total, item) => total + item.count, 0);
//     };
//   }
