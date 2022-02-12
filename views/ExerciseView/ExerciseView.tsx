import { useCallback, useContext, useState } from 'react';

import ModalExerciseCompleted from 'components/ModalExerciseCompleted';
import updateLocalStorageExercisesData from 'lib/updateData';
import { ExerciseContext } from 'contexts/exercises';
import FullScreen from 'components/FullScreen';

import Header from './components/Header';
import Tabs from './components/Tabs';

type ExerciseViewProps = {
  id: string;
};

export default function ExerciseLayout(
  props: ExerciseViewProps
): React.ReactElement {
  const { id } = props;

  const [showModal, showModalSet] = useState(false);
  const [isFullScreen, isFullScreenSet] = useState(false);
  const toggleFullScreen = () => isFullScreenSet(!isFullScreen);

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
    showModalSet(true);
  };

  return (
    <FullScreen toggle={isFullScreenSet} state={isFullScreen}>
      <>
        {title && <Header title={title} isPassed={isPassed} />}

        <Tabs
          {...exercise}
          onSuccess={onSuccess}
          toggleFullScreen={toggleFullScreen}
        />

        {fullSlug && showModal && (
          <ModalExerciseCompleted
            exercises={exercises}
            slug={fullSlug}
            onClose={() => showModalSet(false)}
          />
        )}
      </>
    </FullScreen>
  );
}
