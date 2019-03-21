import React, { useReducer } from "react";
import styled from "styled-components";
import { TransitionMotion, spring } from "react-motion";
import ResizableContainer from "../../UI/ResizableContainer";
import Testimony from "../../Testimonials/Testimony";

const TestimonyWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const TestimonialsCarousel = ({ data }) => {
  const [[current, previous], setCurrent] = useReducer(
    (state, skip) => {
      return [state.current + skip, state.current];
    },
    [0, 0]
  );

  return (
    <ResizableContainer style={{ width: "100%" }}>
      <TransitionMotion
        willEnter={() => ({
          x: previous < current && previous !== data.length - 1 ? -100 : 100,
          opacity: 0
        })}
        willLeave={() => ({
          x:
            previous < current && previous !== data.length - 1
              ? spring(100)
              : spring(-100),
          opacity: 0
        })}
        styles={[
          {
            key: current,
            data: data[current],
            style: { x: spring(0), opacity: spring(1) }
          }
        ]}
      >
        {interpolatedStyles => (
          <>
            {interpolatedStyles.map((config, i) => {
              return (
                <TestimonyWrapper
                  style={{
                    ...config.style,
                    transform: `translateX(${config.style.x}%)`
                  }}
                >
                  <Testimony style={{ maxWidth: "800px" }} {...config.data} />
                </TestimonyWrapper>
              );
            })}
          </>
        )}
      </TransitionMotion>
    </ResizableContainer>
  );
};

export default TestimonialsCarousel;
