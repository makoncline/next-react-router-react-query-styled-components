import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useTheme = () => {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const themes = ["light", "dark"];
  function toggleTheme() {
    const currentIndex = themes.findIndex((item) => theme === item);
    if (currentIndex >= 0 && currentIndex + 1 < themes.length) {
      setTheme(themes[currentIndex + 1]);
    } else {
      setTheme(themes[0]);
    }
  }
  useEffect(() => {
    document.body.className = "";
    if (theme) {
      document.body.classList.add(theme);
    }
  }, [theme]);

  return toggleTheme;
};
