import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { injectIntl, FormattedMessage } from "react-intl";
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
  ({ text, linkTo, linkText, intl: { formatMessage }, noLink }) => {
    return (
      <Wrapper>
        <PaddedIcon icon="check" size="2x" />
        <div>
          <FormattedMessage id={text} values={{ br: <br /> }} />
          {!noLink && (
            <AttributeLink to={linkTo}>
              {formatMessage({ id: linkText })}
            </AttributeLink>
          )}
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
      <Attribute text="home.attr.clinic.text" noLink />
    </Container>
  );
};

export default Attributes;
