import React from 'react';
import styled from 'styled-components';
import Container, { TextWrapper, ImageWrapper } from '../components/CallToAction/Container';
import Title from '../components/CallToAction/Title';
import Attributes from './Attributes';
import CTAButton from '../components/CallToAction/CTAButton';
import LadyImage from '../components/CallToAction/LadyImage';
import ScrollDownIcon from '../../../components/ScrollDownIcon';
import { query } from '../../../util/styles';

const ScrollDownIconContainer = styled(ScrollDownIcon)`
  display: none;
  ${query.lg`
    display: block;
  `}
`;

const CallToAction = () => {
  return (
    <Container>
      <TextWrapper>
        <Title />
        <Attributes />
        <CTAButton />
        <ScrollDownIconContainer />
      </TextWrapper>
      <ImageWrapper>
        <LadyImage />
      </ImageWrapper>
    </Container>
  );
};

export default CallToAction;
