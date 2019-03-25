import styled from "styled-components";
import PropTypes from "prop-types";
import { colors } from "../../util/styles";

const SubHeading = styled.span`
  display: block;
  font-size: 2rem;
  font-weight: normal;
  color: ${({ color }) => colors[color]};
`;

SubHeading.propTypes = {
  color: PropTypes.oneOf(["gray", "silver"])
};

SubHeading.defaultProps = {
  color: "gray"
};

export default SubHeading;
