import 'styled-components';

import {
  Spacing,
  Breakpoints,
  Radiss,
  Color,
  Sizing,
  FontSizes,
  LineHeights,
} from './config';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontSizes: FontSizes;
    lineHeights: LineHeights;
    radiss: Radiss;
    sizing: Sizing;
    spacing: Spacing;
    breakpoints: Breakpoints;
    color: Color;
  }
}
