import React, { createContext, useContext, useState } from "react";
import NavOpenButton from "../components/Nav/OpenButton";
import NavPanel from "../components/Nav/Panel";

const NavContext = createContext();

export const useNavState = () => {
  const { open, setOpen } = useContext(NavContext);
  return [open, setOpen];
};
export const NavContextConsumer = NavContext.Consumer;

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <NavContext.Provider value={{ setOpen, open }}>
      <>
        <NavOpenButton />
        <NavPanel />
      </>
    </NavContext.Provider>
  );
};

export default Nav;
