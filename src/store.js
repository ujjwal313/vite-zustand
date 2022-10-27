import create from "zustand";
import { persist, subscribeWithSelector } from "zustand/middleware";

export const useStore = create(
  persist(
    (set) => ({
      count: 5,
      name: "Ujjwal",
      inc: () => set((state) => ({ count: state.count + 1 })),
      dec: () => set((state) => ({ count: state.count - 1 })),
      changeName: (newName) => set((state) => ({ ...state, name: newName })),
    }),
    {
      name: "counter",
    }
  )
);

export const useDogStore = create(
  subscribeWithSelector(() => ({ paw: true, snout: true, fur: true }))
);
