import Dictionary from "../../assets/svg/Dictionary.svg?react";
import FontDropdown from "./FontDropdown";
import Input from "./Input";
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
      <Input />
    </div>
  );
};

export default Header;
