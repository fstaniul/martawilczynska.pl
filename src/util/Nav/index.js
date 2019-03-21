import React, { useState } from "react";
import { NavContext } from "./NavContext";
import NavOpenButton from "./components/NavOpenButton";
import NavPanel from "./components/NavPanel";

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
