import React, { useEffect } from "react";
import styled from "styled-components";
import ClinicBackground from "../../components/Containers/ClinicBackground";
import { useNavSetBackground } from "../../components/Nav";
import Info from "./Info";
import Form from "./Form";

const Wrapper = styled(ClinicBackground)`
  min-height: 100vh;
  padding-top: 10rem;
`;

const Contact = () => {
  // disable nav background on this route
  const setNavBackground = useNavSetBackground();
  useEffect(() => {
    setNavBackground(false);
  }, [setNavBackground]);

  return (
    <Wrapper>
      <Info />
      <Form />
    </Wrapper>
  );
};

export default Contact;
