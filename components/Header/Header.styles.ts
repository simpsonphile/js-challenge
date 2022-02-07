import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;

  padding: ${({ theme }) => theme.spacing.base};

  background-color: ${({ theme }) => theme.color.bgAccent};
`;

export { StyledHeader };
