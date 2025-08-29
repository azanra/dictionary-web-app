import { createContext, useContext, useState } from "react";

const DropdownShownContext = createContext(null);
const DropdownShownSetterContext = createContext(null);

export const Dropdown = ({ children }) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <DropdownShownContext value={isShown}>
      <DropdownShownSetterContext value={setIsShown}>
        <div>{children}</div>
      </DropdownShownSetterContext>
    </DropdownShownContext>
  );
};

export const DropdownTrigger = ({ children }) => {
  const isShown = useContext(DropdownShownContext);
  const setIsShown = useContext(DropdownShownSetterContext);

  return <div onClick={() => setIsShown(!isShown)}>{children}</div>;
};

export const DropdownMenuItem = ({ children }) => {
  const isShown = useContext(DropdownShownContext);

  if (isShown) {
    return <div>{children}</div>;
  }
};

export const DropdownMenuItems = ({ children, onClick }) => {
  return <div onClick={onClick}>{children}</div>;
};
