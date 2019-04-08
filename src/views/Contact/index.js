import React, { useEffect } from 'react';
import styled from 'styled-components';
import { query } from '../../util/styles';
import ClinicBackground from '../../components/Containers/ClinicBackground';
import useNavSetBackground from '../../components/Nav/useNavSetBackground';
import Info from './Info';
import Map from './Map';
import Form from './Form';

const Container = styled(ClinicBackground)`
  padding: 10rem 1.5rem 0;

  ${query.lg`
    padding: 14rem 3rem 0;
  `}
`;

const Contact = () => {
  const navSetBackground = useNavSetBackground();
  useEffect(() => {
    navSetBackground(false);
  }, [navSetBackground]);

  return (
    <Container>
      <Info />
      <Map />
      <Form />
    </Container>
  );
};

export default Contact;
