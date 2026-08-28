import { useState } from "react";
import IconSearch from "../../assets/images/icon-search.svg?react";

import { useDictionary } from "../hooks/useDictionary";
import { useTheme } from "../../shared/hooks/useTheme";

const Input = ({
  keyword,
  setKeyword,
}: {
  keyword: string;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [isValid, setIsValid] = useState(true);
  const { fetchDictionary } = useDictionary();
  const isDark = useTheme();

  const handleSubmit = () => {
    if (keyword.length > 0) {
      fetchDictionary(keyword);
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };
  return (
    <div>
      <form action={handleSubmit}>
        <div className="flex relative">
          <input
            type="text"
            name="keyword"
            id="keyword"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className={`${
              isDark ? "bg-[#1f1f1f]" : "bg-[#f4f4f4]"
            } flex-1 flex rounded-xl p-[16px] font-bold border-2 border-transparent focus:border-(--purple) focus:outline-none`}
          />
          <button
            type="submit"
            className="absolute right-5 inset-y-0 cursor-pointer"
          >
            <IconSearch />
          </button>
        </div>
        {!isValid && (
          <p className="text-red-500 ml-[8px] mt-[8px]">
            Whoops, can't be empty...
          </p>
        )}
      </form>
    </div>
  );
};

export default Input;
