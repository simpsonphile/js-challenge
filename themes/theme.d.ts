import 'styled-components';

import { FontScales, Spaces, Breakpoints, Color } from './config';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontScales: FontScales;
    radiss: string[];
    spaces: Spaces;
    breakpoints: Breakpoints;
    color: Color;
  }
}
