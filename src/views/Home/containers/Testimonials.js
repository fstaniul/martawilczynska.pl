import React from "react";
import { FormattedMessage } from "react-intl";
import ErrorBlock, { ErrorTextButton } from "../../../components/ErrorBlock";
import MultiCarousel from "../../../components/Carousels/MultiCarousel";
import Flex from "../../../components/Containers/Flex";
import Testimony from "../../../components/Testimony";
import Loader from "../../../components/Loader";
import Heading from "../components/Testimonials/Heading";
import SeeMoreButton from "../components/Testimonials/SeeMoreButton";
import TestimonialsContainer from "../components/Testimonials/Container";
import { useTestimonials } from "../../../util/api/testimonials";

const Testimonials = () => {
  const { loaded, loading, load, testimonials, error } = useTestimonials();

  return (
    <TestimonialsContainer>
      <Heading />
      {loaded ? (
        <MultiCarousel data={testimonials.slice(0, 9)} elementWidth={500}>
          {props => <Testimony {...props} />}
        </MultiCarousel>
      ) : (
        error && (
          <ErrorBlock>
            <FormattedMessage
              id="testimonials.error"
              values={{
                here: (
                  <ErrorTextButton onClick={load}>
                    <FormattedMessage id="testimonials.error.here" />
                  </ErrorTextButton>
                )
              }}
            />
          </ErrorBlock>
        )
      )}
      {loading && <Loader />}
      <Flex align="center" justify="center">
        <SeeMoreButton hide="md" />
      </Flex>
    </TestimonialsContainer>
  );
};

export default Testimonials;
