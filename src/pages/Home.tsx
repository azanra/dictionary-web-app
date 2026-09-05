import { useState } from "react";
import Header from "./components/Header";

import { DictionaryProvider, useDictionary } from "./hooks/useDictionary";
import Error from "./components/Error";
import Body from "./components/Body";
import { useFont } from "../shared/hooks/useFont";

const Home = () => {
  const [keyword, setKeyword] = useState("keyboard");
  const { data, error, isLoading } = useDictionary();
  const { fontFamily } = useFont();

  const isNotLoading = !data || error ? <Error /> : <Body />;

  return (
    <div
      className={`${fontFamily} bg-(--neutral-0) text-(--neutral-800) dark:bg-(--neutral-950) dark:text-(--neutral-0) flex justify-center items-center`}
    >
      <div className="min-h-screen md:max-w-[689px] xxl:max-w-[1440px]">
        <Header keyword={keyword} setKeyword={setKeyword} />
        {isLoading ? (
          <h1 className="font-bold text-xl">Fetching the data...</h1>
        ) : (
          isNotLoading
        )}
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
