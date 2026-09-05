import ArrowDown from "../../assets/images/icon-arrow-down.svg?react";
import Dropdown from "../../shared/components/Dropdown";
import { useFont } from "../../shared/hooks/useFont";
import useIsMobileScreen from "../../shared/hooks/useIsMobileScreen";
import { FONT_OPTIONS } from "../constants/fontConst";

import dictionaryUtils from "../utils/dictionaryUtils";

const FontDropdown = () => {
  const { currentFont, setCurrentFont } = useFont();
  const { isMobile } = useIsMobileScreen();

  return (
    <div className="flex flex-1 justify-end">
      <Dropdown>
        <Dropdown.Trigger>
          <div className="flex items-center gap-[16px] pr-[16px] md:pr-[24px] border-r border-(--neutral-200) dark:border-(--neutral-0) h-[24px] py-[4px]">
            <p className="text-preset-7-bold md:text-preset-4-bold">
              {currentFont}
            </p>
            <ArrowDown />
          </div>
        </Dropdown.Trigger>
        <Dropdown.MenuItem customClass="shadow-dropdown text-(--neutral-950)/10 dark:text-(--purple-500) md:pr-[69px]">
          {FONT_OPTIONS.map((font) => {
            const activeFont = dictionaryUtils.getFontValue(font.name);
            const isMono =
              font.name === "Mono"
                ? "text-preset-4-bold"
                : "text-preset-7-bold";

            return (
              <Dropdown.MenuItems
                key={font.name}
                onClick={() => setCurrentFont(font.name)}
              >
                <p
                  className={`${activeFont} ${isMobile ? isMono : ""} md:text-preset-4-bold w-[90px] text-(--neutral-800) dark:text-(--neutral-0) hover:text-(--purple-500) text-nowrap`}
                >
                  {font.name}
                </p>
              </Dropdown.MenuItems>
            );
          })}
        </Dropdown.MenuItem>
      </Dropdown>
    </div>
  );
};

export default FontDropdown;
