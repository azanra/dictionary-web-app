import { useContext, useState } from "react";
import IconSearch from "../../assets/svg/IconSearch.svg?react";
import { IsDarkContext } from "../hooks/IsDarkContext";

const Input = ({ keyword, setKeyword, fetchDictionary }) => {
  const [isValid, setIsValid] = useState(true);
  const isDark = useContext(IsDarkContext);

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
