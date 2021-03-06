import { useState } from "react";

export const useToggle = (initial: boolean) => {
  const [isToggled, setToggle] = useState(initial);
  const toggle = () => setToggle((prevState: boolean) => !prevState);
  // Rename output, multiple uses of hook
  // return [isToggled, setToggle, toggle];

  // Named properties, no order in return
  return { isToggled, setToggle, toggle };
};
