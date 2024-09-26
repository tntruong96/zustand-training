import useBearStore from "../../hooks/useBearStore";
import useFishStore from "../../hooks/useFishStore";
import useShareStore from "../../hooks/useShareStore";

const BearAndFishPage = () => {
  const { fish, addFish } = useFishStore();
  const { bears, addBear, eatFish } = useBearStore();
  const { updateBearnFish } = useShareStore();

  return (
    <div className="flex flex-col gap-16">
      <div className="w-full flex gap-8 justify-center text-4xl">
        <span>
          <b>Bear: {bears}</b>
        </span>
        <span>
          <b>Fish: {fish}</b>
        </span>
      </div>
      <div className="flex justify-between gap-4 w-full">
        <button onClick={addBear}>Add Bear</button>
        <button onClick={addFish}>Add Fish</button>
        <button onClick={updateBearnFish}>Add Fish & Bear</button>
        <button onClick={eatFish}>Eat Fish</button>
      </div>
    </div>
  );
};

export default BearAndFishPage;
