import { ReactElement, useEffect, useRef, useState } from 'react';

import { useClickAway, useLockBodyScroll } from 'react-use';

import ButtonCircle from 'components/ButtonCircle/ButtonCircle';
import { Icon } from 'components/Icon';
import Portal from 'components/Portal';
import { StyledShadow } from 'components/Shadow/Shadow.styles';
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
  const [isVisible, setIsVisible] = useState(false);

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

    setTimeout(() => setIsVisible(true), 100);

    return () => setIsLocked(false);
  }, [setIsLocked]);

  return (
    <Portal>
      <StyledModal
        aria-modal="true"
        role="dialog"
        as={StyledShadow}
        $isVisible={isVisible}
      >
        <StyledModalWrap>
          <StyledModalCloseBtn>
            <ButtonCircle aria-label="close modal" onClick={onClose}>
              <Icon name="AiOutlineClose" />
            </ButtonCircle>
          </StyledModalCloseBtn>
          <StyledModalCenter ref={ref}>{children}</StyledModalCenter>
        </StyledModalWrap>
      </StyledModal>
    </Portal>
  );
}
