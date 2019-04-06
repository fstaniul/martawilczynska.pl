import React, { useCallback } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colors } from "../../util/styles";
import { useScrollValue } from "../../util/hooks";

const Button = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  border-radius: 1000px;
  height: 48px;
  width: 48px;
  background: ${colors.green};
  background: linear-gradient(135deg, ${colors.blue}, ${colors.green});
  line-height: 48px;
  text-align: center;
  padding: 0;
  margin: 0;
  color: ${colors.white};
  font-size: 2rem;
`;

export default function JumpToTop() {
  const scrollPosition = useScrollValue();
  const scroll = useCallback(() => window.scrollTo({ top: 0 }));

  if (scrollPosition < 100) return null;

  return (
    <Button onClick={scroll}>
      <FontAwesomeIcon icon="chevron-up" />
    </Button>
  );
}
