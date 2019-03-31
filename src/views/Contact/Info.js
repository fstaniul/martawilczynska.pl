import React from "react";
import styled from "styled-components";
import { colors, query } from "../../util/styles";
import arrowTop from "../../assets/img/arrow_top.png";
import arrowBottom from "../../assets/img/arrow_bottom.png";

const Wrapper = styled.div`
  position: relative;
  color: ${colors.white};
  flex: 1;
  text-align: left;
  padding: 1rem 0;

  ${query.md`
    text-align: ${({ textAlign }) => textAlign};
  `}
`;

Wrapper.defaultProps = {
  textAlign: "left"
};

const Name = styled.div`
  font-size: 3rem;
  line-height: 3.4rem;
  font-weight: 700;
`;

const Phone = styled.div`
  font-size: 3rem;
  line-height: 3.4rem;
`;

const EMail = styled.a`
  display: block;
  color: ${colors.silver};
  font-size: 2rem;
  text-decoration: none;

  &:hover {
    color: ${colors.white};
    text-decoration: none;
  }
`;

const ArrowWrapper = styled.div`
  position: absolute;
  font-family: "Indie Flower", cursive;
`;

const ArrowImage = styled.img`
  width: 100px;
  padding: 1rem 0.3rem;
`;

const Info = ({ name, phone, email, textAlign, arrowText, position }) => {
  const isTop = position === "top";

  return (
    <Wrapper textAlign={textAlign}>
      <Name>{name}</Name>
      <Phone>{phone}</Phone>
      <EMail href={"mailto:" + email}>{email}</EMail>
      <ArrowWrapper
        style={
          isTop ? { right: 70, bottom: "100%" } : { left: 70, top: "100%" }
        }
      >
        {isTop && arrowText}
        <ArrowImage
          src={isTop ? arrowTop : arrowBottom}
          alt=""
          style={{ verticalAlign: isTop ? "top" : "bottom" }}
        />
        {!isTop && arrowText}
      </ArrowWrapper>
    </Wrapper>
  );
};

export default Info;
