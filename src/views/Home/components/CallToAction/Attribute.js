import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { localizePath, useLocale } from "../../../../util/locale";
import { colors } from "../../../../util/styles";

export const AttributesWrapper = styled.div`
  margin: 3rem 0;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 2rem;
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    color: ${colors.white};
    text-decoration: underline;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  line-height: 1.2em;
  padding-left: 1.5rem;
`;

const Attribute = ({ icon, linkTo, linkText, message }) => {
  const [locale] = useLocale();
  return (
    <Wrapper>
      <FontAwesomeIcon icon={icon || "check"} size="2x" fixedWidth />
      <TextContainer>
        <FormattedMessage id={message} values={{ br: <br /> }} />
        {linkTo && (
          <StyledLink to={localizePath(locale, linkTo)}>
            <FormattedMessage id={linkText} />
          </StyledLink>
        )}
      </TextContainer>
    </Wrapper>
  );
};

Attribute.propTypes = {
  icon: PropTypes.string
};

export default Attribute;
