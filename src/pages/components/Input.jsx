import IconSearch from "../../assets/svg/IconSearch.svg?react";

const Input = ({ keyword, setKeyword, fetchDictionary }) => {
  const handleSubmit = () => {
    fetchDictionary(keyword);
  };
  return (
    <div>
      <form action={handleSubmit}>
        <input
          type="text"
          name="keyword"
          id="keyword"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button type="submit">
          <IconSearch />
        </button>
      </form>
    </div>
  );
};

export default Input;
