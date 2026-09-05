import { useState } from "react";
import IconSearch from "../../assets/images/icon-search.svg?react";

import { useDictionary } from "../hooks/useDictionary";
import { useFont } from "../../shared/hooks/useFont";
import useIsMobileScreen from "../../shared/hooks/useIsMobileScreen";

const Input = ({
  keyword,
  setKeyword,
}: {
  keyword: string;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [isValid, setIsValid] = useState(true);
  const { fetchDictionary } = useDictionary();
  const { currentFont } = useFont();
  const { isMobile } = useIsMobileScreen();

  const isMonoMobile = isMobile && currentFont === "Mono";

  const handleSubmit = () => {
    if (keyword.length > 0) {
      fetchDictionary(keyword);
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };
  return (
    <form action={handleSubmit}>
      <div className="relative">
        <input
          type="text"
          name="keyword"
          id="keyword"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className={`cursor-pointer text-preset-5-bold-mobile ${isMonoMobile ? "leading-[106%]" : ""} bg-(--neutral-100) dark:bg-(--neutral-900) w-full rounded-(--radius-16) px-[24.5px] py-[14.5px] md:px-[24px] md:py-[20px] focus:outline-1 ${isValid ? "focus:outline-(--purple-500)" : "focus:outline-(--red-500)"}`}
        />
        <button
          type="submit"
          className="absolute inset-y-0 right-6 cursor-pointer"
        >
          <IconSearch />
        </button>
      </div>
      {!isValid && (
        <p className="text-(--red-500) mt-[8px]">Whoops, can't be empty...</p>
      )}
    </form>
  );
};

export default Input;
