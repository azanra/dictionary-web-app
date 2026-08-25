import type React from "react";

export interface IFontContext {
  currentFont: string;
  setCurrentFont: React.Dispatch<React.SetStateAction<string>>;
}
