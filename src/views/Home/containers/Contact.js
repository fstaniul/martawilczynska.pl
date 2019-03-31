import React from "react";
import styled from "styled-components";
import GradientBackground from "../../../components/Containers/GradientBackground";
import Separator from "../../../components/Separator";
import ContactForm from "../../../components/Contact/ContactForm";
import { SectionHeading, SubHeading } from "../../../components/Headings";
import SideBySide, {
  Left,
  Right
} from "../../../components/Containers/SideBySide";
import OpenEyesLadyImage from "../../../components/OpenEyesLadyImage";
import { FormattedMessage } from "react-intl";

const Container = styled(SideBySide)`
  padding-top: 4rem;
`;

const FormContainer = styled(Left)`
  padding: 10rem 1.5rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
`;

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

const Contact = () => {
  return (
    <GradientBackground>
      <Separator separator="wave" rotate />
      <Container>
        <FormContainer>
          <div>
            <SectionHeading center color="white">
              <FormattedMessage id="home.contact-form.heading" />
              <SubHeading color="silver">
                <FormattedMessage id="home.contact-form.subheading" />
              </SubHeading>
            </SectionHeading>
            <ContactForm />
          </div>
        </FormContainer>
        <LadyImageContainter>
          <LadyIamge />
        </LadyImageContainter>
      </Container>
    </GradientBackground>
  );
};

export default Contact;
