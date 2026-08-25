import { createContext, useContext, useState } from "react";
import type { IFontContext } from "../interfaces/fontInterface";

const FontContext = createContext<IFontContext | undefined>(undefined);

const FontProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentFont, setCurrentFont] = useState("Sans Serif");

  return (
    <FontContext value={{ currentFont, setCurrentFont }}>
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
