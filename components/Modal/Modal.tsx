import MuiModal, { ModalProps } from '@mui/material/Modal';
import Box from '@mui/material/Box';
import * as ReactDOM from 'react-dom';
import { getDocument } from 'ssr-window';

import styles from './index.module.scss';

export default function Modal(props: ModalProps): React.ReactElement {
  const { children, ...rest } = props;
  const document = getDocument();
  const domTarget = document.querySelector('#footer');

  const modal = (
    <MuiModal {...rest}>
      <Box className={styles['modal__center']}>{children}</Box>
    </MuiModal>
  );

  if (domTarget) {
    return ReactDOM.createPortal(modal, domTarget);
  }

  return <></>;
}
