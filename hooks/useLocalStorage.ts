import { useState, useEffect } from "react";

export const useLocalStorage = (key: string, initial: string) => {
  const item = window.localStorage.getItem(key);
  const [value, setValue] = useState(item || initial);

  // useEffect(() => {
  //   window.localStorage.setItem(key, value);
  // }, [value, key, initial]);

  return [value, setValue];
};
