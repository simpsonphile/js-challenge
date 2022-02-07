import styled from 'styled-components';

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;

  padding: ${({ theme }) => theme.spacing.base};

  background-color: ${({ theme }) => theme.color.black};
`;

const StyledModalCenter = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export { StyledModal, StyledModalCenter };
