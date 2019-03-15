import React, { useRef } from "react";
import { Motion, spring } from "react-motion";

const ResizableContainer = ({ children, style, className }) => {
  const ref = useRef();

  return (
    <Motion
      defaultStyle={{ height: 0 }}
      style={{ height: spring(ref.current ? ref.current.clientHeight : 0) }}
    >
      {({ height }) => (
        <div className={className} style={{ ...style, height: height }}>
          <div ref={ref}>{children}</div>
        </div>
      )}
    </Motion>
  );
};

ResizableContainer.defaultStyle = {
  style: {}
};

export default ResizableContainer;
