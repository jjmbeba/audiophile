import { create } from "zustand";

interface CartState {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeAllCartItems: () => void;
  increaseItemQuantity: (itemId: string) => void;
  decreaseItemQuantity: (itemId: string) => void;
}

export interface CartItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

export const useCartStore = create<CartState>()((set) => ({
  cartItems: [
    {
      id: "64fe31c9d63b300531479a68",
      name: "XX59 Headphones",
      quantity: 1,
      price: 899,
    },
  ],
  addToCart: (item: CartItem) =>
    set((state) => ({
      cartItems: [...state.cartItems, item],
    })),
  removeAllCartItems: () =>
    set((state) => ({
      cartItems: [],
    })),
  increaseItemQuantity: (itemId: string) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      ),
    })),
  decreaseItemQuantity: (itemId: string) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
      ),
    })),

}));
