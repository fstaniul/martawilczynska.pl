import React from "react";
import styled from "styled-components";
import { colors } from "../../util/styles";

const StyledSubHeading = styled.span`
  display: block;
  font-size: 2rem;
  font-weight: normal;
  color: ${colors.gray};
`;

const SubHeading = ({ children }) => (
  <>
    <StyledSubHeading>{children}</StyledSubHeading>
  </>
);

export default SubHeading;
