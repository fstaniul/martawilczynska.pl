import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import SectionHeader from "../../UI/SectionHeader";
import { colors } from "../../../styles";
import { useBackendData } from "../../../containers/BackendService";
import Testimony from "../../Testimonials/Testimony";
import Loader from "../../Loader";
import Error from "../../Error";
import Carousel from "../../UI/Carousel";
import TestimonialsCarousel from "./TestimonialsCarousel";

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

const MOCK_DATA = [
  {
    content:
      "Jestem pod wielkim wrażeniem postawy Pani Doktor. Na konsulatcję poświęca bardzo dużo czasu, uczciwie podchodzi do życzeń pacjenta, kierując się najwyższą etyką i profesjonalizmem. Jest nie tylko wyśmienitym fachowcem. Cudownym, ciepłym empatycznym specjalistą. Odmówiła wykonania zabiegu, kierując się moim dobrem. Rozmowa z Panią Dokror terapeutyzuje. Dziękuję Pani Dokror, pozostaję dalece wdzięczna. Magdalena Sendecka - Tosik",
    name: "mag.sendecka",
    date: "21 grudnia 2018",
    stars: 5
  },
  {
    content:
      "Jestem pod wielkim wrażeniem postawy Pani Doktor. Na konsulatcję poświęca bardzo dużo czasu, uczciwie podchodzi do życzeń pacjenta, kierując się najwyższą etyką i profesjonalizmem. Jest nie tylko wyśmienitym fachowcem. Cudownym, ciepłym empatycznym specjalistą. Odmówiła wykonania zabiegu, kierując się moim dobrem. Rozmowa z Panią Dokror terapeutyzuje. Dziękuję Pani Dokror, pozostaję dalece wdzięczna. Magdalena Sendecka - Tosik",
    name: "mag.sendecka",
    date: "21 grudnia 2018",
    stars: 5
  },
  {
    content:
      "Jestem pod wielkim wrażeniem postawy Pani Doktor. Na konsulatcję poświęca bardzo dużo czasu, uczciwie podchodzi do życzeń pacjenta, kierując się najwyższą etyką i profesjonalizmem. Jest nie tylko wyśmienitym fachowcem. Cudownym, ciepłym empatycznym specjalistą. Odmówiła wykonania zabiegu, kierując się moim dobrem. Rozmowa z Panią Dokror terapeutyzuje. Dziękuję Pani Dokror, pozostaję dalece wdzięczna. Magdalena Sendecka - Tosik",
    name: "mag.sendecka",
    date: "21 grudnia 2018",
    stars: 5
  },
  {
    content:
      "Jestem pod wielkim wrażeniem postawy Pani Doktor. Na konsulatcję poświęca bardzo dużo czasu, uczciwie podchodzi do życzeń pacjenta, kierując się najwyższą etyką i profesjonalizmem. Jest nie tylko wyśmienitym fachowcem. Cudownym, ciepłym empatycznym specjalistą. Odmówiła wykonania zabiegu, kierując się moim dobrem. Rozmowa z Panią Dokror terapeutyzuje. Dziękuję Pani Dokror, pozostaję dalece wdzięczna. Magdalena Sendecka - Tosik",
    name: "mag.sendecka",
    date: "21 grudnia 2018",
    stars: 5
  },
  {
    content:
      "Jestem pod wielkim wrażeniem postawy Pani Doktor. Na konsulatcję poświęca bardzo dużo czasu, uczciwie podchodzi do życzeń pacjenta, kierując się najwyższą etyką i profesjonalizmem. Jest nie tylko wyśmienitym fachowcem. Cudownym, ciepłym empatycznym specjalistą. Odmówiła wykonania zabiegu, kierując się moim dobrem. Rozmowa z Panią Dokror terapeutyzuje. Dziękuję Pani Dokror, pozostaję dalece wdzięczna. Magdalena Sendecka - Tosik",
    name: "mag.sendecka",
    date: "21 grudnia 2018",
    stars: 5
  },
  {
    content:
      "Jestem pod wielkim wrażeniem postawy Pani Doktor. Na konsulatcję poświęca bardzo dużo czasu, uczciwie podchodzi do życzeń pacjenta, kierując się najwyższą etyką i profesjonalizmem. Jest nie tylko wyśmienitym fachowcem. Cudownym, ciepłym empatycznym specjalistą. Odmówiła wykonania zabiegu, kierując się moim dobrem. Rozmowa z Panią Dokror terapeutyzuje. Dziękuję Pani Dokror, pozostaję dalece wdzięczna. Magdalena Sendecka - Tosik",
    name: "mag.sendecka",
    date: "21 grudnia 2018",
    stars: 5
  },
  {
    content:
      "Jestem pod wielkim wrażeniem postawy Pani Doktor. Na konsulatcję poświęca bardzo dużo czasu, uczciwie podchodzi do życzeń pacjenta, kierując się najwyższą etyką i profesjonalizmem. Jest nie tylko wyśmienitym fachowcem. Cudownym, ciepłym empatycznym specjalistą. Odmówiła wykonania zabiegu, kierując się moim dobrem. Rozmowa z Panią Dokror terapeutyzuje. Dziękuję Pani Dokror, pozostaję dalece wdzięczna. Magdalena Sendecka - Tosik",
    name: "mag.sendecka",
    date: "21 grudnia 2018",
    stars: 5
  },
  {
    content:
      "Jestem pod wielkim wrażeniem postawy Pani Doktor. Na konsulatcję poświęca bardzo dużo czasu, uczciwie podchodzi do życzeń pacjenta, kierując się najwyższą etyką i profesjonalizmem. Jest nie tylko wyśmienitym fachowcem. Cudownym, ciepłym empatycznym specjalistą. Odmówiła wykonania zabiegu, kierując się moim dobrem. Rozmowa z Panią Dokror terapeutyzuje. Dziękuję Pani Dokror, pozostaję dalece wdzięczna. Magdalena Sendecka - Tosik",
    name: "mag.sendecka",
    date: "21 grudnia 2018",
    stars: 5
  },
  {
    content:
      "Jestem pod wielkim wrażeniem postawy Pani Doktor. Na konsulatcję poświęca bardzo dużo czasu, uczciwie podchodzi do życzeń pacjenta, kierując się najwyższą etyką i profesjonalizmem. Jest nie tylko wyśmienitym fachowcem. Cudownym, ciepłym empatycznym specjalistą. Odmówiła wykonania zabiegu, kierując się moim dobrem. Rozmowa z Panią Dokror terapeutyzuje. Dziękuję Pani Dokror, pozostaję dalece wdzięczna. Magdalena Sendecka - Tosik",
    name: "mag.sendecka",
    date: "21 grudnia 2018",
    stars: 5
  }
];

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
        <TestimonialsCarousel data={MOCK_DATA} />
      </ContentWrapper>
    </div>
  );
};

export default TestimonialsSection;
