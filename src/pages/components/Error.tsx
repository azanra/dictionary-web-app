const Error = () => {
  return (
    <div className="px-[16px] py-[64px]">
      <h1 className="text-6xl text-center mb-[64px]">😕</h1>
      <h2 className="text-lg text-center mb-[32px] font-bold">
        No Definitions Found
      </h2>
      <p className="text-lg text-center">
        Sorry pal, we couldn't find Definitions for the word you were looking
        for. You can try the search again at later times or head to the web
        instead.
      </p>
    </div>
  );
};

export default Error;
