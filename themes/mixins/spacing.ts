import { css, DefaultTheme } from 'styled-components';

import { ExtendedPartialThemedStyledProps } from './types';

export type DefaultThemeSpaceKeys = keyof DefaultTheme['spaces'];

type SpaceArray =
  | [DefaultThemeSpaceKeys]
  | [DefaultThemeSpaceKeys, DefaultThemeSpaceKeys]
  | [DefaultThemeSpaceKeys, DefaultThemeSpaceKeys, DefaultThemeSpaceKeys]
  | [
      DefaultThemeSpaceKeys,
      DefaultThemeSpaceKeys,
      DefaultThemeSpaceKeys,
      DefaultThemeSpaceKeys
    ]; // todo simplify this monster

type SpaceDirectionName = 't' | 'r' | 'b' | 'l';
type SpacePrefixName = 'p' | 'm';

type SpaceWithPrefixName = `${SpacePrefixName}${SpaceDirectionName}`;

type SpaceWithPrefixProps = Record<SpaceWithPrefixName, DefaultThemeSpaceKeys>;

type SpaceProps = Record<SpacePrefixName, SpaceArray>;

type GapProps = {
  gap: [DefaultThemeSpaceKeys, DefaultThemeSpaceKeys];
};

export type SpacingProps = Partial<
  SpaceWithPrefixProps & SpaceProps & GapProps
>;

export type ThemeAndSpacingProps =
  ExtendedPartialThemedStyledProps<SpacingProps>;

const spaceKeysToValue = (theme: DefaultTheme, values: SpaceArray) =>
  values.map((value) => theme.spaces[value]).join(' ');

export const spacingMixin = ({ theme, p, m, ml, gap }: ThemeAndSpacingProps) =>
  css`
    ${theme &&
    p?.length &&
    css`
      padding: ${spaceKeysToValue(theme, p)};
    `}

    ${theme &&
    m?.length &&
    css`
      margin: ${spaceKeysToValue(theme, m)};
    `}

    ${theme &&
    ml &&
    css`
      margin-left: ${theme.spaces[ml]};
    `}

    ${theme &&
    gap?.length &&
    css`
      gap: ${spaceKeysToValue(theme, gap)};
    `}
  `;
