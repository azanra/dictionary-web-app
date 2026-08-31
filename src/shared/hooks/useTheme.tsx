import { createContext, useContext, useEffect, useState } from "react";
import type { IThemeContext } from "../interfaces/themeInterface";

const ThemeContext = createContext<IThemeContext | undefined>(undefined);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<IThemeContext["theme"]>("light");

  const handleUpdateTheme = (currentTheme: IThemeContext["theme"]) => {
    localStorage.setItem("theme", currentTheme);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(currentTheme);
    setTheme(currentTheme);
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";

    const currentTheme = localTheme ?? systemTheme;

    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(currentTheme);
    setTheme(currentTheme);
  }, []);

  return (
    <ThemeContext value={{ theme, setTheme: handleUpdateTheme }}>
      {children}
    </ThemeContext>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};

export { ThemeProvider, useTheme };
