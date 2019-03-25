import React from "react";
import MultiCarousel from "../../../components/Carousels/MultiCarousel";
import Flex from "../../../components/Containers/Flex";
import Testimony from "../../../components/Testiomony";
import Heading from "../components/Testimonials/Heading";
import SeeMoreButton from "../components/Testimonials/SeeMoreButton";
import TestimonialsContainer from "../components/Testimonials/Container";

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

const Testimonials = () => {
  return (
    <TestimonialsContainer>
      <Heading />
      <MultiCarousel data={MOCK_DATA} elementWidth={500}>
        {props => <Testimony {...props} />}
      </MultiCarousel>
      <Flex align="center" justify="center">
        <SeeMoreButton hide="md" />
      </Flex>
    </TestimonialsContainer>
  );
};

export default Testimonials;
