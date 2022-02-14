import { useCallback, useContext, useState } from 'react';

import FullScreen from 'components/FullScreen';
import ModalExerciseCompleted from 'components/ModalExerciseCompleted';
import { ExerciseContext } from 'contexts/exercises';
import updateLocalStorageExercisesData from 'lib/updateData';

import Header from './components/Header';
import Tabs from './components/Tabs';

type ExerciseViewProps = {
  id: string;
};

export default function ExerciseLayout(
  props: ExerciseViewProps
): React.ReactElement {
  const { id } = props;

  const [isModalShown, isModalShownSet] = useState(false);

  const { getExerciseById, exercises } = useContext(ExerciseContext);

  const exercise = getExerciseById(id);

  const { fullSlug, isPassed, title } = exercise || {};

  const makeExerciseCompleted = useCallback(() => {
    if (id) {
      updateLocalStorageExercisesData(id, true);
    }
  }, [id]);

  const onSuccess = () => {
    makeExerciseCompleted();
    isModalShownSet(true);
  };

  return (
    <FullScreen>
      <>
        {title && <Header isPassed={isPassed} title={title} />}

        <Tabs {...exercise} onSuccess={onSuccess} />

        {fullSlug && isModalShown && (
          <ModalExerciseCompleted
            exercises={exercises}
            slug={fullSlug}
            onClose={() => isModalShownSet(false)}
          />
        )}
      </>
    </FullScreen>
  );
}
