import React from "react";
import styled from "styled-components";
import PageWrapper from "../../../components/Containers/PageWrapper";
import { query } from "../../../util/styles";
import AboutText from "./AboutText";
import DoctorMartaImage from "./DoctorMartaImage";
import Quote from "./Quote";

const Container = styled(PageWrapper)`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;

  padding-top: 14rem;
  padding-right: 1.5rem;
  padding-left: 1.5rem;

  ${query.md`
    padding-top: 12rem;
    min-height: 100vh;
  `}
`;

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  max-width: 1200px;
  margin: 0 auto;

  ${query.md`
    flex-flow: row nowrap;
    align-items: center;
  `}
`;

const AboutDoctorMarta = () => {
  return (
    <Container>
      <AboutWrapper>
        <DoctorMartaImage />
        <AboutText />
      </AboutWrapper>
      <Quote />
    </Container>
  );
};

export default AboutDoctorMarta;
