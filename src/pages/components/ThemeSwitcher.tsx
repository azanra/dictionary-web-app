import IconMoon from "../../assets/images/icon-moon.svg?react";
import { useTheme } from "../../shared/hooks/useTheme";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="flex gap-[10px] md:gap-[20px]">
      <label className="switch ml-[16px] md:ml-[24px]">
        <input
          type="checkbox"
          checked={isDark}
          onChange={() => setTheme(isDark ? "light" : "dark")}
        />
        <span className="slider bg-(--neutral-500) dark:bg-(--purple-500)"></span>
      </label>
      <IconMoon className="*:dark:stroke-(--purple-500)" />
    </div>
  );
};

export default ThemeSwitcher;
