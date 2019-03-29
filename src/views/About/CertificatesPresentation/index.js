import React, { createContext, useState, useCallback } from "react";
import Modal from "./Modal";

const CERTIFICATES = [];

const CertificatesContext = createContext();

const CertificatesPresentation = () => {
  const [currentModal, setCurrentModal] = useState(null);
  const nextModalImage = useCallback(
    i => () =>
      setCurrentModal(
        (CERTIFICATES.length + currentModal + i) % CERTIFICATES.length
      ),
    [currentModal, CERTIFICATES.length, setCurrentModal]
  );

  return (
    <CertificatesContext.Provider>
      <>
        {currentModal && (
          <Modal next={nextModalImage(1)} prev={nextModalImage(-1)}>
            <img src={CERTIFICATES[currentModal].img} alt="" />
          </Modal>
        )}
        {CERTIFICATES.map((certificate, i) => (
          <img src={certificate.thumbnail} alt="" />
        ))}
      </>
    </CertificatesContext.Provider>
  );
};

export default CertificatesPresentation;
