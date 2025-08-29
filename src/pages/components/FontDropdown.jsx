import {
  Dropdown,
  DropdownMenuItem,
  DropdownMenuItems,
  DropdownTrigger,
} from "./Dropdown";

import ArrowDown from "../../assets/svg/ArrowDown.svg?react";

const FontDropdown = () => {
  const fonts = ["Sans Serif", "Serif", "Monospace"];
  return (
    <>
      <Dropdown>
        <DropdownTrigger>
          <div>
            <p>Sans Serif</p>
            <ArrowDown />
          </div>
        </DropdownTrigger>
        <DropdownMenuItem>
          {fonts.map((font) => {
            return <DropdownMenuItems key={font}>{font}</DropdownMenuItems>;
          })}
        </DropdownMenuItem>
      </Dropdown>
    </>
  );
};

export default FontDropdown;
