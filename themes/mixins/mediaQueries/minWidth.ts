import {
  css,
  DefaultTheme,
  FlattenInterpolation,
  FlattenSimpleInterpolation,
  ThemeProps,
} from 'styled-components';
import { breakpoints } from '../../config';

type BreakpointKeys = keyof typeof breakpoints;

type MediaMinWidth = Record<
  BreakpointKeys,
  (
    cssTemplate: FlattenInterpolation<ThemeProps<DefaultTheme>>
  ) => FlattenSimpleInterpolation
>;

const breakpointKeys = Object.keys(breakpoints) as BreakpointKeys[];

const mediaMinWidth = breakpointKeys.reduce(
  (acc: MediaMinWidth, cur: BreakpointKeys) => {
    return {
      ...acc,
      [cur]: (
        cssTemplate: FlattenInterpolation<ThemeProps<DefaultTheme>>
      ) => css`
        @media (min-width: ${breakpoints[cur]}) {
          ${cssTemplate}
        }
      `,
    };
  },
  {} as MediaMinWidth
);

export { mediaMinWidth };
