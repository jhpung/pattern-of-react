import { useState } from "react";
import { CounterV3 } from "../src/components/CounterV3/Counter";
import { Layout } from "../src/components/Layout/Layout";

const CounterV3Page = () => {
  const [value, setValue] = useState(10);

  return (
    <Layout>
      <CounterV3 value={value} handleChange={(value) => setValue(value)}>
        <CounterV3.Minus />
        <CounterV3.Plus />
        <CounterV3.Label>Counter</CounterV3.Label>
        <CounterV3.Count />
      </CounterV3>
    </Layout>
  );
};

export default CounterV3Page;
