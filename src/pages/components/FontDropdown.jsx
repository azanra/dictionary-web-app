import {
  Dropdown,
  DropdownMenuItem,
  DropdownMenuItems,
  DropdownTrigger,
} from "./Dropdown";

import ArrowDown from "../../assets/svg/ArrowDown.svg?react";

const FontDropdown = ({ setCurrentFont, currentFont }) => {
  const fonts = ["Sans Serif", "Serif", "Monospace"];
  return (
    <>
      <Dropdown>
        <DropdownTrigger>
          <div>
            <p>{currentFont}</p>
            <ArrowDown />
          </div>
        </DropdownTrigger>
        <DropdownMenuItem>
          {fonts.map((font) => {
            return (
              <DropdownMenuItems
                key={font}
                onClick={() => setCurrentFont(font)}
              >
                {font}
              </DropdownMenuItems>
            );
          })}
        </DropdownMenuItem>
      </Dropdown>
    </>
  );
};

export default FontDropdown;
