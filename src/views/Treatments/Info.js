import React from "react";
import styled from "styled-components";
import { Redirect, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocale, localizePath } from "../../util/locale";
import TREATMENTS from "../../assets/treatments.json";
import Nav from "./Nav";
import { FormattedMessage } from "react-intl";
import { colors, query } from "../../util/styles";

const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;

  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
`;

const NavWrapper = styled.div`
  flex: 0 0 auto;
  padding: 15rem 4rem 0 0;
`;

const ContentWrapper = styled.div`
  flex: 1 auto;
  padding: 11.5rem 1.5rem 0;

  ${query.md`
    padding-top: 15rem;
  `}
`;

const StyledBackButton = styled(Link)`
  border: none;
  outline: none;
  background: transparent;
  padding: 0;
  margin: 0;
  display: inline-block;
  height: 38px;
  color: #555;
  text-align: center;
  font-size: 11px;
  font-weight: 600;
  line-height: 38px;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  background-color: transparent;
  cursor: pointer;
  box-sizing: border-box;

  color: ${colors.blue};

  span {
    padding-left: 1rem;
  }
`;

const BackButton = ({ locale }) => (
  <StyledBackButton to={localizePath(locale, "treatments")}>
    <FontAwesomeIcon icon="chevron-left" />
    <FormattedMessage id="treatments.back" />
  </StyledBackButton>
);

const TreatmentsInfo = ({ match, displayNav }) => {
  const [locale] = useLocale();
  const treatment = TREATMENTS[locale][+match.params.id];

  // if we dont have data then this url is wrong, switch to the first one
  if (typeof treatment === "undefined") return <Redirect to={localizePath(locale, "treatments")} />;

  const { content } = treatment;

  return (
    <Container>
      {displayNav && (
        <NavWrapper>
          <Nav />
        </NavWrapper>
      )}
      <ContentWrapper>
        {!displayNav && <BackButton locale={locale} />}
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </ContentWrapper>
    </Container>
  );
};

export default TreatmentsInfo;
