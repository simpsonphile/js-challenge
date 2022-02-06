import 'styled-components';

import { FontScales, Spaces, Breakpoints, Color } from './config';

declare module 'styled-components' {
  export interface DefaultTheme {
    // getFontScale: (scale: FontScaleName) => FlattenSimpleInterpolation;
    fontScales: FontScales;
    radiss: string[];
    spaces: Spaces;
    breakpoints: Breakpoints;
    color: Color;
  }
}
