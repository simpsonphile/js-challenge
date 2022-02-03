import styled from 'styled-components';

export type StyledInlineProps = {
  wrap?: boolean;
  gap?: number;
};

const StyledInline = styled.div<StyledInlineProps>`
  display: flex;
  flex-direction: row;
  flex-wrap: ${({ wrap }) => (wrap ? 'wrap' : 'nowrap')};

  & > *:not(:last-child) {
    margin-right: ${({ theme, gap }) => theme.spaces[gap || 1]};
  }
`;

export { StyledInline };
