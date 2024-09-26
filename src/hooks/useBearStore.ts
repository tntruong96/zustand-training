import { boundStore } from "../stores/boundStore";

const useBearStore = () => {
  const bears = boundStore().bears;
  const addBear = boundStore().addBear;
  const eatFish = boundStore().eatFish;
  return { bears, addBear, eatFish };
};

export default useBearStore;
