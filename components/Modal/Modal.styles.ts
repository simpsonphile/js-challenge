import styled from 'styled-components';

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;

  background-color: ${({ theme }) => theme.color.common.black.alpha(0.6)};
`;

const StyledModalCenter = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 2rem;

  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export { StyledModal, StyledModalCenter };
