import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;

  padding: ${({ theme }) => theme.spaces.base};

  background-color: ${({ theme }) => theme.color.bg};
`;

export { StyledHeader };
