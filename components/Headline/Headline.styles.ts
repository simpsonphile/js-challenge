import styled from 'styled-components';

import getFontScale, { FontScaleProps } from 'themes/mixins/getFontScale';

export type StyledHeadlineProps = FontScaleProps;

const StyledHeadline = styled.h1<StyledHeadlineProps>`
  margin: 0;

  ${getFontScale};
`;

export { StyledHeadline };
