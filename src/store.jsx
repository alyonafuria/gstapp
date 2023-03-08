import { create } from "zustand";

export const useInboxTab = create((set) => ({
  isInboxActive: true,
  setIsInboxActive: (value) => set({ isActive: value }),
}));

export const useDeletedTodosState = create((set) => ({
  deletedTodos: [],
  setDeletedTodos: (value) =>
    set((state) => ({ deletedTodos: [...state.deletedTodos, value] })),
}));

export const useModalWindowState = create((set) => ({
  isModalActive: false,
  modalHeight: 0,
  setIsModalActive: (value) => set({ isModalActive: value }),
  setModalHeight: (value) => set({ modalHeight: value }),
}));

export const useClickCoords = create((set) => ({
  xPos: 0,
  yPos: 0,
  setXpos: (value) => set({ xPos: value }),
  setYpos: (value) => set({ yPos: value }),
}));
