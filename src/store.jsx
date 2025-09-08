import { create } from "zustand";
import uuid from "react-uuid";

export const useDarkMode = create((set) => ({
  darkMode: false,
  setDarkMode: (value) => set({ darkMode: value }),
}));

export const useLogin = create((set) => ({
  isLogged: false,
  setLogged: (value) => set({isLogged: value}),
}));

export const useTabsState = create((set) => ({
  isInboxActive: true,
  isWaitlistActive: false,
  isProjectsActive: false,
  isBucketlistActive: false,
  isNotesActive: false,
  isDoneActive: false,
  isSettingsActive: false,
  setInboxActive: (value) => set({ isInboxActive: value }),
  setWaitlistActive: (value) => set({ isWaitlistActive: value }),
  setProjectsActive: (value) => set({ isProjectsActive: value }),
  setBucketlistActive: (value) => set({ isBucketlistActive: value }),
  setNotesActive: (value) => set({ isNotesActive: value }),
  setDoneActive: (value) => set({ isDoneActive: value }),
  setSettingsActive: (value) => set({ isSettingsActive: value }),
}));

export const useTodosState = create((set) => ({
  todo: "",
  setTodo: (value) => set({ todo: value }),
  todos: [],
  setTodos: (value) => set((state) => ({ todos: [...state.todos, value] })),
  inboxTodo: { id: uuid(), text: "" },
  setInboxTodo: (value) => set({ inboxTodo: { id: uuid(), text: value } }),
  inboxTodos: [],
  setInboxTodos: (value) =>
    set((state) => ({ inboxTodos: [...state.inboxTodos, value] })),
  deleteInboxTodo: (value) =>
    set((state) => ({
      inboxTodos: state.inboxTodos.filter((todo) => todo.id !== value),
    })),
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
  deleteTodo: (value) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== value),
    })),
  inboxId: "",
  setInboxId: (value) => set({ inboxId: value }),
}));

export const useProjectsState = create((set) => ({
  projects: [],
  setProjects: (value) =>
    set((state) => ({ projects: [...state.projects, value] })),
  filterProjects: (value) => set(() => ({ projects: value })),
  updateProjects: () => set((state) => ({ projects: [...state.projects] })),
}));

export const useModalWindowState = create((set) => ({
  isModalActive: false,
  modalHeight: 256,
  setIsModalActive: (value) => set({ isModalActive: value }),
  setModalHeight: (value) => set({ modalHeight: value }),
}));

export const useClickCoords = create((set) => ({
  xPos: 0,
  yPos: 0,
  setXpos: (value) => set({ xPos: value }),
  setYpos: (value) => set({ yPos: value }),
}));
