import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavSetBackground } from '../../components/Nav';
import containerBackground from '../../assets/img/testimonials_background.png';
import { query } from '../../util/styles';
import { useTestimonials } from '../../util/api/testimonials';
import Loader from '../../components/Loader';
import Heading from './Heading';
import TestimonialsList from './List';
import Error from './Error';
import MoreButton from './MoreButton';
import JumpToTop from '../../components/Buttons/JumpToTop';

const Container = styled.div`
  padding: 10rem 1.5rem 1.5rem;
  display: block;
  min-height: 600px;
  background: url(${containerBackground});
  background-position: top center;
  background-repeat: no-repeat;

  ${query.md`
    padding: 12rem 3rem 3rem;
  `}
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 5rem;
`;

export default function TestimonialsView() {
  const navSetBackground = useNavSetBackground();
  const { loaded, loading, error, testimonials, count, load } = useTestimonials();

  // disable nav background on this route
  useEffect(() => {
    navSetBackground(false);
  }, []);

  const allLoaded = testimonials.length === count;

  return (
    <Container>
      <StyledHeading />
      {loaded && <TestimonialsList items={testimonials} loading={loading} load={load} allLoaded={allLoaded} />}
      {!loaded && error && <Error load={load} />}
      {!loading && !error && !allLoaded && <MoreButton load={load} />}
      {loading && <Loader color={loaded ? 'white' : 'blue'} />}
      <JumpToTop />
    </Container>
  );
}
