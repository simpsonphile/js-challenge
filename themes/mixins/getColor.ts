import { css, DefaultTheme } from 'styled-components';

import {
  BreakpointRecord,
  breakpointMapper,
} from 'themes/mixins/breakpointMapper';

type DefaultThemeColorKeys = keyof DefaultTheme['color'];

const propToCSSProp = {
  $color: 'color',
  $bgColor: 'background-color',
  $borderColor: 'border-color',
};

export type ColorProps = {
  $color?: BreakpointRecord<DefaultThemeColorKeys> | DefaultThemeColorKeys;
  $bgColor?: BreakpointRecord<DefaultThemeColorKeys> | DefaultThemeColorKeys;
  $borderColor?:
    | BreakpointRecord<DefaultThemeColorKeys>
    | DefaultThemeColorKeys;
};

const colorMixin = (prop: keyof ColorProps) => (value: DefaultThemeColorKeys) =>
  css`
    ${({ theme }) =>
      value &&
      theme.color[value] &&
      css`
        ${propToCSSProp[prop]}: ${theme.color[value]};
      `};
  `;

export const getColor = ({ $bgColor, $color, $borderColor }: ColorProps) => {
  const props = { $bgColor, $color, $borderColor };
  const keys = Object.keys(props) as (keyof ColorProps)[];
  return keys.map((key) => {
    if (typeof props[key] === 'string') {
      return colorMixin(key)(props[key] as DefaultThemeColorKeys);
    }

    return breakpointMapper(
      (props[key] as BreakpointRecord<DefaultThemeColorKeys>) || {},
      colorMixin(key)
    );
  });
};
