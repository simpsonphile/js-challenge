import Box from 'components/Box';
import Button from 'components/Button';
import Headline from 'components/Headline';
import Inline from 'components/Inline';
import Modal from 'components/Modal';
import useGoToNextExercise from 'hooks/useGoToNextExercise';
import useGoToRandomExercise from 'hooks/useGoToRandomExercise';
import { Exercise } from 'lib/getExercises';

type ModalExerciseCompletedProps = {
  exercises: Exercise[];
  slug: string;
  onClose: () => void;
};

export default function ModalExerciseCompleted(
  props: ModalExerciseCompletedProps
): React.ReactElement {
  const { exercises, slug, onClose } = props;

  // merge
  const goToNextExercise = useGoToNextExercise(exercises, slug);
  const goToRandomExercise = useGoToRandomExercise(exercises, slug);

  return (
    <Modal onClose={onClose}>
      <Box $bgColor="bg" $p="base">
        <Box $mb="base">
          <Headline tag="h2" $scale="xl">
            Congratulations!
          </Headline>
        </Box>

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
            variant="secondary"
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
