import IconMoon from "../../assets/images/icon-moon.svg?react";
import { useTheme } from "../../shared/hooks/useTheme";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="flex gap-[16px]">
      <label className="switch ml-[32px]">
        <input
          type="checkbox"
          checked={isDark}
          onChange={() => setTheme(isDark ? "light" : "dark")}
        />
        <span className="slider"></span>
      </label>
      <IconMoon />
    </div>
  );
};

export default ThemeSwitcher;
