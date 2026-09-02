import type { IFontContext } from "../../shared/interfaces/fontInterface";
import { FONT_OPTIONS } from "../constants/fontConst";

const dictionaryUtils = (() => {
  const getFontValue = (selectedFont: IFontContext["currentFont"]) =>
    FONT_OPTIONS.find((font) => font.name === selectedFont)?.value;

  return { getFontValue };
})();

export default dictionaryUtils;
