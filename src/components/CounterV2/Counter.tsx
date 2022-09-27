import { createContext, useContext, useState } from "react";
import Button from "../Button";
import { FaPlus, FaMinus } from "react-icons/fa";
import styles from "./Counter.module.scss";

const CounterContext = createContext({
  count: 0,
  handleIncrement: () => {},
  handleDecrement: () => {},
});

interface LabelProps {
  children: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({ children }) => {
  const counter = useContext(CounterContext);

  if (!counter) {
    return <div>use with context...</div>;
  }

  return <label className={styles.label}>{children}</label>;
};

const Plus = () => {
  const counter = useContext(CounterContext);

  if (!counter) {
    return <div>use with context...</div>;
  }

  return (
    <Button onClick={counter.handleIncrement}>
      <FaPlus />
    </Button>
  );
};

const Minus = () => {
  const counter = useContext(CounterContext);

  if (!counter) {
    return <div>use with context...</div>;
  }

  return (
    <Button onClick={counter.handleDecrement}>
      <FaMinus />
    </Button>
  );
};

const Count = () => {
  const counter = useContext(CounterContext);

  if (!counter) {
    return <div>use with context...</div>;
  }

  return <span className={styles.count}>{counter.count}</span>;
};

interface CounterProps {
  children?: React.ReactNode;
  onChange?: (count: number) => void;
}

const CounterV2: React.FC<CounterProps> & {
  Label: React.FC<LabelProps>;
  Count: React.FC;
  Plus: React.FC;
  Minus: React.FC;
} = ({ children }) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <CounterContext.Provider
      value={{ count, handleIncrement, handleDecrement }}
    >
      <div className={styles.counter}>{children}</div>
    </CounterContext.Provider>
  );
};

CounterV2.Label = Label;
CounterV2.Count = Count;
CounterV2.Plus = Plus;
CounterV2.Minus = Minus;

export { CounterV2 };
