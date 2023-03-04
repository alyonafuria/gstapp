import { create } from "zustand";

export const useInboxTab = create((set) => ({
  isInboxActive: true,
  setIsInboxActive: (value) => set({ isActive: value }),
}));

export const useInboxTodosState = create((set) => ({
  inboxTodo: "",
  setInboxTodo: (value) => set({ inboxTodo: value }),
  inboxTodos: [],
  setInboxTodos: (value) =>
    set((state) => ({ inboxTodos: [...state.inboxTodos, value] })),
  inboxIndex: 0,
  setInboxIndex: (value) => set({ inboxIndex: value }),
}));

export const useDeletedTodosState = create((set) => ({
  deletedTodos: [],
  setDeletedTodos: (value) =>
    set((state) => ({ deletedTodos: [...state.deletedTodos, value] })),
}));

export const useModalWindowState = create((set) => ({
  isModalActive: false,
  setIsModalActive: (value) => set({ isModalActive: value }),
}));

export const useClickCoords = create((set) => ({
  xPos: 0,
  yPos: 0,
  setXpos: (value) => set({ xPos: value }),
  setYpos: (value) => set({ yPos: value }),
}));

export const useTodosState = create((set) => ({
  todo: "",
  setTodo: (value) => set({ inboxTodo: value }),
  todos: [],
  setTodos: (value) => set((state) => ({ todos: [...state.todos, value] })),
}));
