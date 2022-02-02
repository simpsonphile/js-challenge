import styled from 'styled-components';

const StyledEditor = styled.div`
  max-height: 100vh;

  overflow: auto;

  ${({ theme }) => theme.getFontScale('lg')}
`;

export { StyledEditor };
