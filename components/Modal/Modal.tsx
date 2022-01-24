import classNames from 'classnames';
import { useRef } from 'react';
import * as ReactDOM from 'react-dom';
import { useClickAway } from 'react-use';
import { getDocument } from 'ssr-window';

import style from './index.module.scss';

type ModalProps = {
  onClose: () => void;
  children: React.ReactElement;
};

export default function Modal(props: ModalProps): React.ReactElement {
  const { children, onClose } = props;

  const modalCenterRef = useRef<HTMLDivElement | null>(null);

  const document = getDocument();
  const domTarget = document.querySelector('#footer');

  useClickAway(modalCenterRef, () => {
    onClose();
  });

  const modal = (
    <div className={classNames(style.modal)}>
      <div ref={modalCenterRef} className={classNames(style['modal__center'])}>
        {children}
      </div>
    </div>
  );

  if (domTarget) {
    return ReactDOM.createPortal(modal, domTarget);
  }

  return <></>;
}
