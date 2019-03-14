import React from "react";
import styled from "styled-components";
import LADY_IMAGE from "../../../assets/img/lady_closed_eyes.png";
import LADY_IMAGE_MOBILE from "../../../assets/img/lady_closed_eyes_mobile.png";
import { useLocaleMessages } from "../../../locale";
import { query } from "../../../styles";

const StyledImage = styled.img`
  display: block;
  width: 100%;
  margin-top: 2rem;

  ${query.md`
    position: absolute;
    width: 50%;
    bottom: 0;
    right: 0;
  `}

  ${query.xl`
    right: 100px;
    width: 40%;
  `}
`;

const LadyImage = () => {
  const { "home.image-caption": alt } = useLocaleMessages();
  return (
    <StyledImage
      src={LADY_IMAGE}
      srcset={`${LADY_IMAGE_MOBILE} 400w, ${LADY_IMAGE} 900w`}
      sizes={`(max-width: 450px) 400px, 900px`}
      alt={alt}
    />
  );
};

export default LadyImage;
