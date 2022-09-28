import { useState } from "react";
import { CounterV3 } from "../src/components/CounterV3/Counter";
import { CounterV4 } from "../src/components/CounterV4/Counter";
import { Layout } from "../src/components/Layout/Layout";
import { useCounter } from "../src/hooks/useCounter";

const CounterV4Page = () => {
  const { count, handleDecrement, handleIncrement } = useCounter(10);

  return (
    <Layout>
      <CounterV4 value={count}>
        <CounterV4.Minus onClick={handleDecrement} />
        <CounterV4.Plus onClick={handleIncrement} />
        <CounterV4.Label>Counter</CounterV4.Label>
        <CounterV4.Count />
      </CounterV4>
    </Layout>
  );
};

export default CounterV4Page;
