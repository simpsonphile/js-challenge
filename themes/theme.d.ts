import 'styled-components';

import {
  Spacing,
  Breakpoints,
  Radiss,
  Color,
  Shadow,
  Sizing,
  FontSizes,
  LineHeights,
} from './config';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontSizes: FontSizes;
    lineHeights: LineHeights;
    radiss: Radiss;
    shadow: Shadow;
    sizing: Sizing;
    spacing: Spacing;
    breakpoints: Breakpoints;
    color: Color;
  }
}
