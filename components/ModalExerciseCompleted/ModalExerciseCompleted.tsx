import Modal from 'components/Modal';
import Button from 'components/Button';
import useGoToNextExercise from 'hooks/useGoToNextExercise';
import useGoToRandomExercise from 'hooks/useGoToRandomExercise';
import { Exercise } from 'lib/getExercises';
import Inline from 'components/Inline';
import Headline from 'components/Headline';
import Box from 'components/Box';

type ModalExerciseCompletedProps = {
  exercises: Exercise[];
  slug: string;
  onClose: () => void;
};

export default function ModalExerciseCompleted(
  props: ModalExerciseCompletedProps
): React.ReactElement {
  const { exercises, slug, onClose } = props;

  const goToNextExercise = useGoToNextExercise(exercises, slug);
  const goToRandomExercise = useGoToRandomExercise(exercises, slug);

  return (
    <Modal onClose={onClose}>
      <Box bgColor="white">
        <Headline tag="h2" scale="xl">
          Congratulations!
        </Headline>

        <Inline gap="s">
          <Button
            onClick={() => {
              goToNextExercise?.();
              onClose();
            }}
          >
            Go to next exercise
          </Button>

          <Button
            genre="secondary"
            onClick={() => {
              goToRandomExercise?.();
              onClose();
            }}
          >
            Go to random exercise
          </Button>
        </Inline>
      </Box>
    </Modal>
  );
}
