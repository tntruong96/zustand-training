import { useStore } from "../../hooks/useStore";

type Props = {};

const Counter = (props: Props) => {
  //   const count = useStore((state) => state.count);
  //   const increase = useStore((state) => state.increase);
  //   const decrease = useStore((state) => state.decrease);
  const { count, increase, decrease } = useStore();
  console.log("rerender counter 1");

  return (
    <div>
      Number of Count: {count}
      <div>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
      </div>
    </div>
  );
};

export default Counter;
