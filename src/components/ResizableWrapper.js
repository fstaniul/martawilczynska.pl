import React, { useLayoutEffect, useRef, useState } from 'react';
import { Motion, spring } from 'react-motion';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  overflow: hidden;
`;

const ResizableWrapper = ({ children, className, max }) => {
  const [height, setHeight] = useState(0);
  const innerComponent = useRef();
  useLayoutEffect(() => {
    if (innerComponent.current) {
      const componentHeight = innerComponent.current.offsetHeight;
      setHeight(height => (max ? Math.max(height, componentHeight) : componentHeight));
    }
  });

  return (
    <Motion style={{ height: spring(height) }} defaultStyle={{ height: 0 }}>
      {style => (
        <StyledWrapper className={className} style={style}>
          <div ref={innerComponent}>{children}</div>
        </StyledWrapper>
      )}
    </Motion>
  );
};

export default ResizableWrapper;
