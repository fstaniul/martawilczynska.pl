import React, { useEffect } from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import { colors, query } from "../../util/styles";
import ClinicBackground from "../../components/Containers/ClinicBackground";
import useNavSetBackground from "../../components/Nav/useNavSetBackground";
import Info from "./Info";

const Container = styled(ClinicBackground)`
  padding: 10rem 1.5rem 0;
  min-height: 100vh;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: stretch;
  justify-content: stretch;
  padding: 10rem 0 10rem 0;

  ${query.md`
    flex-flow: row nowrap;
    align-items: center;
  `}
`;

const Separator = styled.div`
  flex: 0 0 1px;
  background: ${colors.white};
  height: 1px;
  margin: 2rem 0;

  ${query.md`
    margin: 0 2rem;
    height: 150px;
    width: 1px;
  `}
`;

const Contact = () => {
  const navSetBackground = useNavSetBackground();
  useEffect(() => {
    navSetBackground(false);
  }, [navSetBackground]);

  return (
    <Container>
      <InfoWrapper>
        <Info
          name="Marta Wilczyńska-Staniul"
          phone="+48 501 531 926"
          email="martawilczynska.pl@gmail.com"
          textAlign="right"
          arrowText={<FormattedMessage id="contact.ask-question" />}
          position="top"
        />
        <Separator />
        <Info
          name="KCM Clinic"
          phone="+48 555 333 111"
          arrowText={<FormattedMessage id="contact.make-an-appointment" />}
          position="bottom"
        />
      </InfoWrapper>
    </Container>
  );
};

export default Contact;
