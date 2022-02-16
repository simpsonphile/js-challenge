import styled, { css } from 'styled-components';

import { spacingMixin, SpacingProps } from 'themes/mixins/spacing';

export type StyledInlineProps = {
  wrap?: boolean;
  gap?: SpacingProps['ml'];
};

const StyledInline = styled.div<StyledInlineProps>`
  display: flex;
  flex-direction: row;
  flex-wrap: ${({ wrap }) => (wrap ? 'wrap' : 'nowrap')};
  ${({ theme, gap }) =>
    gap &&
    css`
      margin-top: -${theme.spacing[gap]};
      margin-left: -${theme.spacing[gap]};
    `};

  & > * {
    ${({ gap }) => spacingMixin({ ml: gap, mt: gap })};
  }
`;

export { StyledInline };
