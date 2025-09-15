import { useContext } from "react";
import IconSearch from "../../assets/svg/IconSearch.svg?react";
import { IsDarkContext } from "../hooks/IsDarkContext";

const Input = ({ keyword, setKeyword, fetchDictionary }) => {
  const isDark = useContext(IsDarkContext);
  const handleSubmit = () => {
    fetchDictionary(keyword);
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
      </form>
    </div>
  );
};

export default Input;
