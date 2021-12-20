import { useState } from "react";

export const useProduct = (initialState: number = 0) => {
  const [count, setCount] = useState(initialState);

  const increaseBy = (value: number) =>
    setCount((prev) => Math.max(prev + value, 0));

  return { count, increaseBy };
};
