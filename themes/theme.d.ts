import 'styled-components';

import { FontScales, Spacing, Breakpoints, Radiss, Color } from './config';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontScales: FontScales;
    radiss: Radiss;
    spacing: Spacing;
    breakpoints: Breakpoints;
    color: Color;
  }
}
