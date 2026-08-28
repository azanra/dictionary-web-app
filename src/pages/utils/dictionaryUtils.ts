import type { IFontContext } from "../../shared/interfaces/fontInterface";
import { FONT_CLASS } from "../constants/fontConst";

const dictionaryUtils = (function () {
  const getCurrentFont = (currentFont: IFontContext["currentFont"]) => {
    return FONT_CLASS[currentFont];
  };

  return { getCurrentFont };
})();

export default dictionaryUtils;
