import 'styled-components';

import { FontScaleName } from './fontScales';

declare module 'styled-components' {
  export interface DefaultTheme {
    getFontScale: (scale: FontScaleName) => FlattenSimpleInterpolation;
    radiss: string[];
    spaces: string[];
    color: {
      black: string;
      white: string;
      gray: string;
      text: string;
      bg: string;
      main: string;
      supplementary: string;
      valid: string;
      error: string;
    };
  }
}
