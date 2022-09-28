import { Reducer, useReducer } from "react";

type ActionType = "increment" | "decrement";
interface Payload {
  max?: number;
}

interface Action {
  type: ActionType;
  payload: Payload;
}

export const defaultReducer: Reducer<number, Action> = (
  count: number,
  { type, payload }: { type: ActionType; payload: Payload }
) => {
  switch (type) {
    case "increment":
      if (payload.max) {
        return Math.min(count + 1, payload.max);
      }
      return count + 1;
    case "decrement":
      return count - 1;
  }
};

export function useCounterV2(
  { initialCount, max }: { initialCount: number; max: number },
  reducer = defaultReducer
) {
  const [count, dispatch] = useReducer<Reducer<number, Action>>(
    reducer,
    initialCount
  );

  const handleIncrement = () => {
    dispatch({ type: "increment", payload: { max } });
  };

  const handleDecrement = () => {
    dispatch({ type: "decrement", payload: {} });
  };

  return {
    count,
    handleIncrement,
    handleDecrement,
  };
}
