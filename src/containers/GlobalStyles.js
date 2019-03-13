import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { colors, query, media } from "../styles";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        vertical-align: baseline;
    }

    body {
        font-size: 16px;
        font-family: "Raleway", sans-serif;
        color: ${colors.black};
        background: ${colors.white};
    }
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
