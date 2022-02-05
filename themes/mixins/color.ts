import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { css, DefaultTheme, ThemedStyledProps } from 'styled-components';

export type DefaultThemeColorKeys = keyof DefaultTheme['color'];

export type ColorProps = Partial<
  ThemedStyledProps<
    Pick<
      DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
      'key' | keyof HTMLAttributes<HTMLDivElement>
    > & {
      color?: DefaultThemeColorKeys;
      bgColor?: DefaultThemeColorKeys;
      borderColor?: DefaultThemeColorKeys;
    },
    DefaultTheme
  >
>;

export const color = ({
  theme,
  color,
  bgColor,
  borderColor,
}: ColorProps) => css`
  ${color &&
  theme &&
  css`
    color: ${theme.color?.[color].c};
  `};

  ${bgColor &&
  theme &&
  css`
    background-color: ${theme.color?.[bgColor].c};
  `};

  ${borderColor &&
  theme &&
  css`
    border-color: ${theme.color?.[borderColor].c};
  `};
`;
