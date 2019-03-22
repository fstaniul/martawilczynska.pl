import React from "react";
import Attribute, {
  AttributesWrapper
} from "../components/CallToAction/Attribute";

const Attributes = () => {
  return (
    <AttributesWrapper>
      <Attribute
        message="home.attr.patients.text"
        linkText="home.attr.patients.link"
        linkTo="testimonials"
        icon="user-injured"
      />
      <Attribute
        message="home.attr.doctor.text"
        linkText="home.attr.doctor.link"
        linkTo="about"
        icon="book-open"
      />
      <Attribute message="home.attr.clinic.text" icon="procedures" />
    </AttributesWrapper>
  );
};

export default Attributes;
