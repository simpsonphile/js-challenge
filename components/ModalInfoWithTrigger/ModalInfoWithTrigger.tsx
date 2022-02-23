import { useState } from 'react';

import ButtonCircle from 'components/ButtonCircle';
import { Icon } from 'components/Icon';
import ModalInfo from 'components/ModalInfo';

export default function ModalInfoWithTrigger(): React.ReactElement {
  const [isOpen, isOpenSet] = useState(false);
  return (
    <>
      <div>
        <ButtonCircle size="xs" onClick={() => isOpenSet(true)}>
          <Icon name="AiOutlineQuestion" stroke="2" />
        </ButtonCircle>
      </div>
      {isOpen && <ModalInfo onClose={() => isOpenSet(false)} />}
    </>
  );
}
