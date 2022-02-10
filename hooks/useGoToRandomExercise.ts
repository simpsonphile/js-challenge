import { useRouter } from 'next/router';
import shuffle from 'lodash/shuffle';

import { Exercise } from 'contexts/exercises';
import routes from 'lib/routes';

const useGoToNextExercise = (exercises: Exercise[], slug?: string) => {
  const router = useRouter();

  if (!slug) return;

  const shuffledExercises = shuffle(exercises);

  const nextExercise = shuffledExercises.find((exercise) => !exercise.isPassed);
  const nextSlug = nextExercise?.fullSlug;

  if (nextSlug) {
    return () => router.push(routes.exercise(nextSlug));
  }
};

export default useGoToNextExercise;
