import styled from 'styled-components';

import { getSpacing, SpacingProps } from 'themes/mixins/getSpacing';

export type StyledInlineProps = {
  $wrap?: boolean;
  $g?: SpacingProps['$ml'];
  $direction?: 'column' | 'row';
  $align?: 'center' | 'stretch';
};

const StyledInline = styled.div<StyledInlineProps>`
  display: flex;
  flex-direction: ${({ $direction }) => $direction || 'row'};
  flex-wrap: ${({ $wrap }) => ($wrap ? 'wrap' : 'nowrap')};
  align-items: ${({ $align }) => $align};

  ${({ $g }) => getSpacing({ $g })};
`;

export { StyledInline };
