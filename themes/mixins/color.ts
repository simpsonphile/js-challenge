import { css, DefaultTheme } from 'styled-components';

export type DefaultThemeColorKeys = keyof DefaultTheme['color'];

export type ColorProps = {
  color?: DefaultThemeColorKeys;
  bgColor?: DefaultThemeColorKeys;
  borderColor?: DefaultThemeColorKeys;
};

export const colorMixin = ({ color, bgColor, borderColor }: ColorProps) =>
  css`
    ${({ theme }) => css`
      ${color &&
      css`
        color: ${theme.color?.[color]};
      `};

      ${bgColor &&
      css`
        background-color: ${theme.color?.[bgColor]};
      `};

      ${borderColor &&
      css`
        border-color: ${theme.color?.[borderColor]};
      `};
    `}
  `;
