import styled from 'styled-components';

import getFontScale, { FontScaleProps } from 'themes/mixins/getFontScale';

export type StyledHeadlineProps = FontScaleProps;

const StyledHeadline = styled.h1<StyledHeadlineProps>`
  margin: 0;

  ${getFontScale};
  line-height: 1;

  &::first-letter {
    text-transform: capitalize;
  }
`;

export { StyledHeadline };
