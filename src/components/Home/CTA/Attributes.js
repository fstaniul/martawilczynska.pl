import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { injectIntl } from "react-intl";
import { LocaleLink } from "../../../locale";
import { colors } from "../../../styles";

const Container = styled.div`
  padding: 30px 0;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding-bottom: 1rem;
`;

const PaddedIcon = styled(FontAwesomeIcon)`
  margin-right: 1rem;
`;

const AttributeLink = styled(LocaleLink)`
  display: block;
  text-decoration: none;
  font-weight: 700;
  color: ${colors.white};
`;

const Attribute = injectIntl(
  ({ text, linkTo, linkText, intl: { formatMessage } }) => {
    return (
      <Wrapper>
        <PaddedIcon icon="check" size="2x" />
        <div>
          <div>{formatMessage({ id: text })}</div>
          <AttributeLink to={linkTo}>
            {formatMessage({ id: linkText })}
          </AttributeLink>
        </div>
      </Wrapper>
    );
  }
);

const Attributes = () => {
  return (
    <Container>
      <Attribute
        text="home.attr.patients.text"
        linkText="home.attr.patients.link"
        linkTo="testimonials"
      />
      <Attribute
        text="home.attr.doctor.text"
        linkText="home.attr.doctor.link"
        linkTo="about"
      />
    </Container>
  );
};

export default Attributes;
