import { useDictionary } from "../hooks/useDictionary";
import type { IMeanings } from "../interfaces/dictionaryInterface";
import { useFont } from "../../shared/hooks/useFont";

const Meaning = () => {
  const { data } = useDictionary();
  const { meanings } = data;

  return (
    <div>
      {meanings.map((speech, index) => {
        return <MeaningItem speech={speech} key={index} />;
      })}
    </div>
  );
};

const MeaningItem = ({ speech }: { speech: IMeanings }) => {
  const { partOfSpeech, definitions, synonyms, antonyms } = speech;
  const { currentFont } = useFont();

  const dynamicClass = {
    ["Sans Serif"]: {
      speech: "leading-[122%] italic",
      meaning: "md:leading-[120%]",
      definitionContainer: "md:mb-[40px] xxl:mb-[64px]",
      def: "",
    },
    ["Serif"]: {
      speech: "leading-[127%] italic",
      meaning: "md:leading-[130%]",
      definitionContainer: "md:mb-[36px] xxl:mb-[60px]",
      def: "",
    },
    ["Mono"]: {
      speech: "leading-[133%] md:leading-[104%]",
      meaning: "leading-[106%] md:leading-[105%]",
      definitionContainer: "md:mb-[50px] xxl:mb-[47px]",
      def: "tracking-[-0.25px]",
    },
  };

  return (
    <section>
      <div className="flex items-center mb-[32px] md:mb-[40px] gap-[20px]">
        <h2
          className={`text-preset-4 font-bold md:text-preset-2 ${dynamicClass[currentFont].speech}`}
        >
          {partOfSpeech}
        </h2>
        <hr className="w-full text-(--neutral-200) dark:text-(--neutral-700)" />
      </div>
      <p
        className={`text-preset-5-mobile md:text-preset-3-regular ${dynamicClass[currentFont].meaning} mb-[24px]`}
      >
        Meaning
      </p>
      <div
        className={`mb-[24px] ${dynamicClass[currentFont].definitionContainer} pl-[25px] xxl:ml-[22px] marker:text-(--purple-500)`}
      >
        <ul className="list-disc flex flex-col gap-[12px]">
          {definitions.map((definition, index) => {
            const { definition: def, example } = definition;
            const textClass = `${dynamicClass[currentFont].def} text-preset-6-mobile md:text-preset-4`;

            return (
              <li key={index}>
                <p className={textClass}>{def}</p>
                {example && (
                  <p className={`mt-[12px] text-(--neutral-500) ${textClass}`}>
                    "{example}"
                  </p>
                )}
              </li>
            );
          })}
        </ul>
      </div>
      <MeaningItems meaning={synonyms} meaningType="Synonyms" />
      <MeaningItems meaning={antonyms} meaningType="Antonyms" />
    </section>
  );
};

const MeaningItems = ({
  meaning,
  meaningType,
}: {
  meaning: string[];
  meaningType: "Synonyms" | "Antonyms";
}) => {
  const { setKeyword, fetchDictionary } = useDictionary();
  const { currentFont } = useFont();

  const dynamicClass = {
    ["Sans Serif"]: {
      meaningType: "md:leading-[120%]",
    },
    ["Serif"]: {
      meaningType: "md:leading-[130%]",
    },
    ["Mono"]: {
      meaningType: "leading-[106%] md:leading-[105%]",
    },
  };

  const textClass = `text-preset-5-mobile ${dynamicClass[currentFont].meaningType}`;

  const handleClick = (mean: string) => {
    fetchDictionary(mean);
    setKeyword(mean);
  };

  return (
    <>
      {meaning && meaning.length > 0 && (
        <div className="flex items-center gap-[24px] mb-[32px] md:mb-[40px]">
          <p className={textClass}>{meaningType}</p>
          <div className="flex w-full flex-wrap gap-[8px] ">
            {meaning.map((mean, index) => {
              return (
                <button
                  onClick={() => handleClick(mean)}
                  key={index}
                  className={`text-(--purple-500) cursor-pointer ${textClass} font-bold hover:underline`}
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
