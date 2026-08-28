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
    <div className="mb-[48px]">
      <div className="flex items-center py-[48px]">
        <div>
          <Dictionary />
        </div>
        <FontDropdown />
        <ThemeSwitcher />
      </div>
      <Input keyword={keyword} setKeyword={setKeyword} />
    </div>
  );
};

export default Header;
