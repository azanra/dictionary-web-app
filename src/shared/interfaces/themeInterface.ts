export interface IThemeContext {
  theme: "light" | "dark";
  setTheme: (currentTheme: "light" | "dark") => void;
}
