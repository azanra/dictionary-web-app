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
}) => {
  return (
    <div>
      <div>
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
