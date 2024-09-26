import { StateCreator } from "zustand";
import { TShare } from "../types/share.types";
import { IBearSlice } from "../types/bear.types";
import { IFishSlice } from "../types/fish.types";

export const createShareSlice: StateCreator<
  TShare & IBearSlice & IFishSlice,
  [],
  [],
  TShare
> = (set) => ({
  addFishAndBear: () =>
    set((state) => ({
      bears: state.bears + 1,
      fishes: state.fishes + 1,
    })),
});
