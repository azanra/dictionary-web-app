import type { IFontContext } from "../../shared/interfaces/fontInterface";

const FONT_OPTIONS: IFontContext["currentFont"][] = [
  "Sans Serif",
  "Serif",
  "Monospace",
];

const FONT_CLASS = {
  ["Sans Serif"]: "font-sans",
  ["Serif"]: "font-serif",
  ["Monospace"]: "font-mono",
};

export { FONT_CLASS, FONT_OPTIONS };
