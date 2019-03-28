import React from "react";
import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import useNavRoutes from "../useNavRoutes";
import { colors } from "../../../util/styles";
import useScrollValue from "../../../util/hooks/useScrollValue";

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: transparent;
  flex: 0 0 auto;
  transition: all 150ms linear;
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

export default function NavHorizontalPanel({ wrapperRef }) {
  const routes = useNavRoutes();
  const scroll = useScrollValue();

  return (
    <Wrapper ref={wrapperRef} scrolled={scroll > 0}>
      {Object.keys(routes).map((route, i) => (
        <NavItem key={route} to={routes[route]} exact={route === "/"}>
          <FormattedMessage id={`nav.${route}`} />
        </NavItem>
      ))}
    </Wrapper>
  );
}
