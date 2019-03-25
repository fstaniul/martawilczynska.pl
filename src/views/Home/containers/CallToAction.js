import React from "react";
import Container, {
  TextWrapper,
  ImageWrapper
} from "../components/CallToAction/Container";
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
      <ImageWrapper>
        <LadyImage />
      </ImageWrapper>
    </Container>
  );
};

export default CallToAction;
