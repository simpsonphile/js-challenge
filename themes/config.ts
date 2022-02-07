import { DefaultTheme } from 'styled-components';

// FontScales
/***********************************************************/
const fontScales = {
  xs: ['1rem', '1.6rem'],
  s: ['1.2rem', '1.8rem'],
  base: ['1.6rem', '2.4rem'],
  lg: ['2rem', '3rem'],
  xl: ['2.4rem', '3.6rem'],
  xl2: ['3.2rem', '4.8rem'],
  xl3: ['4rem', '6rem'],
  xl4: ['4.8rem', '7.2rem'],
} as const;

export type FontScales = typeof fontScales;

// Spacing
/***********************************************************/
const spacing = {
  '0': '0rem',
  xs: '0.4rem',
  s: '0.8rem',
  base: '1.6rem',
  lg: '3.2rem',
  xl: '6.4rem',
  xl2: '12.8rem',
  xl3: '25.6rem',
  xl4: '51.2rem',
} as const;

export type Spacing = typeof spacing;

// Radiss
/***********************************************************/
const radiss = ['0rem', '0.4rem', '0.8rem'] as const;

export type Radiss = typeof radiss;

// Breakpoints
/***********************************************************/
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
  mainHover: '#e66f8c',
  supplementary: '#FFC759',
};

export type Color = typeof color;

// defaultTheme
/***********************************************************/
const defaultTheme: DefaultTheme = {
  fontScales,
  spacing,
  radiss,
  breakpoints,
  color,
};

export { fontScales, spacing, radiss, breakpoints, defaultTheme };
