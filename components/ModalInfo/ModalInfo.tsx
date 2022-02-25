import React from 'react';

import Box, { BoxDefault } from 'components/Box';
import Headline from 'components/Headline';
import Inline from 'components/Inline';
import { Kbd } from 'components/Kbd';
import Modal from 'components/Modal';

export type ModalInfoProps = {
  onClose: () => void;
};

const items = [
  {
    title: 'focus search input',
    keys: ['⌘', 'K'],
  },
  {
    title: 'test code',
    keys: ['⌘', '⌥', 't'],
  },
  {
    title: 'change theme',
    keys: ['⌘', '⌥', 's'],
  },
  {
    title: 'full screen',
    keys: ['⌘', '⌥', 'E'],
  },
];

export default function ModalInfo(props: ModalInfoProps): React.ReactElement {
  const { onClose } = props;

  const elements = React.useMemo(
    () =>
      items.map(({ title, keys }) => (
        <div key={title}>
          <Box $mb="s">
            <Headline $fs="base">{title}:</Headline>
          </Box>

          <Inline $g="xs">
            {keys.map((key) => (
              <Kbd key={key}>{key}</Kbd>
            ))}
          </Inline>
        </div>
      )),
    []
  );

  return (
    <Modal onClose={onClose}>
      <BoxDefault>
        <Inline $g="lg" $direction="column">
          <Headline>Shortcuts</Headline>
          <Inline $g="base" $direction="column">
            {elements}
          </Inline>
        </Inline>
      </BoxDefault>
    </Modal>
  );
}
