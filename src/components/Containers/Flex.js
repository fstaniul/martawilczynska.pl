import styled from "styled-components";
import PropTypes from "prop-types";

const Flex = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
`;

Flex.propTypes = {
  direction: PropTypes.oneOf([
    "row",
    "column",
    "row-reverse",
    "column-reverse"
  ]),
  justify: PropTypes.oneOf([
    "center",
    "streach",
    "flex-start",
    "flex-end",
    "space-between",
    "space-around"
  ]),
  align: PropTypes.oneOf([
    "center",
    "streach",
    "flex-start",
    "flex-end",
    "space-between",
    "space-around"
  ])
};

Flex.defaultProps = {
  direction: "row",
  justify: "flex-start",
  align: "streach"
};

export default Flex;
