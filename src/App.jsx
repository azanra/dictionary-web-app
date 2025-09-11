import { useState } from "react";
import "./App.css";
import Body from "./pages/components/Body";
import Header from "./pages/components/Header";
import useGetDictionary from "./pages/hooks/useGetDictionary";
import { IsDarkContext } from "./pages/hooks/IsDarkContext";

function App() {
  const [keyword, setKeyword] = useState("fire");
  const [currentFont, setCurrentFont] = useState("Sans Serif");
  const [isDark, setIsDark] = useState(true);
  const { data, error, isLoading, fetchDictionary } = useGetDictionary();

  const getCurrentFont = () => {
    if (currentFont === "Sans Serif") {
      return "font-sans";
    } else if (currentFont === "Serif") {
      return "font-serif";
    } else {
      return "font-mono";
    }
  };

  return (
    <IsDarkContext value={isDark}>
      <div className={getCurrentFont()}>
        <Header
          keyword={keyword}
          setKeyword={setKeyword}
          fetchDictionary={fetchDictionary}
          setCurrentFont={setCurrentFont}
          currentFont={currentFont}
          isDark={isDark}
          setIsDark={setIsDark}
        />
        {(isLoading && <p>Fetching the data...</p>) ||
          (error && <p>Error when fetching the data!</p>) ||
          (data && error === null && <Body data={data} />)}
      </div>
    </IsDarkContext>
  );
}

export default App;
