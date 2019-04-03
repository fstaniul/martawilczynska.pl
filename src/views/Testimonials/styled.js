import styled from "styled-components";
import PropTypes from "prop-types";
import { query, colors } from "../../util/styles";
import TESTIMONIALS_BACKGROUND from "../../assets/img/testimonials_background.png";

export const Wrapper = styled.div`
  background-image: url(${TESTIMONIALS_BACKGROUND});
  background-repeat: no-repeat;
  background-position: top center;
  padding-top: 10rem;
  padding-bottom: 2rem;

  ${query.md`
    padding-top: 15rem;
  `}
`;

export const Row = styled.div``;

export const Container = styled.main`
  display: flex;
  flex-flow: row nowrap;
  max-width: ${({ maxContainerWidth }) => maxContainerWidth + 40}px;
  margin: 0 auto;
  padding: 2rem;

  & > ${Row} {
    flex: 1 ${({ rowWidth }) => rowWidth}px;
  }
`;

Container.defaultProps = {
  maxContainerWidth: 1200,
  rowWidth: 400
};

Container.propTypes = {
  maxContainerWidth: PropTypes.number,
  rowWidth: PropTypes.number
};

export const Element = styled.div`
  margin: 0 1rem 2rem;
`;

export const LoadMoreButton = styled.button`
  display: block;
  margin: 0 auto;
  border: none;
  border-radius: 1000px;
  background: ${colors.blue};
  background: linear-gradient(135deg, ${colors.blue}, ${colors.green});
  color: ${colors.white};

  &:hover,
  &:focus {
    color: ${colors.white};
  }

  &:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.4);
  }
`;
