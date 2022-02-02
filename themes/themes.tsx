import { DefaultTheme } from 'styled-components';

import getFontScale from './fontScales';

const THEME_NAMES = ['light', 'dark'] as const;

type ThemeNames = typeof THEME_NAMES[number];

const sharedThemeProps = {
  borderRadius: '.4rem',
  getFontScale,
} as const;

const generateTheme = (
  themeProps: Omit<DefaultTheme, keyof typeof sharedThemeProps>
): DefaultTheme => ({
  ...sharedThemeProps,
  ...themeProps,
});

const light = generateTheme({
  common: {
    black: 'black',
    white: 'white',
  },
  text: 'black',
  bg: 'pink',
  main: 'red',
  supplementary: '#FFC759',
});

const dark = generateTheme({
  common: {
    black: 'black',
    white: 'white',
  },
  text: 'white',
  bg: '#241E4E',
  main: '#FF7B9C',
  supplementary: '#FFC759',
});

const themes: { [key in ThemeNames]: DefaultTheme } = {
  light,
  dark,
};

export type ThemeName = keyof typeof themes;

export default themes;
