import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import useNavRoutes from "../useNavRoutes";
import { colors } from "../../styles";

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  height: 10rem;
  background: transparent;
  flex: 0 0 auto;
`;

const NavItem = styled(NavLink)`
  flex: 0 0 auto;
  display: block;
  font-size: 1.5rem;
  font-weight: 300;
  color: ${colors.silver};
  margin: 0 1rem;
  text-decoration: none;

  &:hover,
  &.active {
    text-decoration: none;
    font-weight: 600;
    color: ${colors.white};
  }
`;

export const HorizontalNavContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transition: all 200ms linear;

  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  max-width: 100%;
  z-index: 1000000;
`;

export default function NavHorizontalPanel({ wrapperRef }) {
  const routes = useNavRoutes();

  return (
    <Wrapper ref={wrapperRef}>
      {Object.keys(routes).map((route, i) => (
        <NavItem key={route} to={routes[route]} exact={route === "/"}>
          <FormattedMessage id={`nav.${route}`} />
        </NavItem>
      ))}
    </Wrapper>
  );
}
