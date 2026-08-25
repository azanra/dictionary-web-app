import React from "react";

import useClickOutside from "../hooks/useClickOutside";
import { DropdownProvider, useDropdown } from "../hooks/useDropdown";
import { useTheme } from "../hooks/useTheme";

const Dropdown = ({ children }: { children: React.ReactNode }) => {
  const { setIsShown } = useDropdown();

  const refWrapper = useClickOutside<HTMLDivElement>(() => setIsShown(false));

  return (
    <div className="w-fit relative" ref={refWrapper}>
      {children}
    </div>
  );
};

const Trigger = ({ children }: { children: React.ReactNode }) => {
  const { isShown, setIsShown } = useDropdown();

  return (
    <div className="cursor-pointer" onClick={() => setIsShown(!isShown)}>
      {children}
    </div>
  );
};

const MenuItem = ({ children }: { children: React.ReactNode }) => {
  const { isShown } = useDropdown();
  const { isDark } = useTheme();

  if (isShown) {
    return (
      <div
        className={`absolute top-10 px-[32px] py-[8px] right-0 shadow-md rounded-xl z-1 ${
          isDark ? `shadow-purple-600 bg-[#1f1f1f]` : "bg-white"
        }`}
      >
        {children}
      </div>
    );
  }
};

const MenuItems = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) => {
  const { isShown, setIsShown } = useDropdown();

  return (
    <div
      className="cursor-pointer"
      onClick={() => {
        setIsShown(!isShown);
        onClick();
      }}
    >
      {children}
    </div>
  );
};

const DropdownWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <DropdownProvider>
      <Dropdown>{children}</Dropdown>
    </DropdownProvider>
  );
};

DropdownWrapper.Trigger = Trigger;
DropdownWrapper.MenuItem = MenuItem;
DropdownWrapper.MenuItems = MenuItems;

export default DropdownWrapper;
