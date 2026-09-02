import type React from "react";

type Font = "Sans Serif" | "Serif" | "Mono";
type FontValue =
  | "font-display-sans"
  | "font-display-serif"
  | "font-display-mono";

export interface IFontOptions {
  value: FontValue;
  name: Font;
}

export interface IFontContext {
  currentFont: Font;
  fontFamily: FontValue | undefined;
  setCurrentFont: React.Dispatch<React.SetStateAction<Font>>;
}
