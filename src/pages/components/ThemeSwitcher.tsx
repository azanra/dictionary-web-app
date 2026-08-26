import IconMoon from "../../assets/svg/IconMoon.svg?react";
import { useTheme } from "../../shared/hooks/useTheme";

const ThemeSwitcher = () => {
  const { isDark, setIsDark } = useTheme();

  return (
    <div className="flex gap-[16px]">
      <label className="switch ml-[32px]">
        <input
          type="checkbox"
          checked={isDark}
          onChange={(e) => setIsDark(e.target.checked)}
        />
        <span className="slider"></span>
      </label>
      <IconMoon />
    </div>
  );
};

export default ThemeSwitcher;
