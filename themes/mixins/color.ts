import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { css, DefaultTheme, ThemedStyledProps } from 'styled-components';

export type DefaultThemeColorKeys = keyof DefaultTheme['color'];

export type ColorProps = {
  color?: DefaultThemeColorKeys;
  bgColor?: DefaultThemeColorKeys;
  borderColor?: DefaultThemeColorKeys;
};

export type Props = Partial<
  ThemedStyledProps<
    Pick<
      DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
      'key' | keyof HTMLAttributes<HTMLDivElement>
    > &
      ColorProps,
    DefaultTheme
  >
>;

// add defaultTheme
// change to betterName

export const color = ({ theme, color, bgColor, borderColor }: Props) =>
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
