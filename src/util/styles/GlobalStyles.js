import React from "react";
import { ThemeProvider } from "styled-components";
import { colors, query, media } from "./index";

export const GlobalStyles = ({ children }) => {
  return (
    <ThemeProvider theme={{ colors, media, query }}>
      <>{children}</>
    </ThemeProvider>
  );
};

export default GlobalStyles;
