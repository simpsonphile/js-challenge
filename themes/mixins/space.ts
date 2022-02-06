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

export type SpaceProps = {
  pad?: SpaceArray;
  margin?: SpaceArray;
  gap?: SpaceArray;
};

export type ThemeAndSpaceProps = ExtendedPartialThemedStyledProps<SpaceProps>;

const spaceKeysToValue = (theme: DefaultTheme, values: SpaceArray) =>
  values.map((value) => theme.spaces[value]).join(' ');

export const SpaceMixin = ({ theme, pad, margin, gap }: ThemeAndSpaceProps) =>
  css`
    ${theme &&
    pad?.length &&
    css`
      padding: ${spaceKeysToValue(theme, pad)};
    `}

    ${theme &&
    margin?.length &&
    css`
      margin: ${spaceKeysToValue(theme, margin)};
    `}

    ${theme &&
    gap?.length &&
    css`
      gap: ${spaceKeysToValue(theme, gap)};
    `}
  `;
