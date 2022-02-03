import { ReactElement, useRef } from 'react';
import * as ReactDOM from 'react-dom';
import { getDocument } from 'ssr-window';
import { useClickAway } from 'react-use';

import { StyledModal, StyledModalCenter } from './Modal.styles';

type ModalProps = {
  onClose: () => void;
  children: ReactElement;
};

export default function Modal(props: ModalProps): React.ReactElement {
  const { children, onClose } = props;
  const document = getDocument();
  const domTarget = document.querySelector('#footer');
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>;

  useClickAway(ref, onClose);

  const modal = (
    <StyledModal>
      <StyledModalCenter ref={ref}>{children}</StyledModalCenter>
    </StyledModal>
  );

  if (domTarget) {
    return ReactDOM.createPortal(modal, domTarget);
  }

  return <></>;
}
