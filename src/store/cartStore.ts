import { create } from 'zustand'

interface CartState {
  cartState: boolean;
  toggleCartState:() => void;
}

export const useMenuStore = create<CartState>()((set) => ({
  cartState: false,
  toggleCartState:() => set((state) => ({
    cartState: !state.cartState 
  }))
}))