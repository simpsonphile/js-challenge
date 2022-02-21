import styled from 'styled-components';

import { getColor, ColorProps } from 'themes/mixins/getColor';
import { getFontSize, FontSizeProps } from 'themes/mixins/getFontSize';

export type StyledHeadlineProps = FontSizeProps & Pick<ColorProps, '$color'>;

const StyledHeadline = styled.h1<StyledHeadlineProps>`
  ${getFontSize};
  ${getColor};

  margin: 0;

  line-height: 1;

  &::first-letter {
    text-transform: capitalize;
  }
`;

export { StyledHeadline };
