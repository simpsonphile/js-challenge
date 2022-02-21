import styled from 'styled-components';

import { getColor, ColorProps } from 'themes/mixins/getColor';
import { getFontScale, FontScaleProps } from 'themes/mixins/getFontScale';

export type StyledHeadlineProps = FontScaleProps & Pick<ColorProps, '$color'>;

const StyledHeadline = styled.h1<StyledHeadlineProps>`
  ${getFontScale};
  ${getColor};

  margin: 0;

  line-height: 1;

  &::first-letter {
    text-transform: capitalize;
  }
`;

export { StyledHeadline };
