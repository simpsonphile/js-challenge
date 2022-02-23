import styled from 'styled-components';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 999;

  background-color: ${({ theme }) => theme.color.bg2};
  box-shadow: ${({ theme }) => theme.shadow.default};
`;

const StyledHeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: var(--header-height);
`;

export { StyledHeader, StyledHeaderInner };
