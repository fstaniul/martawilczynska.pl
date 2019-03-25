import React from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import FormattedStringMessage from "../../../../util/FormattedStringMessage";
import { SectionHeading, SubHeading } from "../../../../components/Headings";
import { TextAnchorTag } from "../../../../components/Links/TextLink";
import { media } from "../../../../util/styles";
import useWindowWidth from "../../../../util/hooks/useWindowWidth";
import SeeMoreButton from "./SeeMoreButton";

const ZNANYLEKARZ_LINK =
  "https://www.znanylekarz.pl/marta-wilczynska-staniul/chirurg-plastyczny-chirurg/wroclaw#tab=profile-reviews";

const HeadingsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 5rem;
`;

const Heading = () => {
  return (
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
      <SeeMoreButton show="md" />
    </HeadingsWrapper>
  );
};

export default Heading;
