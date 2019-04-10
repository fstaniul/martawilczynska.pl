import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { query } from '../../util/styles';
import ContactForm from '../../components/Contact/ContactForm';
import { SideBySideLadyImage } from '../../components/OpenEyesLadyImage';
import SideBySide, { Left } from '../../components/Containers/SideBySide';
import { SectionHeading, SubHeading } from '../../components/Headings';

const FormContainer = styled(SideBySide)``;

const FormWrapper = styled(Left)`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: stretch;
  padding-bottom: 3rem;

  ${query.lg`
    padding-left: 5rem;
  `}

  ${query.xl`
    padding-left: 10rem;
  `}
`;

export default function Form() {
  return (
    <FormContainer>
      <FormWrapper>
        <SectionHeading color="white" style={{ padding: '0 1rem' }} center={true}>
          <FormattedMessage id="contact.form.header" />
          <SubHeading color="silver">
            <FormattedMessage id="contact.form.subheader" />
          </SubHeading>
        </SectionHeading>
        <ContactForm />
      </FormWrapper>
      <SideBySideLadyImage />
    </FormContainer>
  );
}
