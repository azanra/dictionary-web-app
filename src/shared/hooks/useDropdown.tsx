import React, { createContext, useContext, useState } from "react";
import type { IDropdownContext } from "../interfaces/dropdownInterface";

const DropdownContext = createContext<IDropdownContext | undefined>(undefined);

const DropdownProvider = ({ children }: { children: React.ReactNode }) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <DropdownContext value={{ isShown, setIsShown }}>
      {children}
    </DropdownContext>
  );
};

const useDropdown = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error("useDropdown must be used within DropdownProvider");
  }

  return context;
};

export { DropdownProvider, useDropdown };
