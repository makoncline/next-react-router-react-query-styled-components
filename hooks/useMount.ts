import { useEffect } from "react";

export const useMount = (func: Function) => {
  useEffect(() => {
    func();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
};

export const useUnmount = (func: Function) => {
  useEffect(() => {
    return () => {
      func();
    };
  });
};
