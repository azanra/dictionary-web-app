import Dictionary from "../../assets/svg/Dictionary.svg?react";
import FontDropdown from "./FontDropdown";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  return (
    <div>
      <div>
        <div>
          <Dictionary />
        </div>
        <FontDropdown />
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Header;
