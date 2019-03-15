import React, { useState, useEffect, useRef, useMemo } from "react";
import { TransitionMotion, Motion, spring } from "react-motion";
import styled from "styled-components";
import PropTypes from "prop-types";

const CarouselContainer = styled.div`
  display: block;
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const ComponentWrapper = styled.div`
  padding: 1rem;
`;

const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    let debounceTimeout;
    const eventListener = () => {
      if (debounceTimeout) {
        clearTimeout(debounceTimeout);
        debounceTimeout = null;
      }
      debounceTimeout = setTimeout(() => setWidth(window.innerWidth), 30);
    };
    window.addEventListener("resize", eventListener);
    return () => window.removeEventListener("resize", eventListener);
  }, [setWidth]);

  return width;
};

const Carousel = ({ minElementWidth, data, component: Component }) => {
  if (!data || data.length === 0) return null;

  const ref = useRef();
  const windowWidth = useWindowWidth();

  const numberOfElementsToDisplay = Math.floor(windowWidth / minElementWidth);
  const [current, setCurrent] = useState(0);
  const displayData = data.slice(
    current * numberOfElementsToDisplay,
    current * numberOfElementsToDisplay + numberOfElementsToDisplay
  );

  // useEffect(() => {
  //   const interval = setInterval(
  //     () =>
  //       setCurrent(
  //         (current + 1) % Math.floor(data.length / numberOfElementsToDisplay)
  //       ),
  //     3000
  //   );
  //   return () => clearInterval(interval);
  // }, [numberOfElementsToDisplay, current, data]);

  const getHeight = ref => (ref.current && ref.current.offsetHeight) || 0;

  return (
    <Motion
      defaultStyle={{ height: getHeight(ref) }}
      style={{ height: spring(getHeight(ref)) }}
    >
      {({ height }) => (
        <CarouselContainer style={{ height }}>
          <Wrapper ref={ref}>
            <TransitionMotion
              willLeave={() => ({
                y: spring(-30),
                opacity: spring(0),
                leave: 1
              })}
              willEnter={() => ({ y: -30, opacity: 0 })}
              styles={displayData.map((data, i) => ({
                key: i + current * numberOfElementsToDisplay + "",
                data,
                style: { y: spring(0), opacity: spring(1) }
              }))}
            >
              {interpolatedStyles => (
                <>
                  {interpolatedStyles.map((config, i) => (
                    <ComponentWrapper
                      key={i + current * numberOfElementsToDisplay}
                      style={{
                        ...config.style,
                        position:
                          config.style.leave === 1 ? "absolute" : "relative",
                        transform: `translateY(${config.style.y}px)`,
                        maxWidth: minElementWidth
                      }}
                    >
                      <Component {...config.data} />
                    </ComponentWrapper>
                  ))}
                </>
              )}
            </TransitionMotion>
          </Wrapper>
        </CarouselContainer>
      )}
    </Motion>
  );
};

Carousel.propTypes = {
  minElementWidth: PropTypes.number.isRequired,
  data: PropTypes.array.isRequired
};

export default Carousel;
