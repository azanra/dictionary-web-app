import IconPlay from "../../assets/svg/IconPlay.svg?react";

const Phonetic = ({ data }) => {
  const { word, phonetic, phonetics } = data;

  const getPhonetics = (phonetics) => {
    const phoneticData = phonetics.find((phonetic) => {
      if (phonetic.audio) {
        return phonetic;
      }
    });
    return phoneticData;
  };

  const playAudio = () => {
    const { audio: audioLink } = getPhonetics(phonetics);
    const audio = new Audio(audioLink);
    audio.play();
  };

  return (
    <div>
      <div>
        <h1>{word}</h1>
        <p>{phonetic}</p>
      </div>
      <div>
        <button onClick={playAudio}>
          <IconPlay />
        </button>
      </div>
    </div>
  );
};

export default Phonetic;
