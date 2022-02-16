import memo from 'lodash/memoize';
import { css, DefaultTheme } from 'styled-components';

import {
  SpaceString,
  DefaultThemeSpaceKeys,
  SpaceWithPrefixName,
  SpacingProps,
} from './types';

export type { SpacingProps };

type CssSpacingPropNamesWithDir = `${'padding' | 'margin'}-${
  | 'top'
  | 'right'
  | 'bottom'
  | 'left'}`;

type CssPropWithDir = {
  propName: SpaceWithPrefixName;
  cssPropName: CssSpacingPropNamesWithDir;
};

const cssProps = [
  {
    propName: 'p',
    cssPropName: 'padding',
  },
  {
    propName: 'm',
    cssPropName: 'margin',
  },
] as const;

const cssPropsWithGap = [
  ...cssProps,
  {
    propName: 'gap',
    cssPropName: 'gap',
  },
] as const;

type CssPropsWithGap = typeof cssPropsWithGap;

const dir = [
  { propSuffix: 't', cssPropSuffix: 'top' },
  { propSuffix: 'r', cssPropSuffix: 'right' },
  { propSuffix: 'b', cssPropSuffix: 'bottom' },
  { propSuffix: 'l', cssPropSuffix: 'left' },
] as const;

const spaceKeysToValue = (theme: DefaultTheme, str: SpaceString): string => {
  const valSplit = str.split(' ') as DefaultThemeSpaceKeys[];
  return valSplit.map((value) => theme.spacing[value]).join(' ');
};

const propsMap: {
  full: CssPropsWithGap;
  withDir: CssPropWithDir[];
} = {
  full: cssPropsWithGap,
  withDir: cssProps.flatMap((v) =>
    dir.map((w) => ({
      propName: `${v.propName}${w.propSuffix}`,
      cssPropName: `${v.cssPropName}-${w.cssPropSuffix}`,
    }))
  ),
};

const generateProps = (mode: 'withDir' | 'full') => (props: SpacingProps) =>
  propsMap[mode].map((prop) => {
    const { propName, cssPropName } = prop;
    const keyString = props?.[propName];

    return (
      propName &&
      keyString &&
      css`
        ${cssPropName}: ${({ theme }) => spaceKeysToValue(theme, keyString)};
      `
    );
  });

const fullProps = memo(generateProps('full'));
const propsWithDir = memo(generateProps('withDir'));

export const spacingMixin = (props: SpacingProps) => css`
  ${fullProps(props)}
  ${propsWithDir(props)}
`;
