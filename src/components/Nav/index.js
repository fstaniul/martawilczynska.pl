import React, { useState, useRef, useLayoutEffect } from "react";
import { NavContext } from "./NavContext";
import NavOpenButton from "./components/NavOpenButton";
import NavPanel from "./components/NavPanel";
import NavHorizontalPanel from "./components/NavHorizontalPanel";
import useWindowWidth from "../../util/hooks/useWindowWidth";
import useScrollValue from "../../util/hooks/useScrollValue";
import NavWrapper from "./components/NavWrapper";

export const NavContextConsumer = NavContext.Consumer;

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [horizontal, setHorizontal] = useState(true);
  const windowWidth = useWindowWidth();
  const horizontalNavRef = useRef(null);
  const scroll = useScrollValue();

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
        <NavWrapper
          scrolled={scroll > 0}
          style={{ transform: `translateY(${horizontal ? "0%" : "-100%"})` }}
        >
          <NavHorizontalPanel wrapperRef={horizontalNavRef} />
        </NavWrapper>
        {!horizontal && (
          <>
            <NavWrapper scrolled={scroll > 0} justify="flex-end" padding={3}>
              <NavOpenButton />
            </NavWrapper>
            <NavPanel />
          </>
        )}
      </>
    </NavContext.Provider>
  );
};

export default Nav;
