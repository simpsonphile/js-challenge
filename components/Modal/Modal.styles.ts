import styled from 'styled-components';

type StyledModalProps = {
  $isVisible?: boolean;
};

const StyledModal = styled.div<StyledModalProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: ${({ theme }) => theme.spacing.base};

  opacity: ${({ $isVisible }) => ($isVisible ? '1' : '0')};

  transition: opacity 0.2s;
`;

const StyledModalWrap = styled.div`
  position: relative;

  max-height: 100%;
  max-width: 64rem;
  width: 100%;
`;

const StyledModalCloseBtn = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  transform: translate(50%, -50%);
`;

const StyledModalCenter = styled.div`
  overflow: auto;

  max-height: 100%;
  max-width: 64rem;
  width: 100%;
`;

export { StyledModal, StyledModalWrap, StyledModalCloseBtn, StyledModalCenter };
