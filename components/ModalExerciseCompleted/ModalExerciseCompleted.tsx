import Modal from 'components/Modal';
import useGoToNextExercise from 'hooks/useGoToNextExercise';
import useGoToRandomExercise from 'hooks/useGoToRandomExercise';
import { Post } from 'lib/getExercises';
import React from 'react';

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
      <div>
        <h2>Congratulations!</h2>
        <button
          onClick={() => {
            goToNextExercise?.();
            onClose();
          }}
        >
          Go to next exercise
        </button>
        <button
          onClick={() => {
            goToRandomExercise?.();
            onClose();
          }}
        >
          Go to random exercise
        </button>
      </div>
    </Modal>
  );
}
