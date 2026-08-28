import ArrowDown from "../../assets/images/icon-arrow-down.svg?react";
import Dropdown from "../../shared/components/Dropdown";
import { useFont } from "../../shared/hooks/useFont";
import { FONT_OPTIONS } from "../constants/fontConst";

import dictionaryUtils from "../utils/dictionaryUtils";

const FontDropdown = () => {
  const { currentFont, setCurrentFont } = useFont();

  return (
    <div className="flex flex-1 justify-end">
      <Dropdown>
        <Dropdown.Trigger>
          <div className="flex items-center border-r-1">
            <p className="font-bold">{currentFont}</p>
            <div className="mx-[16px]">
              <ArrowDown />
            </div>
          </div>
        </Dropdown.Trigger>
        <Dropdown.MenuItem>
          {FONT_OPTIONS.map((font) => {
            return (
              <Dropdown.MenuItems
                key={font}
                onClick={() => setCurrentFont(font)}
              >
                <p
                  className={`${dictionaryUtils.getCurrentFont(
                    font,
                  )} font-bold py-[8px] hover:text-(--purple)`}
                >
                  {font}
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
