import React from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import { GradientButton } from "../../../components/Buttons";
import FormattedStringMessage from "../../../util/FormattedStringMessage";
import { SectionHeading, SubHeading } from "../../../components/Headings";
import { TextAnchorTag } from "../../../components/Links/TextLink";
import { LocaleLink } from "../../../util/locale";

const ZNANYLEKARZ_LINK =
  "https://www.znanylekarz.pl/marta-wilczynska-staniul/chirurg-plastyczny-chirurg/wroclaw#tab=profile-reviews";

const HeadingsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 5rem;
`;

const ButtonsWrapper = styled.div``;

const Testimonials = () => {
  return (
    <div>
      <HeadingsWrapper>
        <SectionHeading>
          <FormattedStringMessage id="home.testimonials.header" />
          <SubHeading>
            <FormattedMessage
              id="home.testimonials.subheader"
              values={{
                znanylekarz: (
                  <TextAnchorTag href={ZNANYLEKARZ_LINK} target="_blank">
                    znanylekarz.pl
                  </TextAnchorTag>
                )
              }}
            />
          </SubHeading>
        </SectionHeading>
        <ButtonsWrapper>
          <GradientButton as={LocaleLink} to="testimonials">
            <FormattedMessage id="home.testimonials.read-more-button" />
          </GradientButton>
        </ButtonsWrapper>
      </HeadingsWrapper>
    </div>
  );
};

export default Testimonials;
