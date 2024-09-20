import { useStore } from "../../hooks/useStore";

type Props = {};

const Counter = (props: Props) => {
  // const count2 = useStore((state) => state.count2);
  // const increase2 = useStore((state) => state.increase2);
  // const decrease2 = useStore((state) => state.decrease2);
  const { count2, increase2, decrease2 } = useStore();

  console.log("rerender counter 2");
  return (
    <div>
      Number of Count: {count2}
      <div>
        <button onClick={increase2}>Increase</button>
        <button onClick={decrease2}>Decrease</button>
      </div>
    </div>
  );
};

export default Counter;
