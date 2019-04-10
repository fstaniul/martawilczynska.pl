import React from 'react';
import { FormattedMessage } from 'react-intl';
import SectionHeading from '../../components/Headings/SectionHeading';
import SubHeading from '../../components/Headings/SubHeading';
import { TextAnchorTag } from '../../components/Links/TextLink';

const ZNANYLEKARZ_LINK =
  'https://www.znanylekarz.pl/marta-wilczynska-staniul/chirurg-plastyczny-chirurg/wroclaw#tab=profile-reviews';

export default function Heading({ className }) {
  return (
    <SectionHeading color="white" center={true} className={className}>
      <FormattedMessage id="testimonials.header" />
      <SubHeading color="silver">
        <FormattedMessage
          id="testimonials.subheader"
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
  );
}
