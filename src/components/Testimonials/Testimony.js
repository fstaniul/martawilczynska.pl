import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { colors, fluidTypography, media } from "../../styles";

const Wrapper = styled.div`
  padding: 1rem;
  color: ${colors.black};
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
  return (
    <div>
      {new Array(stars).fill(<StarIcon color={colors.blue} />)}
      {new Array(5 - stars).fill(<StarIcon color={colors.gray} />)}
    </div>
  );
};

const Testimony = ({ content, stars, name, date }) => {
  return (
    <Wrapper>
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
