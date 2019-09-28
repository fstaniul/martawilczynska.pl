import React from "react";
import styled from "styled-components";
import {FormattedHTMLMessage, FormattedMessage} from "react-intl";
import { SectionHeading } from "../../../components/Headings";
import { query, colors } from "../../../util/styles";

const TextWrapper = styled.div`
  order: 0;
  flex: 1 50%;
  margin-bottom: 2rem;
  text-align: left;

  ${query.md`
    order: 1;
    margin-bottom: 0;
  `}
`;

const Signature = styled.p`
  text-align: right;
`;

const About = () => {
  return (
    <TextWrapper>
      <SectionHeading style={{ borderBottom: `1px solid ${colors.blue}` }}>
        <FormattedMessage id="about.heading" />
      </SectionHeading>
      <FormattedHTMLMessage
        tagName="div"
        id="about.text"
      />
      <FormattedMessage id="about.signature">
        {text => <Signature>{text}</Signature>}
      </FormattedMessage>
    </TextWrapper>
  );
};

export default About;
