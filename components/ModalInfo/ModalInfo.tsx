import Box from 'components/Box';
import Modal from 'components/Modal';
import Text from 'components/Text';

type ModalInfoProps = {
  onClose: () => void;
};

export default function ModalInfo(props: ModalInfoProps): React.ReactElement {
  const { onClose } = props;

  return (
    <Modal onClose={onClose}>
      <Box $bgColor="bg" $p="base">
        <Text>
          <h2>Shortcuts</h2>
          <ul>
            <li>
              focus search input: <strong>⌘ + K</strong>
            </li>
            <li>
              test code: <strong>⌘ + ⌥ + t</strong>
            </li>
            <li>
              change theme: <strong>⌘ + ⌥ + s</strong>
            </li>
            <li>
              full screen: <strong>⌘ + ⌥ + E</strong>
            </li>
          </ul>
        </Text>
      </Box>
    </Modal>
  );
}
