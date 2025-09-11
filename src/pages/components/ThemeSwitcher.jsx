import IconMoon from "../../assets/svg/IconMoon.svg?react";

const ThemeSwitcher = ({ isDark, setIsDark }) => {
  return (
    <div>
      <label className="switch">
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
