import Counter from "../src/components/Counter/Counter";
import { Layout } from "../src/components/Layout/Layout";

const CounterV1Page = () => {
  return (
    <Layout>
      <Counter
        max={10}
        label={"Counter"}
        onChange={(e) => console.log("good")}
      />
    </Layout>
  );
};

export default CounterV1Page;
