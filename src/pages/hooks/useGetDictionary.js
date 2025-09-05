import { useEffect, useState } from "react";

const useGetDictionary = (keyword) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    const fetchDictionary = async () => {
      try {
        const response = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
        );
        const result = await response.json();
        if (!ignore) {
          setData(result);
          setIsLoading(false);
        }
      } catch (error) {
        setError(error);
      }
    };
    fetchDictionary();

    return () => {
      ignore = true;
    };
  }, [keyword]);

  return {
    data,
    error,
    isLoading,
  };
};

export default useGetDictionary;
