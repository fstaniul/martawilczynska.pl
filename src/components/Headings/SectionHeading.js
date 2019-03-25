import styled from "styled-components";
import PropTypes from "prop-types";
import { colors, query } from "../../util/styles";

const SectionHeading = styled.h2`
  color: ${({ color }) => colors[color]};
  font-weight: 900;
  text-align: center;

  ${query.md`
    text-align: left;
  `}
`;

SectionHeading.propTypes = {
  color: PropTypes.oneOf(["white", "blue"])
};

SectionHeading.defaultProps = {
  color: "blue"
};

export default SectionHeading;
