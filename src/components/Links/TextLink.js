import styled from "styled-components";
import { Link } from "react-router-dom";
import { LocaleLink } from "../../util/locale";
import { colors } from "../../util/styles";

const StyledTextLink = Comp => styled(Comp)`
  display: inline-block;
  font-weight: bold;
  text-decoration: none;
  color: ${colors.blue};

  &:hover,
  &:focus,
  &:active {
    text-decoration: underline;
    color: ${colors.blue};
  }
`;

export const TextLink = StyledTextLink(Link);
export const LocaleTextLink = StyledTextLink(LocaleLink);
export const TextAnchorTag = StyledTextLink("a");

export default TextLink;
