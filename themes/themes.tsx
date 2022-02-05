import { DefaultTheme } from 'styled-components';

import getFontScale from './fontScales';
import { spaces, radiss, defaultTheme } from './config';

// todo add default theme colors
const generateTheme = (
  themeColorProps: DefaultTheme['color']
): DefaultTheme => ({
  radiss,
  getFontScale, //get param
  spaces,
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

const themes = {
  light,
  dark,
} as const;

export type ThemeName = keyof typeof themes;

export default themes;
