import React, { useLayoutEffect } from "react";
import AboutDoctorMarta from "./AboutDoctorMarta";
import CertificatesPresentation from "./CertificatesPresentation";
import VideoPresentation from "./VideoPresentation";
import useNavSetBackground from "../../components/Nav/useNavSetBackground";

const index = () => {
  const setNavBackground = useNavSetBackground();
  useLayoutEffect(() => setNavBackground(true), []);

  return (
    <>
      <AboutDoctorMarta />
      <CertificatesPresentation />
      <VideoPresentation />
    </>
  );
};

export default index;
