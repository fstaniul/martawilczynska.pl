import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 600px;
  padding: 1.5rem 3rem;
  margin: 0 auto;
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
  font-weight: 400;
  border: 1px solid;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const Icon = styled.div`
  font-size: 4rem;
  padding-right: 3rem;
`;

export const ErrorTextButton = styled.a`
  font-size: inherit;
  color: inherit;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: inherit;
    text-decoration: underline;
  }
`;

export default function ErrorBlock({ children }) {
  return (
    <Wrapper>
      <Icon>
        <FontAwesomeIcon icon="exclamation-triangle" />
      </Icon>
      <div>{children}</div>
    </Wrapper>
  );
}
