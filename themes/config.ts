import { DefaultTheme } from 'styled-components';

// FontScales
/***********************************************************/
const fontSizes = {
  xs: '1rem',
  s: '1.2rem',
  base: '1.6rem',
  lg: '2rem',
  xl: '2.4rem',
  xl2: '3.2rem',
  xl3: '4rem',
  xl4: '4.8rem',
} as const;

export type FontSizes = typeof fontSizes;

const lineHeights = {
  xs: '1.6rem',
  s: '1.8rem',
  base: '2.4rem',
  lg: '3rem',
  xl: '3.6rem',
  xl2: '4.8rem',
  xl3: '6rem',
  xl4: '7.2rem',
} as const;

export type LineHeights = typeof lineHeights;

// Sizing
/***********************************************************/
const sizing = {
  100: '100%',
  50: '50%',
  33: '33.3%',
} as const;

export type Sizing = typeof sizing;

// Spacing
/***********************************************************/
const spacing = {
  '0': '0rem',
  xs: '0.4rem',
  s: '0.8rem',
  base: '1.6rem',
  lg: '3.2rem',
  xl: '6.4rem',
} as const;

export type Spacing = typeof spacing;

// Radiss
/***********************************************************/
const radiss = ['0rem', '0.4rem', '0.8rem'] as const;

export type Radiss = typeof radiss;

// Breakpoints
/***********************************************************/
const breakpointsOrder = ['s', 'sm', 'md', 'lg', 'xl'];
// todo only array notation
const breakpoints = {
  s: '480px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
};

export type Breakpoints = typeof breakpoints;

// Colors
/***********************************************************/
const color = {
  valid: '#4BB543',
  error: '#ff0033',
  black: 'black',
  white: 'white',
  gray: '#798086',
  text: '#2c2c2c',
  textOnBg: 'white',
  bg0: '#d6e1dd',
  bg: '#d1ddd8',
  bg2: '#cbd8d3',
  bg3: '#c5d4ce',
  main: '#246EB9',
  main2: '#2063a7',
  main3: '#1d5894',
  shadow: 'rgba(10,10,10,.9)',
};

export type Color = typeof color;

// Shadows
/***********************************************************/
const shadow = {
  focus: '0 0 0 0.8rem rgba(21, 156, 228, 0.4)',
  default: '0.2rem 0.2rem 0.3rem 0px rgba(0, 0, 0, 0.4)',
};

export type Shadow = typeof shadow;

// defaultTheme
/***********************************************************/
const defaultTheme: DefaultTheme = {
  fontSizes,
  lineHeights,
  sizing,
  spacing,
  shadow,
  radiss,
  breakpoints,
  color,
};

export {
  fontSizes,
  lineHeights,
  sizing,
  spacing,
  radiss,
  breakpointsOrder,
  breakpoints,
  shadow,
  defaultTheme,
};
