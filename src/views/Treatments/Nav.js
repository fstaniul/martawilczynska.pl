import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useLocale, localizePath } from "../../util/locale";
import TREATMENTS from "../../assets/treatments.json";
import { colors } from "../../util/styles";

const Wrapper = styled.div`
  flex: 0 0 300px;
  display: flex;
  width: 300px;
  flex-flow: column nowrap;
  align-items: flex-end;
`;

const NavigationLink = styled(NavLink)`
  color: ${colors.black};
  font-weight: 400;
  text-decoration: none;
  line-height: 3rem;

  &:hover,
  &.active {
    color: ${colors.blue};
    font-weight: 700;
  }
`;

const Nav = ({ toLeft }) => {
  const [locale] = useLocale();
  const treatmentsLocalePath = localizePath(locale, "treatments");
  const treatments = TREATMENTS[locale];

  return (
    <Wrapper style={{ alignItems: toLeft ? "flex-start" : "flex-end" }}>
      {treatments.map((treatment, index) => (
        <NavigationLink to={treatmentsLocalePath + "/" + index} key={index}>
          {treatment.name}
        </NavigationLink>
      ))}
    </Wrapper>
  );
};

export default Nav;
