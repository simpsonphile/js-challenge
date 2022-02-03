import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;

  padding: ${({ theme }) => theme.spaces[3]};

  background-color: ${({ theme }) => theme.color.bg.shade(5)};
`;

export { StyledHeader };
