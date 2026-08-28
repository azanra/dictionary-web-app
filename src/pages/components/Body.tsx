import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import IconNewWindow from "../../assets/images/icon-new-window.svg?react";

import { useDictionary } from "../hooks/useDictionary";
import { useTheme } from "../../shared/hooks/useTheme";

const Body = () => {
  const { data } = useDictionary();
  const { isDark } = useTheme();

  const { sourceUrls } = data;

  return (
    <div>
      <Phonetic />
      <Meaning />
      <div className="mb-[10%]">
        <hr className={`${isDark ? "text-[#3a3a3a]" : "text-[#e9e9e9]"}`} />
        <div className="mt-[16px] flex gap-[16px] ">
          <p className="text-[#3a3a3a] underline text-sm">Source</p>
          <div>
            {sourceUrls.map((url, index) => {
              return (
                <div key={index} className="flex gap-[8px] items-baseline">
                  <a
                    href={url}
                    className="underline text-sm"
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
    </div>
  );
};

export default Body;
