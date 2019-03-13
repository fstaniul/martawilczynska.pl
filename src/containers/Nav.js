import React, { createContext, useContext, useState } from "react";
import NavButton from "../components/Nav/Button";
import NavPanel from "../components/Nav/Panel";

const NavContext = createContext();

export const useNavState = () => {
  const { open, setOpen } = useContext(NavContext);
  return [open, setOpen];
};
export const NavContextConsumer = NavContext.Consumer;

const Nav = () => {
  const [open, setOpen] = useState(true);

  return (
    <NavContext.Provider value={{ setOpen, open }}>
      <>
        <NavButton />
        <NavPanel />
      </>
    </NavContext.Provider>
  );
};

export default Nav;
