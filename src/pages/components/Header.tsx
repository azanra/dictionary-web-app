import type React from "react";
import Dictionary from "../../assets/svg/Dictionary.svg?react";
import FontDropdown from "./FontDropdown";
import Input from "./Input";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = ({
  keyword,
  setKeyword,
  fetchDictionary,
  setCurrentFont,
  currentFont,
  isDark,
  setIsDark,
}: {
  keyword: string;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  fetchDictionary: (keyword: string) => void;
  currentFont: string;
  setCurrentFont: React.Dispatch<React.SetStateAction<string>>;
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="mb-[48px]">
      <div className="flex items-center py-[48px]">
        <div>
          <Dictionary />
        </div>
        <FontDropdown
          setCurrentFont={setCurrentFont}
          currentFont={currentFont}
        />
        <ThemeSwitcher isDark={isDark} setIsDark={setIsDark} />
      </div>
      <Input
        keyword={keyword}
        setKeyword={setKeyword}
        fetchDictionary={fetchDictionary}
      />
    </div>
  );
};

export default Header;
