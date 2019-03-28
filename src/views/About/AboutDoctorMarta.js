import React from "react";
import styled from "styled-components";
import PageWrapper from "../../components/Containers/PageWrapper";
import { query, colors } from "../../util/styles";
import { SectionHeading } from "../../components/Headings";
import DOCTOR_MARTA_IMAGE from "../../assets/img/doctor_marta.png";
import { FormattedMessage } from "react-intl";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 4rem;
  padding-right: 1.5rem;
  padding-left: 1.5rem;

  ${query.md`
    padding-top: 2rem;
    min-height: 100vh;
    flex-flow: row nowrap;
    align-items: center;
  `}
`;

const ImageWrapper = styled.div`
  order: 1;
  flex: 0 1 400px;
  padding: 0 1.5rem 0 0;
  align-self: center;

  ${query.md`
    order: 0;
  `}
`;

const Image = styled.img`
  width: 100%;
  max-width: 400px;
`;

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

const Signature = styled.div`
  text-align: right;
`;

const AboutDoctorMarta = () => {
  return (
    <PageWrapper>
      <Wrapper>
        <ImageWrapper>
          <Image src={DOCTOR_MARTA_IMAGE} />
        </ImageWrapper>
        <TextWrapper>
          <SectionHeading style={{ borderBottom: `1px solid ${colors.blue}` }}>
            <FormattedMessage id="about.heading" />
          </SectionHeading>
          <FormattedMessage
            as="p"
            id="about.text"
            values={{
              br: (
                <>
                  <br />
                  <br />
                </>
              )
            }}
          />
          <FormattedMessage id="about.signature">
            {text => <Signature>{text}</Signature>}
          </FormattedMessage>
        </TextWrapper>
      </Wrapper>
    </PageWrapper>
  );
};

export default AboutDoctorMarta;
