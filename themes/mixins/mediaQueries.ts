import { breakpoints } from '../config';

// todo add media Queries like hover etc

const mediaMinWidth = (breakpoint: keyof typeof breakpoints) =>
  `@media (min-width: ${breakpoints[breakpoint]}`;

export default mediaMinWidth;
