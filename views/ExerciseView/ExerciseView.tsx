import { useCallback, useContext, useState } from 'react';

import ModalExerciseCompleted from 'components/ModalExerciseCompleted';
import updateLocalStorageExercisesData from 'lib/updateData';

import Header from './components/Header';
import Tabs from './components/Tabs';
import { ExerciseContext } from 'contexts/exercises';

type ExerciseViewProps = {
  id: string;
};

export default function ExerciseLayout(
  props: ExerciseViewProps
): React.ReactElement {
  const { id } = props;

  const [showModal, showModalSet] = useState(false);

  const { getExerciseById, exercises } = useContext(ExerciseContext);

  const exercise = getExerciseById(id);

  const { slug, isPassed, title, code, tests, solution, hints } =
    exercise || {};

  const makeExerciseCompleted = useCallback(() => {
    if (slug) {
      updateLocalStorageExercisesData(slug, true);
    }
  }, [slug]);

  const onSuccess = () => {
    makeExerciseCompleted();
    showModalSet(true);
  };

  return (
    <div>
      {title && <Header title={title} isPassed={isPassed} />}

      <Tabs
        code={code}
        tests={tests}
        onSuccess={onSuccess}
        solution={solution}
        isPassed={isPassed}
        hints={hints}
      />

      {slug && showModal && (
        <ModalExerciseCompleted
          exercises={exercises}
          slug={slug}
          onClose={() => showModalSet(false)}
        />
      )}
    </div>
  );
}
