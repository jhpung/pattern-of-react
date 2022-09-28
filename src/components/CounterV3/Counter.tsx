import {
  createContext,
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
  value?: number;

  handleChange?: (value: number) => void;
}

enum CounterMode {
  CONTROLLED,
  UNCONTROLLED,
}

const CounterV3: React.FC<CounterProps> & {
  Label: React.FC<LabelProps>;
  Count: React.FC;
  Plus: React.FC;
  Minus: React.FC;
} = ({ value = null, handleChange, children }) => {
  const firstMounted = useRef(true);
  const [internalCount, setInternalCount] = useState(0);
  const mode: CounterMode =
    value !== null && !!handleChange
      ? CounterMode.CONTROLLED
      : CounterMode.UNCONTROLLED;

  // const mode: CounterMode = useMemo(
  //   () =>
  //     value !== null && !!handleChange
  //       ? CounterMode.CONTROLLED
  //       : CounterMode.UNCONTROLLED,
  //   [value, handleChange]
  // );

  useEffect(() => {
    if (!firstMounted.current && mode === CounterMode.UNCONTROLLED) {
      handleChange && handleChange(internalCount);
    }

    firstMounted.current = false;
  }, [internalCount, handleChange, mode]);

  const handleIncrement = () => {
    handleCountChange(count! + 1);
  };

  const handleDecrement = () => {
    handleCountChange(count! - 1);
  };

  const handleCountChange = (newValue: number) => {
    mode === CounterMode.CONTROLLED
      ? handleChange?.(newValue)
      : setInternalCount(newValue);
  };

  // const _count = useMemo(
  //   () => (mode === CounterMode.CONTROLLED ? value : count),
  //   []
  // );

  const count = mode === CounterMode.CONTROLLED ? value : internalCount;

  return (
    <CounterContext.Provider
      value={{ count: count!, handleIncrement, handleDecrement }}
    >
      <div className={styles.counter}>{children}</div>
    </CounterContext.Provider>
  );
};

CounterV3.Label = Label;
CounterV3.Count = Count;
CounterV3.Plus = Plus;
CounterV3.Minus = Minus;

export { CounterV3 };
