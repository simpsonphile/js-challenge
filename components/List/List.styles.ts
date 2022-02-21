import styled from 'styled-components';

import { getSpacing, SpacingProps } from 'themes/mixins/getSpacing';

export type StyledListProps = {
  gap?: SpacingProps['$ml'];
};

const StyledList = styled.ul<StyledListProps>`
  list-style-type: none;
  margin: 0;
  padding: 0;

  & > *:not(:last-child) {
    ${({ gap }) => getSpacing({ $mb: gap })};
  }
`;

const StyledListElement = styled.li`
  margin: 0;
`;

export { StyledList, StyledListElement };
