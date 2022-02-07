import styled from 'styled-components';

import { spacingMixin, SpacingProps } from 'themes/mixins/spacing';

export type StyledInlineProps = {
  wrap?: boolean;
  gap?: SpacingProps['ml'];
};

const StyledInline = styled.div<StyledInlineProps>`
  display: flex;
  flex-direction: row;
  flex-wrap: ${({ wrap }) => (wrap ? 'wrap' : 'nowrap')};

  & > *:not(:first-child) {
    ${({ theme, gap }) => spacingMixin({ theme, ml: gap })};
  }
`;

export { StyledInline };
