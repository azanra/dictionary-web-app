import React, { useCallback } from "react";

import useClickOutside from "../hooks/useClickOutside";
import { DropdownProvider, useDropdown } from "../hooks/useDropdown";

const Dropdown = ({ children }: { children: React.ReactNode }) => {
  const { setIsShown } = useDropdown();

  const handleClick = useCallback(() => setIsShown(false), []);

  const refWrapper = useClickOutside<HTMLDivElement>(handleClick);

  return (
    <div className="w-fit relative" ref={refWrapper}>
      {children}
    </div>
  );
};

const Trigger = ({ children }: { children: React.ReactNode }) => {
  const { isShown, setIsShown } = useDropdown();

  return (
    <button className="cursor-pointer" onClick={() => setIsShown(!isShown)}>
      {children}
    </button>
  );
};

const MenuItem = ({
  children,
  customClass = "",
}: {
  children: React.ReactNode;
  customClass?: string;
}) => {
  const { isShown } = useDropdown();

  if (!isShown) return;

  return (
    <div
      className={`${customClass} absolute top-10 right-5 px-[16px] md:px-[24px] py-[24px] flex flex-col gap-[16px] rounded-(--radius-16) z-1 bg-(--neutral-0) dark:bg-(--neutral-900)`}
    >
      {children}
    </div>
  );
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
    <button
      className="cursor-pointer"
      onClick={() => {
        setIsShown(!isShown);
        onClick();
      }}
    >
      {children}
    </button>
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
