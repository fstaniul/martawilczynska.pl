import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colors } from "../../util/styles";

const Star = styled(FontAwesomeIcon).attrs({ icon: "star" })`
  color: ${({ color }) => color};
  font-size: 2rem;
`;

export default function Stars({ stars }) {
  if (typeof stars !== "number" || stars < 0 || stars > 5) stars = 0;
  const renderedStars = [];
  for (let i = 0; i < stars; i++) renderedStars.push(<Star key={i} color={colors.blue} />);
  for (let i = stars; i < 5; i++) renderedStars.push(<Star key={i} color={colors.gray} />);

  return <span>{renderedStars}</span>;
}
