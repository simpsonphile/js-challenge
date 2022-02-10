import { useRouter } from 'next/router';

import { Exercise } from 'lib/getExercises';
import routes from 'lib/routes';

const useGoToNextExercise = (exercises: Exercise[], fullSlug?: string) => {
  const router = useRouter();

  if (!fullSlug) return;

  const index = exercises.findIndex(
    (exercise) => exercise.fullSlug === fullSlug
  );

  const nextSlug = exercises?.[index + 1]?.fullSlug;

  if (nextSlug) {
    return () => router.push(routes.exercise(nextSlug));
  }
};

export default useGoToNextExercise;
