import { css } from 'styled-components';

import { fontScales } from './config';

export type FontScaleName = keyof typeof fontScales;

const getFontScale = (scale: FontScaleName) => css`
  font-size: ${fontScales[scale][0]};
  line-height: ${fontScales[scale][1]};
`;

export default getFontScale;
