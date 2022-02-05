import { DefaultTheme } from 'styled-components';

import getFontScale from './fontScales';
import { spaces, radiss, defaultTheme } from './config';

const THEME_NAMES = ['light', 'dark'] as const;

type ThemeNames = typeof THEME_NAMES[number];

const sharedThemeProps = {
  radiss,
  getFontScale, //get param
  spaces,
} as const;

// todo add default theme colors
const generateTheme = (
  themeColorProps: DefaultTheme['color']
): DefaultTheme => ({
  ...sharedThemeProps,
  color: {
    ...themeColorProps,
  },
});

const light = generateTheme({
  ...defaultTheme,
});

const dark = generateTheme({
  ...defaultTheme,
  text: 'white',
  bg: '#241E4E',
});

const themes: { [key in ThemeNames]: DefaultTheme } = {
  light,
  dark,
};

export type ThemeName = keyof typeof themes;

export default themes;
