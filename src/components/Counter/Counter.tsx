import { ChangeEvent, useCallback, useEffect, useState } from "react";
import Button from "../Button";
import styles from "./Counter.module.scss";
import { FaPlus, FaMinus } from "react-icons/fa";
interface IProps {
  label: string;
  max: number;
  onChange: (value: number) => void;
}

const Counter: React.FC<IProps> = ({ label, max, onChange }) => {
  const [value, setValue] = useState(0);

  const add = useCallback(() => {
    setValue((prev) => Math.min(max, prev + 1));
  }, [max]);

  const subtract = useCallback(() => {
    setValue((prev) => prev - 1);
  }, []);

  useEffect(() => {
    onChange(value);
  }, [value, onChange]);

  return (
    <div className={styles.counter}>
      <Button onClick={subtract}>
        <FaMinus />
      </Button>
      <label className={styles.label}>{label}</label>
      <span className={styles.count}>{value}</span>
      <Button onClick={add}>
        <FaPlus />
      </Button>
    </div>
  );
};

export default Counter;
