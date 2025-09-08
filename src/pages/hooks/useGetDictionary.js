import { useState } from "react";

const useGetDictionary = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchDictionary = async (keyword) => {
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
      );
      const result = await response.json();
      const [firstResult] = result;
      console.log(result);
      setData(firstResult);
    } catch (error) {
      setError(error);
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
