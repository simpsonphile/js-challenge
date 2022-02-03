import { DefaultTheme } from 'styled-components';

import getFontScale from './fontScales';
import spaces from './spacing';
import Color from './Color';

const THEME_NAMES = ['light', 'dark'] as const;

type ThemeNames = typeof THEME_NAMES[number];

const sharedThemeProps = {
  borderRadius: '.4rem',
  getFontScale,
  spaces,
} as const;

const generateTheme = (
  themeColorProps: DefaultTheme['color']
): DefaultTheme => ({
  ...sharedThemeProps,
  color: themeColorProps,
});

const light = generateTheme({
  common: {
    black: new Color('black'),
    white: new Color('white'),
    gray: new Color('#798086'),
  },
  text: new Color('black'),
  bg: new Color('white'),
  main: new Color('#FF7B9C'),
  supplementary: new Color('#FFC759'),
});

const dark = generateTheme({
  common: {
    black: new Color('black'),
    white: new Color('white'),
    gray: new Color('#798086'),
  },
  text: new Color('white'),
  bg: new Color('#241E4E'),
  main: new Color('#FF7B9C'),
  supplementary: new Color('#FFC759'),
});

const themes: { [key in ThemeNames]: DefaultTheme } = {
  light,
  dark,
};

export type ThemeName = keyof typeof themes;

export default themes;
