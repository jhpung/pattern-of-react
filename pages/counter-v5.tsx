import { useState } from "react";
import { CounterV5 } from "../src/components/CounterV5/Counter";
import { Layout } from "../src/components/Layout/Layout";
import { useCounter } from "../src/hooks/useCounter";
import { defaultReducer, useCounterV2 } from "../src/hooks/useCounterV2";

const reducer = (count: number, action: any) => {
  switch (action.type) {
    case "decrement":
      return Math.max(0, count - 2);
    default:
      return defaultReducer(count, action);
  }
};

const CounterV5Page = () => {
  const { count, handleDecrement, handleIncrement } = useCounterV2(
    {
      initialCount: 10,
      max: 20,
    },
    reducer
  );

  return (
    <Layout>
      <CounterV5 value={count}>
        <CounterV5.Minus onClick={handleDecrement} />
        <CounterV5.Plus onClick={handleIncrement} />
        <CounterV5.Label>Counter</CounterV5.Label>
        <CounterV5.Count />
      </CounterV5>
    </Layout>
  );
};

export default CounterV5Page;
