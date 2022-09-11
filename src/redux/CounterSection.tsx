import { useAppDispatch, useAppSelector } from "./hooks";
import { increment, reset } from "./reducer";

export default function CounterSection() {
  const count = useAppSelector((state) => state.count);
  const dispatch = useAppDispatch();

  const onCounterClick = () => {
    console.log("Redux: on counter clicked");
    dispatch(increment());
  };

  const onReset = () => {
    dispatch(reset());
  };

  return (
    <div>
      <p>Current count: {count}</p>
      <button onClick={onCounterClick}>Increase counter</button>
      <button onClick={onReset}>Rest</button>
    </div>
  );
}
