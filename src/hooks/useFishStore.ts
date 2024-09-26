import { boundStore } from "../stores/boundStore";

const useFishStore = () => {
  const fish = boundStore().fishes;
  const addFish = boundStore().addFish;

  return { fish, addFish };
};

export default useFishStore;
