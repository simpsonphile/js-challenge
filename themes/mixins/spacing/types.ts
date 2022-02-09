import { DefaultTheme } from 'styled-components';

import { ExtendedPartialThemedStyledProps } from '../types';

export type DefaultThemeSpaceKeys = keyof DefaultTheme['spacing'];

type SpaceStringTemp<T extends string> =
  | T
  | `${T} ${T}`
  | `${T} ${T} ${T}`
  | `${T} ${T} ${T} ${T}`;

export type SpaceString = SpaceStringTemp<DefaultThemeSpaceKeys>;

type SpaceDirectionName = 't' | 'r' | 'b' | 'l';
type SpacePrefixName = 'p' | 'm';

export type SpaceWithPrefixName = `${SpacePrefixName}${SpaceDirectionName}`;

type SpaceWithPrefixProps = Record<SpaceWithPrefixName, DefaultThemeSpaceKeys>;

type SpaceProps = Record<SpacePrefixName, SpaceString>;

type GapProps = {
  gap:
    | DefaultThemeSpaceKeys
    | `${DefaultThemeSpaceKeys} ${DefaultThemeSpaceKeys}`;
};

export type SpacingProps = Partial<
  SpaceWithPrefixProps & SpaceProps & GapProps
>;

export type ThemeAndSpacingProps =
  ExtendedPartialThemedStyledProps<SpacingProps>;
