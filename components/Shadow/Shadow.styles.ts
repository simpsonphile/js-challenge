import styled from 'styled-components';

const StyledShadow = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  z-index: 1000;

  background-color: ${({ theme }) => theme.color.shadow};
`;

export { StyledShadow };
