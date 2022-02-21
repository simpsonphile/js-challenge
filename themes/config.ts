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
const breakpointsOrder = ['sm', 'md', 'lg', 'xl', '2xl'];
// todo only array notation
const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
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
  text: 'black',
  bg: 'white',
  bgAccent: '#cccccc',
  main: '#FF7B9C',
  main2: '#e66f8c',
  main3: '#cc627d',
  supplementary: '#FFC759',
  shadow: 'rgba(10,10,10,.9)',
};

export type Color = typeof color;

// defaultTheme
/***********************************************************/
const defaultTheme: DefaultTheme = {
  fontSizes,
  lineHeights,
  sizing,
  spacing,
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
  defaultTheme,
};
