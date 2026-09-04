import type React from "react";
import Dictionary from "../../assets/images/logo.svg?react";
import FontDropdown from "./FontDropdown";
import Input from "./Input";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = ({
  keyword,
  setKeyword,
}: {
  keyword: string;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className="p-[24px] flex flex-col gap-[24px] md:gap-[56px] md:pt-[58px] md:pb-[48px]">
      <div className="flex items-center">
        <Dictionary className="w-[28px] h-[31.5px] md:w-[32px] md:h-[36px]" />
        <FontDropdown />
        <ThemeSwitcher />
      </div>

      <Input keyword={keyword} setKeyword={setKeyword} />
    </div>
  );
};

export default Header;
