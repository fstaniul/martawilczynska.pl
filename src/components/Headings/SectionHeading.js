import styled from "styled-components";
import { colors, query } from "../../util/styles";

const SectionHeading = styled.h2`
  color: ${colors.blue};
  font-weight: 900;
  text-align: center;

  ${query.md`
    text-align: left;
  `}
`;

export default SectionHeading;
