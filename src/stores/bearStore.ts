import { StateCreator } from "zustand";
import { IBearSlice } from "../types/bear.types";
import { IFishSlice } from "../types/fish.types";

export const createBearSlice: StateCreator<
  IBearSlice & IFishSlice,
  [],
  [],
  IBearSlice
> = (set) => ({
  bears: 0,
  addBear: () => set((state) => ({ bears: state.bears + 1 })),
  eatFish: () => set((state) => ({ fishes: state.fishes - 1 })),
});
