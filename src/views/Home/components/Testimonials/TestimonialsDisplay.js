import React, { useState, useCallback } from 'react';
import { TransitionMotion, spring } from 'react-motion';
import styled from 'styled-components';
import SELECTED_TESTIMONIALS from '../../../../assets/selected-testimonials.json';
import Testimony from '../../../../components/Testimony';
import Controls from '../../../../components/Carousels/Controls';
import ResizableWrapper from '../../../../components/ResizableWrapper';
import { useStartStopInterval } from '../../../../util/hooks';

const Container = styled(ResizableWrapper)`
  position: relative;
  max-width: 900px;
  margin: 0 auto 2rem;
  overflow: hidden;
`;

export default function TestimonialsDisplay() {
  const [{ selected, previous }, setState] = useState({ selected: 0, previous: 0 });
  const setCurrent = current => setState(state => ({ selected: current, previous: state.selected }));

  const onEnter = enteringStyle => {
    const isAfter = +enteringStyle.key > previous;
    return {
      opacity: 0,
      x: isAfter ? 100 : -100,
      leaving: 0
    };
  };

  const onLeave = leavingStyle => {
    const isAfter = +leavingStyle.key > selected;
    return {
      opacity: spring(0),
      x: isAfter ? spring(100) : spring(-100),
      leaving: 1
    };
  };

  const styles = [{ key: selected + '', style: { opacity: spring(1), x: spring(0), leaving: 0 } }];

  return (
    <div>
      <TransitionMotion styles={styles} willEnter={onEnter} willLeave={onLeave}>
        {interpolatedStyles => (
          <Container>
            {interpolatedStyles.map(config => (
              <Testimony
                key={config.key}
                style={{
                  top: 0,
                  left: 0,
                  opacity: config.style.opacity,
                  transform: `translateX(${config.style.x}%)`,
                  position: config.style.leaving === 1 ? 'absolute' : 'relative'
                }}
                {...SELECTED_TESTIMONIALS[+config.key]}
              />
            ))}
          </Container>
        )}
      </TransitionMotion>
      <div>
        <Controls set={setCurrent} selected={selected} sections={SELECTED_TESTIMONIALS.length} />
      </div>
    </div>
  );
}
