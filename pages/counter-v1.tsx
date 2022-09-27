import Counter from "../src/components/Counter/Counter";

const CounterV1Page = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Counter
        max={10}
        label={"Counter"}
        onChange={(e) => console.log("good")}
      />
    </div>
  );
};

export default CounterV1Page;
