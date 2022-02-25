import { useState } from 'react';

import dynamic from 'next/dynamic';

import ButtonCircle from 'components/ButtonCircle';
import { Icon } from 'components/Icon';
import { ModalInfoProps } from 'components/ModalInfo';

const ModalInfo = dynamic<ModalInfoProps>(import('components/ModalInfo'));

export default function ModalInfoWithTrigger(): React.ReactElement {
  const [isOpen, isOpenSet] = useState(false);
  return (
    <>
      <div>
        <ButtonCircle
          size="xs"
          aria-label="see app info"
          onClick={() => isOpenSet(true)}
        >
          <Icon name="AiOutlineQuestion" stroke="2" />
        </ButtonCircle>
      </div>
      {isOpen && <ModalInfo onClose={() => isOpenSet(false)} />}
    </>
  );
}
