import { useState } from "react";
import { useTheme } from "../shared/hooks/useTheme";
import Header from "./components/Header";
import { useFont } from "../shared/hooks/useFont";
import dictionaryUtils from "./utils/dictionaryUtils";

import { DictionaryProvider, useDictionary } from "./hooks/useDictionary";
import Error from "./components/Error";
import Body from "./components/Body";

const Home = () => {
  const { isDark } = useTheme();
  const { currentFont } = useFont();

  const [keyword, setKeyword] = useState("keyboard");
  const { data, error, isLoading } = useDictionary();

  const isNotLoading = !data && error ? <Error /> : <Body />;

  return (
    <div
      className={`${
        isDark ? "bg-black text-white" : "bg-white text-black"
      } min-h-screen`}
    >
      <div
        className={`${dictionaryUtils.getCurrentFont(
          currentFont,
        )} flex justify-center`}
      >
        <div className="w-[40%]">
          <Header keyword={keyword} setKeyword={setKeyword} />
          {isLoading ? (
            <h1 className="font-bold text-xl">Fetching the data...</h1>
          ) : (
            isNotLoading
          )}
        </div>
      </div>
    </div>
  );
};

const HomeWrapper = () => {
  return (
    <DictionaryProvider>
      <Home />
    </DictionaryProvider>
  );
};

export default HomeWrapper;
