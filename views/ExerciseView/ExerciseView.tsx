import { useCallback, useState } from 'react';

import ModalExerciseCompleted from 'components/ModalExerciseCompleted';
import updateLocalStorageExercisesData, {
  checkExerciseStatus,
} from 'lib/updateData';
import { Exercise } from 'lib/getExercises';

import Header from './components/Header';
import Tabs from './components/Tabs';

type ExerciseViewProps = Exercise & { exercises: Exercise[] };

export default function ExerciseLayout(
  props: ExerciseViewProps
): React.ReactElement {
  const { title, code, solution, hints, tests, slug, exercises } = props;

  const [showModal, showModalSet] = useState(false);

  const isPassed = slug ? checkExerciseStatus(slug) : false;

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
