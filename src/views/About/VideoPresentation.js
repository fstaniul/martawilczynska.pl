import React from "react";
import styled from "styled-components";
import YouTubeIframe from "../../components/YouTubeIframe";
import { SectionHeading, SubHeading } from "../../components/Headings";
import { FormattedMessage } from "react-intl";

const Container = styled.div`
  padding: 5rem 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const VideoPresentation = () => {
  return (
    <Container>
      <SectionHeading>
        <FormattedMessage id="about.video.header" />
        <SubHeading>
          <FormattedMessage id="about.video.subheader" />
          &nbsp;- <FormattedMessage id="about.signature" />
        </SubHeading>
      </SectionHeading>
      <YouTubeIframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/ReZ0t7PzCBE"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Container>
  );
};

export default VideoPresentation;
