import {
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
} from 'styled-components';

import { breakpointsOrder } from 'themes/config';

import { mediaMinWidth } from './mediaQueries';

type Breakpoint = keyof DefaultTheme['breakpoints'];

export function breakpointArrMapper<T>(
  values: T[],
  callback: (param: T) => FlattenInterpolation<ThemeProps<DefaultTheme>>
) {
  const breakpoints = ['0', ...breakpointsOrder].slice(0, values.length) as (
    | '0'
    | Breakpoint
  )[];

  return breakpoints.map((breakpoint, i) => {
    const propKey = values[i];
    const hasBreakpoint = breakpoint in mediaMinWidth;

    if (propKey) {
      if (hasBreakpoint && breakpoint !== '0') {
        return mediaMinWidth[breakpoint](callback(propKey));
      }

      return callback(propKey);
    }
  });
}
