import React from "react";
import styled from "styled-components";
import { query } from "../../../util/styles";
import DOCTOR_MARTA_IMAGE from "../../../assets/img/doctor_marta.png";

const ImageWrapper = styled.div`
  order: 1;
  flex: 0 1 400px;
  padding: 0 1.5rem 0 0;
  align-self: center;

  ${query.md`
    order: 0;
  `}
`;

const Image = styled.img`
  width: 100%;
  max-width: 400px;
  border-radius: 1rem;
`;

const DoctorMartaImage = () => {
  return (
    <ImageWrapper>
      <Image src={DOCTOR_MARTA_IMAGE} />
    </ImageWrapper>
  );
};

export default DoctorMartaImage;
