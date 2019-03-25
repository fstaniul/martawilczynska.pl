import React from "react";
import useWindowWidth from "../../util/hooks/useWindowWidth";
import { media } from "../../util/styles";

const Display = ({ children, show, hide }) => {
  const windowWidth = useWindowWidth();
  show = typeof show === "string" ? media[show] : show;
  hide = typeof hide === "string" ? media[hide] : hide;

  if (show && windowWidth > show) return <>{children}</>;
  else if (hide && windowWidth < hide) return <>{children}</>;

  return null;
};

export default Display;
