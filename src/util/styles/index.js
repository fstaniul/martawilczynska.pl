import { css } from "styled-components";

export const colors = {
  blue: "#00537E",
  green: "#3AA17E",
  black: "#212121",
  white: "#FFFFFF",
  gray: "#707070",
  silver: "#EEEEEE",
  red: "#E30000"
};

export const media = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
};

export const query = Object.keys(media).reduce((acc, key) => {
  acc[key] = (...args) => css`
    @media (min-width: ${media[key]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export const fluidTypography = (
  minFontSize,
  maxFontSize,
  minScreenSize,
  maxScreenSize
) => {
  Object.values([
    minFontSize,
    maxFontSize,
    minScreenSize,
    maxScreenSize
  ]).forEach(arg => {
    if (typeof arg !== "number")
      throw new Error(
        "fluidTypography only accepts numbers as its parameters indicating sizes in px"
      );
  });

  return css`
    font-size: ${minFontSize}px;
    @media screen and (min-width: ${minScreenSize}px) {
      font-size: calc(
        ${minFontSize}px + (${maxFontSize - minFontSize}) *
          ((100vw - ${minScreenSize}px) / (${maxScreenSize - minScreenSize}))
      );
    }
    @media screen and (min-width: ${maxScreenSize}px) {
      font-size: ${maxFontSize}px;
    }
  `;
};

export { GlobalStyles } from "./GlobalStyles";
