import React, { useState, useRef, useLayoutEffect } from "react";
import { NavContext } from "./NavContext";
import NavOpenButton from "./components/NavOpenButton";
import NavPanel from "./components/NavPanel";
import NavHorizontalPanel, {
  HorizontalNavContainer
} from "./components/NavHorizontalPanel";
import useWindowWidth from "../hooks/useWindowWidth";

export const NavContextConsumer = NavContext.Consumer;

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [horizontal, setHorizontal] = useState(true);
  const windowWidth = useWindowWidth();
  const horizontalNavRef = useRef(null);

  useLayoutEffect(() => {
    setHorizontal(
      windowWidth >
        (horizontalNavRef.current.offsetWidth ||
          horizontalNavRef.current.clientWidth)
    );
  }, [windowWidth, setHorizontal, horizontalNavRef]);

  return (
    <NavContext.Provider value={{ setOpen, open }}>
      <>
        <HorizontalNavContainer
          style={{ transform: `translateY(${horizontal ? "0%" : "-100%"})` }}
        >
          <NavHorizontalPanel wrapperRef={horizontalNavRef} />
        </HorizontalNavContainer>
        {!horizontal && (
          <>
            <NavOpenButton />
            <NavPanel />
          </>
        )}
      </>
    </NavContext.Provider>
  );
};

export default Nav;
