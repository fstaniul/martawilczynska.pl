import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;
`;

const IFrame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
`;

const YouTubeIframe = props => {
  return (
    <Wrapper>
      <IFrame {...props} />
    </Wrapper>
  );
};

export default YouTubeIframe;
