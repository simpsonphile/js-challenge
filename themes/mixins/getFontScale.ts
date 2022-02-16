import { css, DefaultTheme } from 'styled-components';

import {
  BreakpointRecord,
  breakpointMapper,
} from 'themes/mixins/breakpointMapper';

type FontScaleName = keyof DefaultTheme['fontScales'];

export type FontScaleProps = {
  $scale?: BreakpointRecord<FontScaleName> | FontScaleName;
};

const FontScale = (scale?: FontScaleName) => css`
  ${({ theme }) =>
    scale &&
    theme?.fontScales[scale] &&
    css`
      font-size: ${theme.fontScales[scale][0]};
      line-height: ${theme.fontScales[scale][1]};
    `}
`;

const getFontScale = ({ $scale }: FontScaleProps) => {
  if (typeof $scale === 'string') return FontScale($scale);
  return $scale && breakpointMapper($scale, FontScale);
};

export { getFontScale };
