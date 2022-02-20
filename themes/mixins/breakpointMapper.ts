import {
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
} from 'styled-components';

import { breakpointsOrder } from 'themes/config';

import { mediaMinWidth } from './mediaQueries';

type Breakpoint = keyof DefaultTheme['breakpoints'];

export type BreakpointRecord<T> = Partial<Record<'0' | Breakpoint, T>>;

export function breakpointMapper<T>(
  breakpointRecord: BreakpointRecord<T>,
  callback: (param: T) => FlattenInterpolation<ThemeProps<DefaultTheme>>
) {
  const breakpoints = Object.keys(breakpointRecord).sort(
    (a, b) => breakpointsOrder.indexOf(a) - breakpointsOrder.indexOf(b)
  ) as (keyof BreakpointRecord<T>)[];
  return breakpoints.map((breakpoint) => {
    const propKey = breakpointRecord[breakpoint];
    const hasBreakpoint = breakpoint !== '0' && breakpoint in mediaMinWidth;

    if (propKey) {
      if (hasBreakpoint) {
        return mediaMinWidth[breakpoint](callback(propKey));
      }

      return callback(propKey);
    }
  });
}
