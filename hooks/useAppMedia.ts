import { useMedia } from 'react-use';

import { breakpoints, Breakpoints } from 'themes/config';

const queryString = (size: string) => `(min-width: ${size})`;

export const useAppMedia = (
  breakpointKey: keyof Breakpoints,
  defaultState?: boolean
) => useMedia(queryString(breakpoints[breakpointKey]), defaultState);
