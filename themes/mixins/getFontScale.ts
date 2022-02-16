import { css, DefaultTheme } from 'styled-components';

export type FontScaleName = keyof DefaultTheme['fontScales'];

export type FontScaleProps = {
  scale?: FontScaleName;
};

const getFontScale = ({ scale }: FontScaleProps) => css`
  ${({ theme }) => css`
    ${scale &&
    theme?.fontScales[scale] &&
    css`
      font-size: ${theme.fontScales[scale][0]};
      line-height: ${theme.fontScales[scale][1]};
    `}
  `}
`;

export { getFontScale };
