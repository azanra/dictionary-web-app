import { createContext, useContext, useRef, useState } from "react";
import { IsDarkContext } from "../hooks/IsDarkContext";
import useClickOutside from "../hooks/useClickOutside";

const DropdownShownContext = createContext(null);
const DropdownShownSetterContext = createContext(null);

export const Dropdown = ({ children }) => {
  const [isShown, setIsShown] = useState(false);
  const wrapper = useRef(null);
  useClickOutside(wrapper, () => {
    setIsShown(false);
  });

  return (
    <DropdownShownContext value={isShown}>
      <DropdownShownSetterContext value={setIsShown}>
        <div className="w-fit relative" ref={wrapper}>
          {children}
        </div>
      </DropdownShownSetterContext>
    </DropdownShownContext>
  );
};

export const DropdownTrigger = ({ children }) => {
  const isShown = useContext(DropdownShownContext);
  const setIsShown = useContext(DropdownShownSetterContext);

  return (
    <div className="cursor-pointer" onClick={() => setIsShown(!isShown)}>
      {children}
    </div>
  );
};

export const DropdownMenuItem = ({ children }) => {
  const isShown = useContext(DropdownShownContext);
  const isDark = useContext(IsDarkContext);

  if (isShown) {
    return (
      <div
        className={`absolute top-10 px-[32px] py-[8px] right-0 shadow-md rounded-xl z-1 ${
          isDark ? `shadow-purple-600 bg-[#1f1f1f]` : "bg-white"
        }`}
      >
        {children}
      </div>
    );
  }
};

export const DropdownMenuItems = ({ children, onClick }) => {
  const isShown = useContext(DropdownShownContext);
  const setIsShown = useContext(DropdownShownSetterContext);

  return (
    <div
      className="cursor-pointer"
      onClick={() => {
        setIsShown(!isShown);
        onClick();
      }}
    >
      {children}
    </div>
  );
};
