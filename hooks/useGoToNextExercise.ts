import { useRouter } from 'next/router';

import { Exercise } from 'lib/getExercises';
import routes from 'lib/routes';

const useGoToNextExercise = (exercises: Exercise[], slug?: string) => {
  const router = useRouter();

  if (!slug) return;

  const index = exercises.findIndex((exercise) => exercise.slug === slug);

  const nextSlug = exercises?.[index + 1]?.slug;

  if (nextSlug) {
    return () => router.push(routes.exercise(nextSlug));
  }
};

export default useGoToNextExercise;
