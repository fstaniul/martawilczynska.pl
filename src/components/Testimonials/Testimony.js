import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { colors, fluidTypography, media } from "../../styles";

const Wrapper = styled.div`
  padding: 1rem;
  color: ${colors.black};
  background: ${colors.silver};
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
`;

const StarIcon = styled(FontAwesomeIcon).attrs({
  icon: "star"
})`
  color: ${({ color }) => color};
`;

const Name = styled.div`
  ${fluidTypography(12, 20, media.sm, media.lg)}
`;

const DateDisplay = styled.div`
  ${fluidTypography(10, 14, media.sm, media.lg)}
`;

const Stars = ({ stars }) => {
  const renderedStars = new Array(5)
    .fill(true)
    .map((_, i) => (
      <StarIcon key={i} color={i < stars ? colors.blue : colors.gray} />
    ));

  return <div>{renderedStars}</div>;
};

const Testimony = ({ content, stars, name, date, style }) => {
  return (
    <Wrapper style={style}>
      <HeaderWrapper>
        <div>
          <Name>{name}</Name>
          <DateDisplay>{date}</DateDisplay>
        </div>
        <Stars stars={stars} />
      </HeaderWrapper>
      <p>{content}</p>
    </Wrapper>
  );
};

Testimony.propTypes = {
  content: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};

export default Testimony;
