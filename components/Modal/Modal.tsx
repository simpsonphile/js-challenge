import { ReactElement, useEffect, useRef, useState } from 'react';

import { AiOutlineClose } from 'react-icons/ai';
import { useClickAway, useLockBodyScroll } from 'react-use';

import ButtonCircle from 'components/ButtonCircle/ButtonCircle';
import Portal from 'components/Portal';
import { usePredefinedHotkeys } from 'hooks/usePredefinedHotkeys';

import {
  StyledModal,
  StyledModalWrap,
  StyledModalCloseBtn,
  StyledModalCenter,
} from './Modal.styles';

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

  usePredefinedHotkeys({
    keys: 'closeCurrent',
    callback: onClose,
  });

  useEffect(() => {
    setIsLocked(true);

    return () => setIsLocked(false);
  }, [setIsLocked]);

  return (
    <Portal>
      <StyledModal>
        <StyledModalWrap>
          <StyledModalCloseBtn>
            <ButtonCircle onClick={onClose}>
              <AiOutlineClose />
            </ButtonCircle>
          </StyledModalCloseBtn>
          <StyledModalCenter ref={ref}>{children}</StyledModalCenter>
        </StyledModalWrap>
      </StyledModal>
    </Portal>
  );
}
