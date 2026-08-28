import { createContext, useContext, useState } from "react";
import type { IThemeContext } from "../interfaces/themeInterface";

const ThemeContext = createContext<IThemeContext | undefined>(undefined);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState(true);

  return <ThemeContext value={{ isDark, setIsDark }}>{children}</ThemeContext>;
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};

export { ThemeProvider, useTheme };
