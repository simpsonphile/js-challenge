import 'styled-components';

import { FontScaleName, Color } from 'themes';

declare module 'styled-components' {
  export interface DefaultTheme {
    getFontScale: (scale: FontScaleName) => FlattenSimpleInterpolation;
    radiss: string[];
    spaces: string[];
    color: {
      black: Color;
      white: Color;
      gray: Color;
      text: Color;
      bg: Color;
      main: Color;
      supplementary: Color;
      valid: Color;
      error: Color;
    };
  }
}
