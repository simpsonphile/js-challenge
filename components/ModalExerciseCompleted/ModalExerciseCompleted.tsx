import Button from '@mui/material/Button';

import Modal from 'components/Modal';
import useGoToNextExercise from 'hooks/useGoToNextExercise';
import useGoToRandomExercise from 'hooks/useGoToRandomExercise';
import { Post } from 'lib/getExercises';

type ModalExerciseCompletedProps = {
  posts: Post[];
  slug: string;
  onClose: () => void;
};

export default function ModalExerciseCompleted(
  props: ModalExerciseCompletedProps
): React.ReactElement {
  const { posts, slug, onClose } = props;

  const goToNextExercise = useGoToNextExercise(posts, slug);
  const goToRandomExercise = useGoToRandomExercise(posts, slug);

  return (
    <Modal open={true} onClose={onClose}>
      <>
        <h2>Congratulations!</h2>
        <Button
          variant="contained"
          onClick={() => {
            goToNextExercise?.();
            onClose();
          }}
        >
          Go to next exercise
        </Button>

        <Button
          variant="outlined"
          onClick={() => {
            goToRandomExercise?.();
            onClose();
          }}
        >
          Go to random exercise
        </Button>
      </>
    </Modal>
  );
}
