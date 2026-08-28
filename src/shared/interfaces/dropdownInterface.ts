import type React from "react";

export interface IDropdownContext {
  isShown: boolean;
  setIsShown: React.Dispatch<React.SetStateAction<boolean>>;
}
