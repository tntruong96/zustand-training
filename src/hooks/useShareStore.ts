import { boundStore } from "../stores/boundStore";

const useShareStore = () => {
  const updateBearnFish = boundStore().addFishAndBear;
  return { updateBearnFish };
};

export default useShareStore;
