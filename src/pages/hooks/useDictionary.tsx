import { createContext, useContext } from "react";
import useGetDictionary from "./useGetDictionary";
import type { IDictionaryContext } from "../interfaces/dictionaryInterface";

const DictionaryContext = createContext<IDictionaryContext | undefined>(
  undefined,
);

const DictionaryProvider = ({ children }: { children: React.ReactNode }) => {
  const { data, error, isLoading, fetchDictionary } = useGetDictionary();

  return (
    <DictionaryContext value={{ data, error, isLoading, fetchDictionary }}>
      {children}
    </DictionaryContext>
  );
};

const useDictionary = () => {
  const context = useContext(DictionaryContext);
  if (!context) {
    throw new Error("useDictionary must be used within a DictionaryProvider");
  }

  return context;
};

export { DictionaryProvider, useDictionary };

 

