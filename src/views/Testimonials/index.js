import React, { useEffect, useCallback } from "react";
import { FormattedMessage } from "react-intl";
import { TransitionMotion, spring } from "react-motion";
import useNavSetBackground from "../../components/Nav/useNavSetBackground";
import ErrorBlock, { ErrorTextButton } from "../../components/ErrorBlock";
import Loader from "../../components/Loader";
import Testimony from "../../components/Testiomony";
import { SectionHeading, SubHeading } from "../../components/Headings";
import { useWindowWidth } from "../../util/hooks";
import { Container, Row, Element, Wrapper, LoadMoreButton } from "./styled";
import { colors } from "../../util/styles";
import { useTestimonials } from "../../util/api/testimonials";

const MOTION_PRESET = {
  stiffness: 130,
  damping: 20
};

const Testimonials = () => {
  const navSetBackground = useNavSetBackground();
  useEffect(() => navSetBackground(false), []); // disable nav background on this page
  let { loaded, loading, testimonials, load, count, error } = useTestimonials();
  const windowWidth = useWindowWidth(); // width of the window to determine how many collumns we are displaying
  const minRowWidth = 400; // the minimum width of a row (used for calcuating how many rows we display)
  const maxContianerWidth = 1200; // maximum width of a contianer

  const rowsToDisplay = Math.max(Math.floor(Math.min(maxContianerWidth, windowWidth) / minRowWidth), 1);
  const indexes = [];
  for (let i = 0; i < rowsToDisplay; ++i) indexes.push(i);

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
      {loaded && (
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
      )}
      {loading ? (
        <Loader color={testimonials.length === 0 ? colors.white : colors.blue} />
      ) : error ? (
        <ErrorBlock>
          <FormattedMessage
            id="testimonials.error"
            values={{
              here: (
                <ErrorTextButton onClick={load}>
                  <FormattedMessage id="testimonials.error.here" />
                </ErrorTextButton>
              )
            }}
          />
        </ErrorBlock>
      ) : (
        testimonials.length < count && (
          <LoadMoreButton onClick={load}>
            <FormattedMessage id="testimonials.loadmore" />
          </LoadMoreButton>
        )
      )}
    </Wrapper>
  );
};

export default Testimonials;
