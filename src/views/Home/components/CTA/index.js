import React from "react";
import styled from "styled-components";
import { colors, query } from "../../../styles";
import ClinicBackground from "../../UI/ClinicBackground";
import Text from "./Text";
import Attributes from "./Attributes";
import LadyImage from "./LadyImage";
import CTAButton from "./Button";

const Container = styled(ClinicBackground)`
  position: relative;
  color: ${colors.white};
  width: 100vw;
  max-width: 100%;
  padding: 100px 30px 0;
  border-bottom: 10px solid ${colors.blue};
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;

  ${query.md`
    align-items: flex-start;
    justify-content: flex-start;
    padding-left: 150px;
    padding-top: 250px;
  `}

  ${query.xl`
    justify-content: center;
    padding-top: 0;
    padding-left: 300px;
  `}
`;

const Wrapper = styled.div`
  z-index: 10;
  display: block;
  ${query.md`
    display: inline-block;
  `}
`;

const CTA = () => {
  return (
    <Container>
      <Wrapper>
        <Text />
        <Attributes />
        <CTAButton />
      </Wrapper>
      <LadyImage />
    </Container>
  );
};

export default CTA;
