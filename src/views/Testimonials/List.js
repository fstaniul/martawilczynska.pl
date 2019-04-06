import React, { useCallback } from "react";
import { TransitionMotion, spring } from "react-motion";
import styled from "styled-components";
import Testimony from "../../components/Testimony";

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

export default function List({ items }) {
  const styles = useCallback(
    prev =>
      items.map((data, index) => {
        const isFirst = index === 0;
        const hasPrev = typeof prev !== "undefined" && typeof prev[index - 1] !== "undefined";
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

  return (
    <TransitionMotion styles={styles}>
      {interpolatedStyles => (
        <Container>
          {interpolatedStyles.map(config => (
            <Testimony key={config.key} style={config.style} {...config.data} />
          ))}
        </Container>
      )}
    </TransitionMotion>
  );
}
