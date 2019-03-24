import React from "react";
import Container, { TextWrapper } from "../components/CallToAction/Container";
import Title from "../components/CallToAction/Title";
import Attributes from "./Attributes";
import CTAButton from "../components/CallToAction/CTAButton";
import LadyImage from "../components/CallToAction/LadyImage";

const CallToAction = () => {
  return (
    <Container>
      <TextWrapper>
        <Title />
        <Attributes />
        <CTAButton />
      </TextWrapper>
      <LadyImage />
    </Container>
  );
};

export default CallToAction;
