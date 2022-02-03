import Modal from 'components/Modal';
import Button from 'components/Button';
import useGoToNextExercise from 'hooks/useGoToNextExercise';
import useGoToRandomExercise from 'hooks/useGoToRandomExercise';
import { Post } from 'lib/getExercises';
import Inline from 'components/Inline';
import Headline from 'components/Headline';

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
    <Modal onClose={onClose}>
      <>
        <Headline tag="h2">Congratulations!</Headline>

        <Inline gap={2}>
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
      </>
    </Modal>
  );
}
