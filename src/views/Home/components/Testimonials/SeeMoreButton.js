import React from "react";
import { FormattedMessage } from "react-intl";
import { GradientButton } from "../../../../components/Buttons";
import { LocaleLink } from "../../../../util/locale";
import Display from "../../../../components/Containers/Display";

const SeeMoreButton = ({ show, hide }) => {
  return (
    <Display show={show} hide={hide}>
      <GradientButton as={LocaleLink} to="testimonials">
        <FormattedMessage id="home.testimonials.read-more-button" />
      </GradientButton>
    </Display>
  );
};

export default SeeMoreButton;
