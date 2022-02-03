import styled from 'styled-components';

const StyledList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const StyledListElement = styled.li`
  margin: 0;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export { StyledList, StyledListElement };
