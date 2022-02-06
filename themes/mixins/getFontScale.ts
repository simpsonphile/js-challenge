import { css, DefaultTheme } from 'styled-components';

import { ExtendedPartialThemedStyledProps } from './types';

export type FontScaleName = keyof DefaultTheme['fontScales'];

export type FontScaleProps = {
  scale?: FontScaleName;
};

export type ThemeAndFontScaleProps =
  ExtendedPartialThemedStyledProps<FontScaleProps>;

const FontScale = ({ theme, scale }: ThemeAndFontScaleProps) => css`
  ${scale &&
  theme?.fontScales[scale] &&
  css`
    font-size: ${theme.fontScales[scale][0]};
    line-height: ${theme.fontScales[scale][1]};
  `}
`;

export default FontScale;
