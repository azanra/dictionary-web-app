const Error = () => {
  return (
    <div className="px-[24px] py-[128px] flex flex-col gap-[20px]">
      <div className="flex flex-col gap-[48px]">
        <span className="text-[64px] text-center">😕</span>
        <h1 className="text-preset-3 text-center font-bold">
          No Definitions Found
        </h1>
      </div>
      <p className="text-preset-4 text-center text-(--neutral-500)">
        Sorry pal, we couldn't find Definitions for the word you were looking
        for. You can try the search again at later times or head to the web
        instead.
      </p>
    </div>
  );
};

export default Error;
