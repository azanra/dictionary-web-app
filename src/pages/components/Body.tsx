import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import IconNewWindow from "../../assets/images/icon-new-window.svg?react";

import { useDictionary } from "../hooks/useDictionary";
import { useFont } from "../../shared/hooks/useFont";

const Body = () => {
  const { data } = useDictionary();
  const { currentFont } = useFont();

  const { sourceUrls } = data;

  const dynamicClass = {
    ["Sans Serif"]: {
      sourceContainer: "mb-[66px] md:mb-[105px] xxl:mb-[113px]",
      source: "leading-[130%]",
    },
    ["Serif"]: {
      sourceContainer: "mb-[62px] md:mb-[102px] xxl:mb-[110px]",
      source: "leading-[120%]",
    },
    ["Mono"]: {
      sourceContainer: "mb-[72px] md:mb-[114px] xxl:mb-[122px]",
      source: "leading-[107%]",
    },
  };

  return (
    <main className="px-[24px] md:px-[40px]">
      <Phonetic />
      <Meaning />
      <div
        className={`${dynamicClass[currentFont].sourceContainer} flex flex-col gap-[32px] md:gap-[20px]`}
      >
        <hr className="text-(--neutral-200) dark:text-(--neutral-700)" />
        <div className="flex flex-col gap-[8px] md:flex-row md:gap-[20px] md:items-baseline">
          <p
            className={`text-(--neutral-500) underline text-preset-7 ${dynamicClass[currentFont].source}`}
          >
            Source
          </p>
          <div>
            {sourceUrls.map((url, index) => {
              return (
                <div key={index} className="flex gap-[8px] items-baseline">
                  <a
                    href={url}
                    className={`underline text-preset-7 ${dynamicClass[currentFont].source}`}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {url}
                  </a>
                  <IconNewWindow />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Body;
