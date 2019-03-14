import React from "react";
import { createGlobalStyle, ThemeProvider, css } from "styled-components";
import { colors, query, media, fluidTypography } from "../styles";

const HMOD = {
  m: 1.2,
  d: 1.4
};

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        vertical-align: baseline;
    }

    body {
        font-family: "Raleway", sans-serif;
        font-weight: 400;
        ${fluidTypography(12, 16, media.sm, media.lg)}
        color: ${colors.black};
        background: ${colors.white};
    }

    ${[1, 2, 3, 4, 5, 6].map(
      tag => css`
        h${tag} {
          font-size: ${Math.pow(HMOD.m, 6 - tag) * 16};
          ${fluidTypography(
            Math.pow(HMOD.m, 6 - tag) * 16,
            Math.pow(HMOD.d, 6 - tag) * 16,
            media.sm,
            media.lg
          )}
          font-weight: 400;
        }
      `
    )}
`;

const GlobalStyles = ({ children }) => {
  return (
    <ThemeProvider theme={{ colors, media, query }}>
      <>
        <GlobalStyle />
        {children}
      </>
    </ThemeProvider>
  );
};

export default GlobalStyles;
