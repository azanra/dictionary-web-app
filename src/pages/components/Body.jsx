import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import IconNewWindow from "../../assets/svg/IconNewWindow.svg?react";

const Body = ({ data, fetchDictionary }) => {
  const { sourceUrls } = data;
  return (
    <div>
      <Phonetic data={data} />
      <Meaning data={data} fetchDictionary={fetchDictionary} />
      <div>
        <p>Source</p>
        <div>
          {sourceUrls.map((url, index) => {
            return (
              <div key={index}>
                <a href={url}>{url}</a>
                <IconNewWindow />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Body;
