import 'styled-components';

import {
  FontScales,
  Spacing,
  Breakpoints,
  Radiss,
  Color,
  Sizing,
} from './config';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontScales: FontScales;
    radiss: Radiss;
    sizing: Sizing;
    spacing: Spacing;
    breakpoints: Breakpoints;
    color: Color;
  }
}
