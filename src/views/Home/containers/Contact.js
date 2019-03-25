import React from "react";
import GradientBackground from "../../../components/Containers/GradientBackground";
import Separator from "../../../components/Separator";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <GradientBackground>
      <Separator separator="wave" rotate />
      <ContactForm />
    </GradientBackground>
  );
};

export default Contact;
