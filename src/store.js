import create from "zustand";

export const useStore = create((set) => ({
  count: 1,
  name: "Ujjwal",
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => ({ count: state.count - 1 })),
  changeName: (newName) => set((state) => ({ ...state, name: newName })),
}));
