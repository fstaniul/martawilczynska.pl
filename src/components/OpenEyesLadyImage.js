import React from "react";
import LADY_IMAGE_300 from "../assets/img/lady_open_eyes/300.png";
import LADY_IMAGE_646 from "../assets/img/lady_open_eyes/646.png";
import LADY_IMAGE_890 from "../assets/img/lady_open_eyes/890.png";

export default props => (
  <img
    alt=""
    {...props}
    src={LADY_IMAGE_890}
    srcSet={`${LADY_IMAGE_300} 300w, ${LADY_IMAGE_646} 646w, ${LADY_IMAGE_890} 890w`}
    sizes="(max-width: 890px) 100vw, 890px"
  />
);
