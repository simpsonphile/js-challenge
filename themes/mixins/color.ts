import { css, DefaultTheme } from 'styled-components';

import { ExtendedPartialThemedStyledProps } from './types';

export type DefaultThemeColorKeys = keyof DefaultTheme['color'];

export type ColorProps = {
  color?: DefaultThemeColorKeys;
  bgColor?: DefaultThemeColorKeys;
  borderColor?: DefaultThemeColorKeys;
};

export type ThemeAndColorProps = ExtendedPartialThemedStyledProps<ColorProps>;

export const colorMixin = ({
  theme,
  color,
  bgColor,
  borderColor,
}: ThemeAndColorProps) =>
  css`
    ${color &&
    theme &&
    css`
      color: ${theme.color?.[color]};
    `};

    ${bgColor &&
    theme &&
    css`
      background-color: ${theme.color?.[bgColor]};
    `};

    ${borderColor &&
    theme &&
    css`
      border-color: ${theme.color?.[borderColor]};
    `};
  `;
