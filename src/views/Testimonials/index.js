import React, { useEffect, useState, useCallback, useMemo } from "react";
import { FormattedMessage } from "react-intl";
import { TransitionMotion, spring } from "react-motion";
import useNavSetBackground from "../../components/Nav/useNavSetBackground";
import Loader from "../../components/Loader";
import Testimony from "../../components/Testiomony";
import { SectionHeading, SubHeading } from "../../components/Headings";
import { useWindowWidth } from "../../util/hooks";
import { Container, Row, Element, Wrapper, LoadMoreButton } from "./styled";
import { colors } from "../../util/styles";

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

const MOTION_PRESET = {
  stiffness: 130,
  damping: 20
};

const PER_PAGE = 12;

function loadTestimonials(skip) {
  return new Promise(resolve => setTimeout(() => resolve(MOCK_DATA), 1000));
}

const Testimonials = () => {
  const navSetBackground = useNavSetBackground();
  useEffect(() => navSetBackground(false), []); // disable nav background on this page
  const [testimonials, setTestimonials] = useState([]); // state for testimonials
  const [loaded, setLoaded] = useState(0); // how many we already loaded to skip in the request call
  const [loading, setLoading] = useState(false); // are we loading more or not?!
  const windowWidth = useWindowWidth(); // width of the window to determine how many collumns we are displaying
  const minRowWidth = 400; // the minimum width of a row (used for calcuating how many rows we display)
  const maxContianerWidth = 1200; // maximum width of a contianer

  const rowsToDisplay = Math.max(Math.floor(Math.min(maxContianerWidth, windowWidth) / minRowWidth), 1);
  const indexes = [];
  for (let i = 0; i < rowsToDisplay; ++i) indexes.push(i);

  // Load testimonials after initial load
  const load = useCallback(() => {
    setLoading(true);
    loadTestimonials(0)
      .then(
        data => {
          setTestimonials(test => [...test, ...data]);
          setLoaded(loaded => loaded + data.length);
        },
        err => console.err(err)
      )
      .then(() => setLoading(false));
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const tmStyles = useCallback(
    prev => {
      return testimonials.map((data, index) => ({
        key: index + "",
        data,
        style: {
          opacity:
            index === 0
              ? spring(1, MOTION_PRESET)
              : (prev[index - 1] && spring(prev[index - 1].style.opacity, MOTION_PRESET)) || spring(0, MOTION_PRESET)
        }
      }));
    },
    [testimonials]
  );

  return (
    <Wrapper>
      <SectionHeading center={true} color="white">
        <FormattedMessage id="testimonials.header" />
        <SubHeading color="silver">
          <FormattedMessage id="testimonials.subheader" />
        </SubHeading>
      </SectionHeading>
      <TransitionMotion styles={tmStyles}>
        {interpolatedStyles => (
          <Container rowWidth={minRowWidth} maxContainerWidth={maxContianerWidth}>
            {indexes.map(whichIndex => (
              <Row key={whichIndex}>
                {interpolatedStyles
                  .filter(({ key }) => +key % rowsToDisplay === whichIndex)
                  .map(({ key, style, data }) => (
                    <Element key={key} style={{ opacity: style.opacity }}>
                      <Testimony {...data} />
                    </Element>
                  ))}
              </Row>
            ))}
          </Container>
        )}
      </TransitionMotion>
      {loading ? (
        <Loader color={testimonials.length === 0 ? colors.white : colors.blue} />
      ) : (
        <LoadMoreButton onClick={load}>
          <FormattedMessage id="testimonials.loadmore" />
        </LoadMoreButton>
      )}
    </Wrapper>
  );
};

export default Testimonials;
