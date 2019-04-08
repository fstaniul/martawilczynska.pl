import React, { useCallback, useRef, useEffect } from 'react';
import { TransitionMotion, spring } from 'react-motion';
import styled from 'styled-components';
import Testimony from '../../components/Testimony';

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

export default function List({ items, loading, load, allLoaded }) {
  const styles = useCallback(
    prev =>
      items.map((data, index) => {
        const isFirst = index === 0;
        const hasPrev = typeof prev !== 'undefined' && typeof prev[index - 1] !== 'undefined';
        const styleValue = isFirst ? 1 : hasPrev ? prev[index - 1].style.opacity : 0;

        return {
          key: data._id,
          data: data,
          style: {
            opacity: spring(styleValue)
          }
        };
      }),
    [items]
  );

  const containerRef = useRef(null);

  useEffect(() => {
    function listener() {
      const ws = window.pageOffsetY || window.scrollY;
      const wh = window.innerHeight;
      const elbl = containerRef.current.offsetHeight + containerRef.current.offsetTop;

      if (ws + wh >= elbl) load();
    }

    if (allLoaded || loading) return;

    window.addEventListener('scroll', listener);
    return () => window.removeEventListener('scroll', listener);
  }, [loading, load, allLoaded]);

  return (
    <TransitionMotion styles={styles}>
      {interpolatedStyles => (
        <Container key="container" ref={containerRef}>
          {interpolatedStyles.map(config => (
            <Testimony key={config.key} style={config.style} {...config.data} />
          ))}
        </Container>
      )}
    </TransitionMotion>
  );
}
