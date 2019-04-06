import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Controls from "./Controls";
import useWindowWidth from "../../util/hooks/useWindowWidth";
import ResizableWrapper from "../ResizableWrapper";

const CarouselWrapper = styled.div`
  display: flex;
  direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 1.5rem;
  transition: all 500ms ease;

  &.entering {
    transform: translateY(0%);
    opacity: 1;
  }

  &.leaving {
    transform: translateY(-40%);
    opacity: 0;
  }
`;

const ControlsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
`;

const CarouselElementWrapper = styled.div`
  padding: 0 1.5rem;
  max-width: ${({ elementWidth }) => elementWidth}px;
`;

const MultiCarousel = ({ data, children, elementWidth }) => {
  const [leaving, setLeaving] = useState(false);
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState(0);
  const windowWidth = useWindowWidth();

  // calculate how many elements to display, not less then one
  let elementsToDisplay = Math.floor(windowWidth / elementWidth);
  elementsToDisplay = elementsToDisplay < 1 ? 1 : elementsToDisplay;

  const displayData = data.slice(elementsToDisplay * current, elementsToDisplay * (current + 1));

  const onTransitionEnd = () =>
    setTimeout(() => {
      setLeaving(false);
      if (leaving === true) {
        setCurrent(next);
        setNext(-1);
      }
    });

  const setNextData = next => {
    setLeaving(true);
    setNext(next);
  };

  return (
    <ResizableWrapper>
      <CarouselWrapper onTransitionEnd={onTransitionEnd} className={leaving ? "leaving" : "entering"}>
        {displayData.map((props, i) => (
          <CarouselElementWrapper key={i} elementWidth={elementWidth}>
            {children(props)}
          </CarouselElementWrapper>
        ))}
      </CarouselWrapper>
      <ControlsWrapper>
        <Controls set={setNextData} sections={data.length / elementsToDisplay} selected={current} />
      </ControlsWrapper>
    </ResizableWrapper>
  );
};

MultiCarousel.propTypes = {
  data: PropTypes.array.isRequired,
  children: PropTypes.func.isRequired,
  elementWidth: PropTypes.number
};

MultiCarousel.defaultProps = {
  elementWidth: 500
};

export default MultiCarousel;
