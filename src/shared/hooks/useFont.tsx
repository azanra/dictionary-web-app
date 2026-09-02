import { createContext, useContext, useState } from "react";
import type { IFontContext } from "../interfaces/fontInterface";
import dictionaryUtils from "../../pages/utils/dictionaryUtils";

const FontContext = createContext<IFontContext | undefined>(undefined);

const FontProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentFont, setCurrentFont] =
    useState<IFontContext["currentFont"]>("Sans Serif");

  const fontFamily = dictionaryUtils.getFontValue(currentFont);

  return (
    <FontContext value={{ currentFont, fontFamily, setCurrentFont }}>
      {children}
    </FontContext>
  );
};

const useFont = () => {
  const context = useContext(FontContext);
  if (!context) {
    throw new Error("useFont must be used within a FontProvider");
  }

  return context;
};

export { FontProvider, useFont };
