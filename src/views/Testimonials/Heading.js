import React from "react";
import { FormattedMessage } from "react-intl";
import SectionHeading from "../../components/Headings/SectionHeading";
import SubHeading from "../../components/Headings/SubHeading";

export default function Heading({ className }) {
  return (
    <SectionHeading color="white" center={true} className={className}>
      <FormattedMessage id="testimonials.header" />
      <SubHeading color="silver">
        <FormattedMessage id="testimonials.subheader" />
      </SubHeading>
    </SectionHeading>
  );
}
