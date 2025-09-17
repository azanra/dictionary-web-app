import { useState } from "react";
import "./App.css";
import Body from "./pages/components/Body";
import Header from "./pages/components/Header";
import useGetDictionary from "./pages/hooks/useGetDictionary";
import { IsDarkContext } from "./pages/hooks/IsDarkContext";
import dictionaryUtils from "./pages/utils/dictionaryUtils";

function App() {
  const [keyword, setKeyword] = useState("fire");
  const [currentFont, setCurrentFont] = useState("Sans Serif");
  const [isDark, setIsDark] = useState(true);
  const { data, error, isLoading, fetchDictionary } = useGetDictionary();

  return (
    <IsDarkContext value={isDark}>
      <div
        className={`${
          isDark ? "bg-black text-white" : "bg-white text-black"
        } min-h-screen`}
      >
        <div
          className={`${dictionaryUtils.getCurrentFont(
            currentFont
          )} flex justify-center`}
        >
          <div className="w-[40%]">
            <Header
              keyword={keyword}
              setKeyword={setKeyword}
              fetchDictionary={fetchDictionary}
              setCurrentFont={setCurrentFont}
              currentFont={currentFont}
              isDark={isDark}
              setIsDark={setIsDark}
            />
            {(isLoading && (
              <h1 className="font-bold text-xl">Fetching the data...</h1>
            )) ||
              (error && (
                <h1 className="font-bold text-xl">
                  Error when fetching the data!
                </h1>
              )) ||
              (data && error === null && (
                <Body data={data} fetchDictionary={fetchDictionary} />
              ))}
          </div>
        </div>
      </div>
    </IsDarkContext>
  );
}

export default App;
