const dictionaryUtils = (function () {
  const getCurrentFont = (currentFont) => {
    if (currentFont === "Sans Serif") {
      return "font-sans";
    } else if (currentFont === "Serif") {
      return "font-serif";
    } else {
      return "font-mono";
    }
  };

  return { getCurrentFont };
})();

export default dictionaryUtils;
