import styled, { css } from 'styled-components';

import { getSpacing, SpacingProps } from 'themes/mixins/getSpacing';

export type StyledInlineProps = {
  wrap?: boolean;
  gap?: SpacingProps['$ml'];
};

const StyledInline = styled.div<StyledInlineProps>`
  display: flex;
  flex-direction: row;
  flex-wrap: ${({ wrap }) => (wrap ? 'wrap' : 'nowrap')};
  ${({ theme, gap }) =>
    typeof gap === 'string' &&
    css`
      margin-top: -${theme.spacing[gap]};
      margin-left: -${theme.spacing[gap]};
    `};

  & > * {
    ${({ gap }) => getSpacing({ $ml: gap, $mt: gap })};
  }
`;

export { StyledInline };
