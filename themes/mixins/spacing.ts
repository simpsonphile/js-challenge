import { css, DefaultTheme } from 'styled-components';

import { breakpointMapper, BreakpointRecord } from './breakpointMapper';

type DefaultThemeSpacingKeys = keyof DefaultTheme['spacing'];

const cssPropMap = {
  $p: 'padding',
  $pt: 'padding-top',
  $pr: 'padding-right',
  $pb: 'padding-bottom',
  $pl: 'padding-left',
  $m: 'margin',
  $mt: 'margin-top',
  $mr: 'margin-right',
  $mb: 'margin-bottom',
  $ml: 'margin-left',
} as const;

type CssPropMapKeys = keyof typeof cssPropMap;

export type SpacingProps = Partial<
  Record<
    CssPropMapKeys,
    BreakpointRecord<DefaultThemeSpacingKeys> | DefaultThemeSpacingKeys
  >
>;

const spacingMixin =
  (prop: CssPropMapKeys) => (value: DefaultThemeSpacingKeys) =>
    css`
      ${({ theme }) =>
        value &&
        theme.spacing[value] &&
        css`
          ${cssPropMap[prop]}: ${theme.spacing[value]};
        `}
    `;

export const getSpacing = (props: SpacingProps) => {
  const keys = Object.keys(props) as (keyof SpacingProps)[];
  return keys.map((key) => {
    if (!(key in cssPropMap)) return;

    if (typeof props[key] === 'string') {
      return spacingMixin(key)(props[key] as DefaultThemeSpacingKeys);
    }

    return breakpointMapper(
      (props[key] as BreakpointRecord<DefaultThemeSpacingKeys>) || {},
      spacingMixin(key)
    );
  });
};
