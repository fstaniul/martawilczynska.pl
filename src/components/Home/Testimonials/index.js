import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import SectionHeader from "../../UI/SectionHeader";
import { colors } from "../../../styles";
import { useBackendData } from "../../../containers/BackendService";
import Testimony from "../../Testimonials/Testimony";
import Loader from "../../Loader";
import Error from "../../Error";

const ContentWrapper = styled.div`
  padding: 0 1rem;
`;

const HeaderLink = styled.a`
  color: ${colors.blue};
  text-decoration: none;
  font-weight: 700;

  &:hover {
    text-decoration: underline;
  }
`;

const znanylekarzLink =
  "https://www.znanylekarz.pl/marta-wilczynska-staniul/chirurg-plastyczny-chirurg/wroclaw#tab=profile-reviews";

const Header = () => (
  <SectionHeader
    title={<FormattedMessage id="home.testimonials.header.title" />}
    subtitle={
      <FormattedMessage
        id="home.testimonials.header.subtitle"
        values={{
          znanylekarz: (
            <HeaderLink target="_black" href={znanylekarzLink}>
              znanylekarz.pl
            </HeaderLink>
          )
        }}
      />
    }
  />
);

const TestimonialsSection = () => {
  const { loaded, loading, data, error, reload } = useBackendData(
    "testimonials",
    "/api/testimonials"
  );

  return (
    <div>
      <Header />
      <ContentWrapper>
        {loading && <Loader />}
        {!loading &&
          loaded &&
          data.map((testimony, i) => <Testimony key={i} {...testimony} />)}
        {!loading && !loaded && error && <Error err={error} />}
      </ContentWrapper>
    </div>
  );
};

export default TestimonialsSection;
