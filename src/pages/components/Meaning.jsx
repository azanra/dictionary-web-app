import { useContext } from "react";
import { IsDarkContext } from "../hooks/IsDarkContext";

const Meaning = ({ data, fetchDictionary }) => {
  const { meanings } = data;
  return (
    <div>
      {meanings.map((speech, index) => {
        return (
          <MeaningItem
            speech={speech}
            key={index}
            fetchDictionary={fetchDictionary}
          />
        );
      })}
    </div>
  );
};

const MeaningItem = ({ speech, fetchDictionary }) => {
  const { partOfSpeech, definitions, synonyms, antonyms } = speech;
  const isDark = useContext(IsDarkContext);
  return (
    <div>
      <div className="flex items-center mb-[32px]">
        <h1 className="font-bold text-2xl italic">{partOfSpeech}</h1>
        <hr
          className={`w-full ml-[16px] ${
            isDark ? `text-[#3a3a3a]` : "text-[#e9e9e9]"
          }`}
        />
      </div>
      <p className="text-[#757575] text-xl mb-[16px]">Meaning</p>
      <div className="mb-[32px] pl-[16px] marker:text-(--purple)">
        <ul className="list-disc">
          {definitions.map((definition, index) => {
            const { definition: def, example } = definition;
            return (
              <li key={index}>
                <p className={`text-lg ${!example && "mb-[16px]"}`}>{def}</p>
                {example && (
                  <p className="my-[12px] text-lg text-[#757575]">{example}</p>
                )}
              </li>
            );
          })}
        </ul>
      </div>
      <MeaningItems
        meaning={synonyms}
        meaningType="Synonyms"
        fetchDictionary={fetchDictionary}
      />
      <MeaningItems
        meaning={antonyms}
        meaningType="Antonyms"
        fetchDictionary={fetchDictionary}
      />
    </div>
  );
};

const MeaningItems = ({ meaning, meaningType, fetchDictionary }) => {
  return (
    <>
      {meaning && meaning.length > 0 && (
        <div className="flex items-center gap-[32px] mb-[32px]">
          <p className="text-[#757575] text-lg">{meaningType}</p>
          <div className="flex w-full flex-wrap gap-[8px] ">
            {meaning.map((mean, index) => {
              return (
                <button
                  onClick={() => fetchDictionary(mean)}
                  key={index}
                  className="text-(--purple) font-semibold cursor-pointer text-lg"
                >
                  {" "}
                  {mean}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Meaning;
