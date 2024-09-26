import { create } from "zustand";
import { createFishSlice } from "./fishStore";
import { createBearSlice } from "./bearStore";
import { IBearSlice } from "../types/bear.types";
import { IFishSlice } from "../types/fish.types";
import { createShareSlice } from "./shareStore";
import { TShare } from "../types/share.types";

type TBoundStore = IBearSlice & IFishSlice & TShare;

export const boundStore = create<TBoundStore>((...a) => ({
  ...createFishSlice(...a),
  ...createBearSlice(...a),
  ...createShareSlice(...a),
}));
