import { css, DefaultTheme } from 'styled-components';

import { getFontSize } from './getFontSize';
import { getLineHeight } from './getLineHeight';

export type FontScaleProps = {
  $scale?: keyof DefaultTheme['fontSizes'];
};

const getFontScale = ({ $scale }: FontScaleProps) => css`
  ${getFontSize({ $fs: $scale })}
  ${getLineHeight({ $lh: $scale })}
`;

export { getFontScale };
