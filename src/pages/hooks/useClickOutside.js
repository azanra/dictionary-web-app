import { useEffect } from "react";

const useClickOutside = (ref, onClickOutside) => {
  useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        onClickOutside();
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [ref, onClickOutside]);
};

export default useClickOutside;
