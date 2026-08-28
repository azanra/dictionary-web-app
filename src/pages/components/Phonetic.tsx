import IconPlay from "../../assets/images/icon-play.svg?react";
import { useDictionary } from "../hooks/useDictionary";
import type { IDictionary } from "../interfaces/dictionaryInterface";

const Phonetic = () => {
  const { data } = useDictionary();
  const { word, phonetic, phonetics } = data;

  const getPhonetics = (phonetics: IDictionary["phonetics"]) => {
    const phoneticData = phonetics.find((phonetic) => {
      if (phonetic.audio) {
        return phonetic;
      }
    });
    return phoneticData;
  };

  const playAudio = () => {
    const { audio: audioLink } = getPhonetics(phonetics) || {};
    const audio = new Audio(audioLink);
    audio.play();
  };

  return (
    <div className="flex justify-between items-center mb-[32px]">
      <div>
        <h1 className="font-bold text-6xl mb-[8px]">{word}</h1>
        <p className="text-(--purple) font-semibold text-2xl">{phonetic}</p>
      </div>
      <div>
        <button onClick={playAudio} className="cursor-pointer">
          <IconPlay />
        </button>
      </div>
    </div>
  );
};

export default Phonetic;
