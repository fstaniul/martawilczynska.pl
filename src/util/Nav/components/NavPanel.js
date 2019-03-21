import React, { useMemo } from "react";
import styled from "styled-components";
import { injectIntl } from "react-intl";
import { NavLink } from "react-router-dom";
import { Motion, spring, presets } from "react-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colors, query } from "../../styles";
import { useLocale, localizePath } from "../../locale";
import { useNavState } from "../useNavState";
import IconButton from "../../../components/IconButton";
import LocaleSwitcher from "./LocaleSwitcher";

const Wrapper = styled.div`
  z-index: 10000000;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  min-height: 100vh;
  background: ${colors.blue};
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;

  ${query.md`
    width: 400px;
  `}
`;

const StyledLink = styled(NavLink)`
  color: ${colors.white} !important;
  padding: 0.8rem 0;
  margin: 5px 0;
  text-decoration: none;
  text-align: center;

  &.active {
    font-weight: 700;
  }

  &.active,
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const CloseButton = styled(IconButton)`
  position: absolute;
  top: 30px;
  right: 30px;

  color: ${colors.silver};
  transition: 150ms ease color;

  &:hover,
  &:active {
    color: ${colors.white};
  }
`;

const StyledLocaleSwitcher = styled(LocaleSwitcher)`
  position: absolute;
  top: 30px;
  left: 30px;
`;

const Panel = ({ intl: { formatMessage } }) => {
  const [locale] = useLocale();
  const routes = useMemo(
    () => ({
      about: localizePath(locale, "about"),
      treatments: localizePath(locale, "treatments"),
      testimonials: localizePath(locale, "testimonials"),
      staff: localizePath(locale, "staff"),
      directions: localizePath(locale, "directions"),
      contact: localizePath(locale, "contact")
    }),
    [locale]
  );

  const [open, setOpen] = useNavState();
  const closeNav = () => setOpen(false);

  return (
    <Motion
      defaultStyle={{ x: 100 }}
      style={{ x: spring(open ? 0 : 100, presets.noWobble) }}
    >
      {({ x }) => (
        <Wrapper style={{ transform: `translateX(${x}%)` }}>
          <CloseButton onClick={closeNav}>
            <FontAwesomeIcon icon="times" size="2x" />
          </CloseButton>
          <StyledLocaleSwitcher />
          <StyledLink to="/" exact onClick={closeNav}>
            {formatMessage({ id: "nav.home" })}
          </StyledLink>
          {Object.keys(routes).map((route, i) => (
            <StyledLink to={routes[route]} key={i} onClick={closeNav}>
              {formatMessage({ id: `nav.${route}` })}
            </StyledLink>
          ))}
        </Wrapper>
      )}
    </Motion>
  );
};

export default injectIntl(Panel);
