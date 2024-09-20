import { create } from "zustand";

interface BearState {
  count: number;
  count2: number;
  increase: () => void;
  decrease: () => void;
  increase2: () => void;
  decrease2: () => void;
}

const useStore = create<BearState>()((set) => ({
  count: 0,
  count2: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () =>
    set((state) => ({ count: state.count > 0 ? state.count - 1 : 0 })),
  increase2: () => set((state) => ({ count2: state.count2 + 1 })),
  decrease2: () =>
    set((state) => ({ count2: state.count2 > 0 ? state.count2 - 1 : 0 })),
}));

export { useStore };
