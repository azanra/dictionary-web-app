import Dictionary from "../../assets/images/logo.svg?react";
import FontDropdown from "./FontDropdown";
import Input from "./Input";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  return (
    <header className="px-[24px] pt-[24px] flex flex-col gap-[24px] md:gap-[56px] md:pt-[58px]">
      <div className="flex items-center">
        <Dictionary className="w-[28px] h-[31.5px] md:w-[32px] md:h-[36px]" />
        <FontDropdown />
        <ThemeSwitcher />
      </div>

      <Input />
    </header>
  );
};

export default Header;
