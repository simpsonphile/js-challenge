import { DefaultTheme } from 'styled-components';

import { defaultTheme } from './config';

const light: DefaultTheme = defaultTheme;

const dark = {
  ...light,
  color: {
    ...light.color,
    text: 'white',
    textOnBg: 'white',
    main: '#FF7B9C',
    main2: '#e66f8c',
    main3: '#cc627d',
    bg0: '#3a3560',
    bg: '#241E4E',
    bg2: '#1d183e',
    bg3: '#191537',
  },
};

const themes = {
  light,
  dark,
} as const;

export type ThemeName = keyof typeof themes;

export default themes;
