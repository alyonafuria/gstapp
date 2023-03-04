import { create } from "zustand";

export const useTabsState = create((set) => ({
  isInboxActive: true,
  isWaitlistActive: false,
  isProjectsActive: false,
  isBucketlistActive: false,
  isNotesActive: false,
  isDoneActive: false,
  setInboxActive: (value) => set({ isInboxActive: value }),
  setWaitlistActive: (value) => set({ isWaitlistActive: value }),
  setProjectsActive: (value) => set({ isProjectsActive: value }),
  setBucketlistActive: (value) => set({ isBucketlistActive: value }),
  setNotesActive: (value) => set({ isNotesActive: value }),
  setDoneActive: (value) => set({ isDoneActive: value }),
}));

export const useTodosState = create((set) => ({
  todo: "",
  setTodo: (value) => set({ inboxTodo: value }),
  todos: [],
  setTodos: (value) => set((state) => ({ todos: [...state.todos, value] })),
  inboxTodo: "",
  setInboxTodo: (value) => set({ inboxTodo: value }),
  inboxTodos: [],
  setInboxTodos: (value) =>
    set((state) => ({ inboxTodos: [...state.inboxTodos, value] })),
  inboxIndex: 0,
  setInboxIndex: (value) => set({ inboxIndex: value }),
  waitlistTodos: [],
  setWaitlistTodos: (value) =>
    set((state) => ({ waitlistTodos: [...state.waitlistTodos, value] })),
  projectsTodos: [],
  setProjectsTodos: (value) =>
    set((state) => ({ projectsTodos: [...state.projectsTodos, value] })),
  bucketlistTodos: [],
  setBucketlistTodos: (value) =>
    set((state) => ({ bucketlistTodos: [...state.bucketlistTodos, value] })),
  notesTodos: [],
  setNotesTodos: (value) =>
    set((state) => ({ notesTodos: [...state.notesTodos, value] })),
  doneTodos: [],
  setDoneTodos: (value) =>
    set((state) => ({ doneTodos: [...state.doneTodos, value] })),
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
