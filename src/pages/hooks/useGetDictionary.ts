import { useState } from "react";
import INITIAL_DATA from "../constants/dictionaryConts";

const useGetDictionary = () => {
  const [data, setData] = useState(INITIAL_DATA);
  const [error, setError] = useState<Error | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const fetchDictionary = async (keyword: string) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`,
      );
      const result = await response.json();
      const [firstResult] = result;
      console.log(result);
      setData(firstResult);
      setError(undefined);
    } catch (error) {
      setError(error as Error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    data,
    error,
    isLoading,
    fetchDictionary,
  };
};

export default useGetDictionary;
