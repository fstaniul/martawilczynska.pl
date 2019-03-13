import { css } from "styled-components";

export const colors = {
  blue: "#00537E",
  green: "#3AA17E",
  black: "#212121",
  white: "#FFFFFF",
  gray: "#707070",
  silver: "#EEEEEE"
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
