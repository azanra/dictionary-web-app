import IconMoon from "../../assets/svg/IconMoon.svg?react";

const ThemeSwitcher = () => {
  return (
    <div>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider"></span>
      </label>
      <IconMoon />
    </div>
  );
};

export default ThemeSwitcher;
