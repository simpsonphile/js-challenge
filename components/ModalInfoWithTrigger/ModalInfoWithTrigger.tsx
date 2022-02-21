import { useState } from 'react';

import { AiOutlineQuestion } from 'react-icons/ai';

import ButtonCircle from 'components/ButtonCircle';
import ModalInfo from 'components/ModalInfo';

export default function ModalInfoWithTrigger(): React.ReactElement {
  const [isOpen, isOpenSet] = useState(false);
  return (
    <>
      <div>
        <ButtonCircle size="xs" onClick={() => isOpenSet(true)}>
          <AiOutlineQuestion stroke="2" />
        </ButtonCircle>
      </div>
      {isOpen && <ModalInfo onClose={() => isOpenSet(false)} />}
    </>
  );
}
