import { useEffect, useRef } from "react";

const useClickOutside = <T extends HTMLElement>(callback: () => void) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const onClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }

      document.addEventListener("click", onClickOutside);

      return () => {
        document.removeEventListener("click", onClickOutside);
      };
    };
  }, [callback]);

  return ref;
};

export default useClickOutside;
