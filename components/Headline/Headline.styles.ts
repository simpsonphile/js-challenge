import styled from 'styled-components';

import { colorMixin, ColorProps } from 'themes/mixins/color';
import { getFontScale, FontScaleProps } from 'themes/mixins/getFontScale';

export type StyledHeadlineProps = FontScaleProps & {
  color?: ColorProps['color'];
};

const StyledHeadline = styled.h1<StyledHeadlineProps>`
  ${getFontScale};
  ${colorMixin};

  margin: 0;

  line-height: 1;

  &::first-letter {
    text-transform: capitalize;
  }
`;

export { StyledHeadline };
