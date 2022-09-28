import {
  createContext,
  MouseEventHandler,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Button from "../Button";
import { FaPlus, FaMinus } from "react-icons/fa";
import styles from "./Counter.module.scss";

const CounterContext = createContext({
  count: 0,
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

interface PlusProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Plus: React.FC<PlusProps> = ({ onClick }) => {
  const counter = useContext(CounterContext);

  if (!counter) {
    return <div>use with context...</div>;
  }

  return (
    <Button onClick={onClick}>
      <FaPlus />
    </Button>
  );
};

interface MinusProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Minus: React.FC<MinusProps> = ({ onClick }) => {
  const counter = useContext(CounterContext);

  if (!counter) {
    return <div>use with context...</div>;
  }

  return (
    <Button onClick={onClick}>
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
  value?: number;

  handleChange?: (value: number) => void;
}

const CounterV5: React.FC<CounterProps> & {
  Label: typeof Label;
  Count: typeof Count;
  Plus: typeof Plus;
  Minus: typeof Minus;
} = ({ value = null, handleChange, children }) => {
  const firstMounted = useRef(true);

  // const mode: CounterMode = useMemo(
  //   () =>
  //     value !== null && !!handleChange
  //       ? CounterMode.CONTROLLED
  //       : CounterMode.UNCONTROLLED,
  //   [value, handleChange]
  // );

  useEffect(() => {
    if (!firstMounted.current) {
      handleChange?.(value!);
    }

    firstMounted.current = false;
  }, [handleChange, value]);

  return (
    <CounterContext.Provider value={{ count: value! }}>
      <div className={styles.counter}>{children}</div>
    </CounterContext.Provider>
  );
};

CounterV5.Label = Label;
CounterV5.Count = Count;
CounterV5.Plus = Plus;
CounterV5.Minus = Minus;

export { CounterV5 };
