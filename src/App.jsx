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
      {(isLoading && <p>Fetching the data...</p>) ||
        (error && <p>Error when fetching the data!</p>) ||
        (data && error === null && <Body data={data} />)}
    </div>
  );
}

export default App;
