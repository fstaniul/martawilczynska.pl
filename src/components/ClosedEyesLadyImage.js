import React from "react";
import LADY_IMAGE_300 from "../assets/img/lady_closed_eyes/300.png";
import LADY_IMAGE_616 from "../assets/img/lady_closed_eyes/616.png";
import LADY_IMAGE_844 from "../assets/img/lady_closed_eyes/844.png";

export default props => (
  <img
    alt=""
    {...props}
    src={LADY_IMAGE_844}
    srcSet={`${LADY_IMAGE_300} 300w, ${LADY_IMAGE_616} 616w, ${LADY_IMAGE_844} 844w`}
    sizes="(max-width: 844px) 100vw, 844px"
  />
);
