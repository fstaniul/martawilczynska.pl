import React, { useState, useRef, useLayoutEffect } from "react";
import { NavContext } from "./NavContext";
import NavOpenButton from "./components/NavOpenButton";
import NavPanel from "./components/NavPanel";
import NavHorizontalPanel from "./components/NavHorizontalPanel";
import useWindowWidth from "../../util/hooks/useWindowWidth";
import NavWrapper from "./components/NavWrapper";
import useIsScrolled from "../../util/hooks/useIsScrolled";

export const NavContextConsumer = NavContext.Consumer;

const Nav = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [withBackground, setWithBackground] = useState(false);
  const [horizontal, setHorizontal] = useState(true);
  const windowWidth = useWindowWidth();
  const horizontalNavRef = useRef(null);
  const scrolled = useIsScrolled();

  useLayoutEffect(() => {
    setHorizontal(
      windowWidth >
        (horizontalNavRef.current.offsetWidth ||
          horizontalNavRef.current.clientWidth)
    );
  }, [windowWidth, setHorizontal, horizontalNavRef]);

  return (
    <NavContext.Provider value={{ setOpen, open, setWithBackground }}>
      <>
        <NavWrapper
          withBackground={withBackground}
          scrolled={scrolled}
          style={{ transform: `translateY(${horizontal ? "0%" : "-100%"})` }}
        >
          <NavHorizontalPanel wrapperRef={horizontalNavRef} />
        </NavWrapper>
        {!horizontal && (
          <>
            <NavWrapper
              withBackground={withBackground}
              scrolled={scrolled}
              justify="flex-end"
              padding={3}
            >
              <NavOpenButton />
            </NavWrapper>
            <NavPanel />
          </>
        )}
        {children}
      </>
    </NavContext.Provider>
  );
};

export default Nav;
