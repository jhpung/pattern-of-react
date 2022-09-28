import { CounterV2 } from "../src/components/CounterV2/Counter";
import { Layout } from "../src/components/Layout/Layout";

const CounterV2Page = () => {
  return (
    <Layout>
      <CounterV2 onChange={(value) => console.log(value)}>
        <CounterV2.Minus />
        <CounterV2.Plus />
        <CounterV2.Label>Counter</CounterV2.Label>
        <CounterV2.Count />
      </CounterV2>
    </Layout>
  );
};

export default CounterV2Page;
