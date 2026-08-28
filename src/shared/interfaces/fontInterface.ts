import type React from "react";

type Font = "Sans Serif" | "Serif" | "Monospace";

export interface IFontContext {
  currentFont: Font;
  setCurrentFont: React.Dispatch<React.SetStateAction<Font>>;
}
