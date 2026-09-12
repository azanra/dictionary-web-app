import IconPlay from "../../assets/images/icon-play.svg?react";
import { useFont } from "../../shared/hooks/useFont";
import { useDictionary } from "../hooks/useDictionary";
import type { IDictionary } from "../interfaces/dictionaryInterface";

const Phonetic = () => {
  const { currentFont } = useFont();
  const { data } = useDictionary();
  const { word, phonetic, phonetics } = data;

  const getPhonetics = (phonetics: IDictionary["phonetics"]) =>
    phonetics.find(({ audio }) => Boolean(audio));

  const playAudio = () => {
    const { audio: audioLink } = getPhonetics(phonetics) || {};
    if (!audioLink) return;

    const audio = new Audio(audioLink);
    audio.play();
  };

  const dynamicClass = {
    ["Sans Serif"]: {
      padding: "pt-[25px] pb-[28px] md:pb-[40px]",
      lineHeight: "leading-[130%]",
    },
    ["Serif"]: {
      padding: "pt-[23px] pb-[26px] md:pb-[32px]",
      lineHeight: "leading-[120%]",
    },
    ["Mono"]: {
      padding: "pt-[27px] pb-[30px] md:pb-[53px]",
      lineHeight: "leading-[106%] md:leading-[105%]",
    },
  };

  return (
    <div
      className={`flex justify-between items-center ${dynamicClass[currentFont].padding} md:pt-[48px]`}
    >
      <div className="flex flex-col gap-[8px]">
        <h1
          className={`text-preset-1-mobile font-bold md:text-preset-1 ${dynamicClass[currentFont].lineHeight}`}
        >
          {word}
        </h1>
        <p className="text-(--purple-500) text-preset-4 md:text-preset-2">
          {phonetic}
        </p>
      </div>
      <div>
        <button onClick={playAudio} className="cursor-pointer">
          <IconPlay className="w-[48px] md:w-[75px] group [&_circle]:group-hover:opacity-100 [&_path]:group-hover:fill-(--neutral-0)" />
        </button>
      </div>
    </div>
  );
};

export default Phonetic;
