import { GetStaticProps } from 'next';

import { Head } from 'components/Head';
import { ExercisesProvider } from 'contexts/exercises';
import { FullScreensProvider } from 'contexts/fullScreen';
import DefaultLayout from 'layouts/DefaultLayout';
import { getAllExercises, Exercise } from 'lib/getExercises';
import ExerciseView from 'views/ExerciseView';

type ExercisePageProps = {
  exercises: Exercise[];
  exercise: Exercise;
};

export default function ExercisePage({
  exercise,
  exercises,
}: ExercisePageProps) {
  return (
    <>
      <Head title={exercise.title} description={exercise.description} />
      <ExercisesProvider exercises={exercises}>
        <FullScreensProvider>
          <DefaultLayout>
            <ExerciseView id={exercise.id} />
          </DefaultLayout>
        </FullScreensProvider>
      </ExercisesProvider>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const exercises = getAllExercises(['title', 'code', 'hints', 'tests', 'cat']);

  const fullSlug = (
    Array.isArray(params?.slug) ? params?.slug.join('/') : params?.slug
  ) as string;

  const exercise = exercises.find((exp) => {
    return exp.fullSlug === fullSlug;
  });

  return {
    props: {
      exercises,
      exercise,
    },
  };
};

export async function getStaticPaths() {
  const exercises = getAllExercises(['cat']);

  return {
    paths: exercises.map(({ cat, slug }) => {
      return {
        params: {
          slug: [cat, slug].filter((el) => el),
        },
      };
    }),
    fallback: false,
  };
}
