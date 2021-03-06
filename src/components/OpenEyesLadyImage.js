import React from "react";
import styled from "styled-components";
import LADY_IMAGE_300 from "../assets/img/lady_open_eyes/300.png";
import LADY_IMAGE_646 from "../assets/img/lady_open_eyes/646.png";
import LADY_IMAGE_890 from "../assets/img/lady_open_eyes/890.png";
import { Right } from "./Containers/SideBySide";

const OpenEyesLadyImage = props => (
  <img
    alt=""
    {...props}
    src={LADY_IMAGE_890}
    srcSet={`${LADY_IMAGE_300} 300w, ${LADY_IMAGE_646} 646w, ${LADY_IMAGE_890} 890w`}
    sizes="(max-width: 890px) 100vw, 890px"
  />
);

export default OpenEyesLadyImage;

const LadyImageContainter = styled(Right)`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
`;

const LadyIamge = styled(OpenEyesLadyImage)`
  display: block;
  width: 100%;
  max-width: 860px;
`;

export const SideBySideLadyImage = () => (
  <LadyImageContainter>
    <LadyIamge />
  </LadyImageContainter>
);
