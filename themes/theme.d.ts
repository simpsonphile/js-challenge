import 'styled-components';

import { FontScales, Spaces, Breakpoints, Radiss, Color } from './config';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontScales: FontScales;
    radiss: Radiss;
    spaces: Spaces;
    breakpoints: Breakpoints;
    color: Color;
  }
}
