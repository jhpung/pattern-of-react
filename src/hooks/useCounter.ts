import { useState } from "react";

export function useCounter(initialCount: number) {
  const [count, setCount] = useState(initialCount);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return { count, handleIncrement, handleDecrement };
}
