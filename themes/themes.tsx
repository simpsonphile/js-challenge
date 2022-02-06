import { DefaultTheme } from 'styled-components';

import { defaultTheme } from './config';

const light: DefaultTheme = defaultTheme;

const dark = {
  ...light,
  text: 'white',
  bg: '#241E4E',
};

const themes = {
  light,
  dark,
} as const;

export type ThemeName = keyof typeof themes;

export default themes;
