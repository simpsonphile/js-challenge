import 'styled-components';

import { FontScaleName } from 'themes/themes';

declare module 'styled-components' {
  export interface DefaultTheme {
    getFontScale: (scale: FontScaleName) => FlattenSimpleInterpolation;
    borderRadius: string;
    common: {
      black: string;
      white: string;
    };
    text: string;
    bg: string;
    main: string;
    supplementary: string;
  }
}
