import { create } from 'zustand';

export const useStore = create((set) => ({
  isInboxActive: true,
  setIsInboxActive: (value) => set({ isActive: value }),
}));
