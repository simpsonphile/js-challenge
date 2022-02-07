import styled from 'styled-components';

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: ${({ theme }) => theme.spacing.base};

  background-color: ${({ theme }) => theme.color.shadow};
`;

const StyledModalCenter = styled.div`
  overflow: auto;

  max-height: 100%;
  max-width: 64rem;
  width: 100%;
`;

export { StyledModal, StyledModalCenter };
