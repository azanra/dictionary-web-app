import {
  Dropdown,
  DropdownMenuItem,
  DropdownMenuItems,
  DropdownTrigger,
} from "./Dropdown";

import ArrowDown from "../../assets/svg/ArrowDown.svg?react";
import dictionaryUtils from "../utils/dictionaryUtils";

const FontDropdown = ({ setCurrentFont, currentFont }) => {
  const fonts = ["Sans Serif", "Serif", "Monospace"];
  return (
    <div className="flex flex-1 justify-end">
      <Dropdown>
        <DropdownTrigger>
          <div className="flex items-center border-r-1">
            <p className="font-bold">{currentFont}</p>
            <div className="mx-[16px]">
              <ArrowDown />
            </div>
          </div>
        </DropdownTrigger>
        <DropdownMenuItem>
          {fonts.map((font) => {
            return (
              <DropdownMenuItems
                key={font}
                onClick={() => setCurrentFont(font)}
              >
                <p
                  className={`${dictionaryUtils.getCurrentFont(
                    font
                  )} font-bold py-[8px] hover:text-(--purple)`}
                >
                  {font}
                </p>
              </DropdownMenuItems>
            );
          })}
        </DropdownMenuItem>
      </Dropdown>
    </div>
  );
};

export default FontDropdown;
