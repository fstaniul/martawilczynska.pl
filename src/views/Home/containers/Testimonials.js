import React from 'react';
import Flex from '../../../components/Containers/Flex';
import Heading from '../components/Testimonials/Heading';
import SeeMoreButton from '../components/Testimonials/SeeMoreButton';
import TestimonialsContainer from '../components/Testimonials/Container';
import TestimonialsDisplay from '../components/Testimonials/TestimonialsDisplay';

const Testimonials = () => {
  return (
    <TestimonialsContainer>
      <Heading />
      <TestimonialsDisplay />
      <Flex align="center" justify="center">
        <SeeMoreButton hide="md" />
      </Flex>
    </TestimonialsContainer>
  );
};

export default Testimonials;
