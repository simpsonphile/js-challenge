import { css, DefaultTheme, ThemedStyledFunction } from 'styled-components';
import { breakpoints } from '../config';

type BreakpointKeys = keyof typeof breakpoints;

type MediaMinWidth = Record<
  BreakpointKeys,
  ThemedStyledFunction<'div', DefaultTheme, object, never>
>;

const breakpointKeys = Object.keys(breakpoints) as BreakpointKeys[];

const mediaMinWidth = breakpointKeys.reduce(
  (acc: MediaMinWidth, cur: BreakpointKeys) => {
    return {
      ...acc,
      [cur]: (...args: TemplateStringsArray) => css`
        @media (min-width: ${breakpoints[cur]}) {
          ${css(args)}
        }
      `,
    };
  },
  {} as MediaMinWidth
);

export { mediaMinWidth };
