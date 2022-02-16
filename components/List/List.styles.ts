import styled from 'styled-components';

import { spacingMixin, SpacingProps } from 'themes/mixins/spacing';

export type StyledListProps = {
  gap?: SpacingProps['ml'];
};

const StyledList = styled.ul<StyledListProps>`
  list-style-type: none;
  margin: 0;
  padding: 0;

  & > *:not(:last-child) {
    ${({ gap }) => spacingMixin({ mb: gap })};
  }
`;

const StyledListElement = styled.li`
  margin: 0;
`;

export { StyledList, StyledListElement };
