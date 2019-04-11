import React, { useState, useRef, useLayoutEffect } from 'react';
import styled from 'styled-components';
import { NavContext } from './NavContext';
import NavOpenButton from './components/NavOpenButton';
import NavPanel from './components/NavPanel';
import NavHorizontalPanel from './components/NavHorizontalPanel';
import useWindowWidth from '../../util/hooks/useWindowWidth';
import NavWrapper from './components/NavWrapper';
import useIsScrolled from '../../util/hooks/useIsScrolled';
import LocaleSwitcher from './components/LocaleSwitcher';

export const NavContextConsumer = NavContext.Consumer;

const LocaleSwitcherWrapper = styled.div`
  justify-self: flex-end;
`;

const Nav = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [withBackground, setWithBackground] = useState(false);
  const [horizontal, setHorizontal] = useState(true);
  const windowWidth = useWindowWidth();
  const horizontalNavRef = useRef(null);
  const scrolled = useIsScrolled();

  useLayoutEffect(() => {
    setHorizontal(windowWidth > (horizontalNavRef.current.offsetWidth || horizontalNavRef.current.clientWidth));
  }, [windowWidth, setHorizontal, horizontalNavRef]);

  return (
    <NavContext.Provider value={{ setOpen, open, setWithBackground }}>
      <>
        <NavWrapper
          withBackground={withBackground}
          scrolled={scrolled}
          style={{ transform: `translateY(${horizontal ? '0%' : '-100%'})` }}
        >
          <NavHorizontalPanel wrapperRef={horizontalNavRef} />
          <LocaleSwitcherWrapper>
            <LocaleSwitcher />
          </LocaleSwitcherWrapper>
        </NavWrapper>
        {!horizontal && (
          <>
            <NavWrapper withBackground={withBackground} scrolled={scrolled} justify="flex-end" padding={3}>
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

export { default as useNavSetBackground } from './useNavSetBackground';

export default Nav;
