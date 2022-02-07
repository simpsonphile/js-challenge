import { ReactElement, useEffect, useRef, useState } from 'react';
import { useClickAway, useLockBodyScroll } from 'react-use';

import Portal from 'components/Portal';

import { StyledModal, StyledModalCenter } from './Modal.styles';

type ModalProps = {
  onClose: () => void;
  children: ReactElement;
};

export default function Modal(props: ModalProps): React.ReactElement {
  const { children, onClose } = props;

  const [isLocked, setIsLocked] = useState(false);

  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>;

  useClickAway(ref, onClose);

  useLockBodyScroll(isLocked);

  useEffect(() => {
    setIsLocked(true);

    return () => setIsLocked(false);
  }, [setIsLocked]);

  return (
    <Portal>
      <StyledModal>
        <StyledModalCenter ref={ref}>{children}</StyledModalCenter>
      </StyledModal>
    </Portal>
  );
}
