import produce from 'immer';
import { DefaultTheme } from 'styled-components';

import { defaultTheme } from './config';

const light: DefaultTheme = defaultTheme;

const dark = produce(light, (draft) => {
  draft.color = {
    ...draft.color,
    text: 'white',
    bg: '#241E4E',
    bgAccent: '#1d183e',
  };
});

const themes = {
  light,
  dark,
} as const;

export type ThemeName = keyof typeof themes;

export default themes;
