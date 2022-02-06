import {
  css,
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
} from 'styled-components';

const mediaHover = (
  cssTemplate: FlattenInterpolation<ThemeProps<DefaultTheme>>
) => css`
  @media (hover: hover) {
    &:hover {
      ${cssTemplate}
    }
  }
`;

export { mediaHover };
