import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { colors } from "../../styles";

const Wrapper = styled.div`
  padding: 2rem 1rem;
`;

const Title = styled.h3`
  color: ${({ color }) => color};
`;

Title.propTypes = {
  color: PropTypes.string.isRequired
};

Title.defaultProps = {
  color: colors.blue
};

const Subtitle = styled.h6`
  color: ${colors.gray};
`;

const SectionHeader = ({ color, title, subtitle, className }) => {
  const renderedSubtitle =
    subtitle && (typeof subtitle === "function" ? subtitle() : subtitle);

  return (
    <Wrapper className={className}>
      <Title color={color}>{title}</Title>
      {subtitle && <Subtitle>{renderedSubtitle}</Subtitle>}
    </Wrapper>
  );
};

SectionHeader.propTypes = {
  color: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  subtitle: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.element
  ])
};

export default SectionHeader;
