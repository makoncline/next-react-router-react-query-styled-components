import { useState, useEffect } from "react";
import Cookies from "js-cookie";

export const useCookies = ({ key }: {key: string}) => {
  const initial = Cookies.get(key);
  const [cookie, setStateCookie] = useState(initial);

  useEffect(() => {
    if (cookie){
      Cookies.set(key, cookie);
    }
  }, [cookie, key]);

  return [cookie, setStateCookie];
};
