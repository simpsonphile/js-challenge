import getFontScale from './fontScales';
import { spaces, radiss, defaultTheme } from './config';

const light = {
  radiss,
  getFontScale, //get param
  spaces,
  ...defaultTheme,
};

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
