import { ReactElement, useRef } from 'react';
import { useClickAway } from 'react-use';

import Portal from 'components/Portal';

import { StyledModal, StyledModalCenter } from './Modal.styles';

type ModalProps = {
  onClose: () => void;
  children: ReactElement;
};

export default function Modal(props: ModalProps): React.ReactElement {
  const { children, onClose } = props;
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>;

  useClickAway(ref, onClose);

  return (
    <Portal>
      <StyledModal>
        <StyledModalCenter ref={ref}>{children}</StyledModalCenter>
      </StyledModal>
    </Portal>
  );
}
