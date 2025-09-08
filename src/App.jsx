import { useState } from "react";
import "./App.css";
import Body from "./pages/components/Body";
import Header from "./pages/components/Header";
import useGetDictionary from "./pages/hooks/useGetDictionary";

function App() {
  const [keyword, setKeyword] = useState("fire");
  const { data, error, isLoading, fetchDictionary } = useGetDictionary();

  return (
    <div>
      <Header
        keyword={keyword}
        setKeyword={setKeyword}
        fetchDictionary={fetchDictionary}
      />
      {error === null && !isLoading && <Body data={data} />}
    </div>
  );
}

export default App;
