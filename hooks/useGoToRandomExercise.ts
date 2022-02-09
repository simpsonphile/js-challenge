import { useRouter } from 'next/router';

import { Exercise } from 'lib/getExercises';
import { getExerciseStatuses } from 'lib/updateData';
import shuffle from 'lodash/shuffle';
import routes from 'lib/routes';

const useGoToNextExercise = (exercises: Exercise[], slug?: string) => {
  const router = useRouter();

  if (!slug) return;

  const statuses = getExerciseStatuses();

  const exercisesWithStatus = exercises.map((exercise) => ({
    ...exercise,
    isPassed: exercise.slug ? !!statuses?.[exercise.slug] : false,
  }));

  const shuffledExercisesWithStatus = shuffle(exercisesWithStatus);

  const nextExercise = shuffledExercisesWithStatus.find(
    (exercise) => !exercise.isPassed
  );
  const nextSlug = nextExercise?.slug;

  if (nextSlug) {
    return () => router.push(routes.exercise(nextSlug));
  }
};

export default useGoToNextExercise;
