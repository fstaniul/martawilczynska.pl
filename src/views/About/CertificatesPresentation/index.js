import React, { createContext, useState, useCallback } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormattedMessage } from "react-intl";
import Modal from "./Modal";
import CERTIFICATES from "../../../assets/certificates.json";
import { colors } from "../../../util/styles";
import { SectionHeading, SubHeading } from "../../../components/Headings";
import Separator from "../../../components/Separator";
import { GradientBackground } from "../../../components/Containers";

const CertificatesContext = createContext();

const Container = styled.div`
  max-width: 1200px;
  padding: 5rem 1.5rem;
  margin: 0 auto;
`;

const Galery = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const GaleryItem = styled.div`
  margin: 1rem;
  width: 250px;
  height: 150px;
  background-repeat: no-repeat;
  background-size: cover;
  border: 1px solid ${colors.gray};
  border-radius: 6px;
  position: relative;
  cursor: pointer;
`;

const EyeMask = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 100ms ease;
  background: rgba(0, 0, 0, 0.6);
  color: ${colors.white};

  ${GaleryItem}:hover & {
    opacity: 1;
  }
`;

const Eye = styled(FontAwesomeIcon)`
  font-size: 4rem;
`;

const CertificatesPresentation = () => {
  const [currentModal, setCurrentModal] = useState(null);
  const nextModalImage = useCallback(i => () => setCurrentModal((CERTIFICATES.length + currentModal + i) % CERTIFICATES.length), [
    currentModal,
    CERTIFICATES.length,
    setCurrentModal
  ]);

  const closeCallback = useCallback(() => setCurrentModal(null), [setCurrentModal]);

  return (
    <CertificatesContext.Provider>
      <GradientBackground>
        <Separator separator="wave" rotate />
        <Container>
          <SectionHeading color="white">
            <FormattedMessage id="about.certificates.header" />
            <SubHeading color="silver">
              <FormattedMessage id="about.certificates.subheader" />
            </SubHeading>
          </SectionHeading>
          {typeof currentModal === "number" && (
            <Modal next={nextModalImage(1)} prev={nextModalImage(-1)} close={closeCallback}>
              <img src={CERTIFICATES[currentModal].img} alt="" style={{ maxWidth: "100%" }} />
            </Modal>
          )}
          <Galery>
            {CERTIFICATES.map((certificate, i) => (
              <GaleryItem key={i} style={{ backgroundImage: `url(${certificate.thumbnail})` }} onClick={() => setCurrentModal(i)}>
                <EyeMask>
                  <Eye icon="eye" />
                  <FormattedMessage id="about.certificates.preview" />
                </EyeMask>
              </GaleryItem>
            ))}
          </Galery>
        </Container>
        <Separator separator="bump" />
      </GradientBackground>
    </CertificatesContext.Provider>
  );
};

export default CertificatesPresentation;
