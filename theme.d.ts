import 'styled-components';

import { FontScaleName, Color } from 'themes';

declare module 'styled-components' {
  export interface DefaultTheme {
    getFontScale: (scale: FontScaleName) => FlattenSimpleInterpolation;
    borderRadius: string;
    spaces: string[];
    color: {
      common: {
        black: Color;
        white: Color;
        gray: Color;
      };
      text: Color;
      bg: Color;
      main: Color;
      supplementary: Color;
    };
  }
}
