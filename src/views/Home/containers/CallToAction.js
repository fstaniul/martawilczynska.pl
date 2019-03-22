import React from "react";
import Container from "../components/CallToAction/Container";
import Title from "../components/CallToAction/Title";
import Attributes from "./Attributes";
import CTAButton from "../components/CallToAction/CTAButton";

const CallToAction = () => {
  return (
    <Container>
      <Title />
      <Attributes />
      <CTAButton />
    </Container>
  );
};

export default CallToAction;
