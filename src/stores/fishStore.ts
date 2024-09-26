import { StateCreator } from "zustand";
import { IFishSlice } from "../types/fish.types";
import { IBearSlice } from "../types/bear.types";

export const createFishSlice: StateCreator<
  IFishSlice & IBearSlice,
  [],
  [],
  IFishSlice
> = (set) => ({
  fishes: 0,
  addFish: () => set((state) => ({ fishes: state.fishes + 1 })),
});
