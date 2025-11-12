import { useState } from "react";

export const useCounter = () => {
  const [counter, setCounter] = useState(1);
  const aumentCounter = () => {
    setCounter((c) => c + 1);
  };
  const decrementCounter = () => {
    if (counter > 1) {
      setCounter((c) => c - 1);
    }
  };
  const equalCounter = () => {
    setCounter(1);
  };
  return { counter, aumentCounter, decrementCounter, equalCounter };
};
