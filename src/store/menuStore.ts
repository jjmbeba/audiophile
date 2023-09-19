import { create } from 'zustand'

interface MenuState {
  menuState: boolean;
  toggleMenuState:() => void;
  closeMenu:() => void;
}

export const useMenuStore = create<MenuState>()((set) => ({
  menuState: false,
  toggleMenuState:() => set((state) => ({
    menuState: !state.menuState
  })),
  closeMenu:() => set((state) => ({
    menuState:false
  }))
}))