import styled from 'styled-components';

import { spacingMixin, SpacingProps } from 'themes/mixins/spacing';

export type StyledHeadlineHeaderProps = {
  gap?: SpacingProps['mb'];
};

const StyledHeadlineHeader = styled.header<StyledHeadlineHeaderProps>`
  &:not(:last-child) {
    ${({ theme, gap }) => gap && spacingMixin({ theme, mb: gap })};
  }
`;

export { StyledHeadlineHeader };
