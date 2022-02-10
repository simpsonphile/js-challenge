import { GetStaticProps } from 'next';

import { getAllExercises, Exercise } from 'lib/getExercises';
import ExerciseView from 'views/ExerciseView';
import DefaultLayout from 'layouts/DefaultLayout';
import Sidebar from 'components/Sidebar';
import { ExercisesProvider } from 'contexts/exercises';

type ExercisePageProps = {
  exercises: Exercise[];
  exercise: Exercise;
};

export default function ExercisePage({
  exercise,
  exercises,
}: ExercisePageProps) {
  return (
    <ExercisesProvider exercises={exercises}>
      <DefaultLayout sidebar={<Sidebar />}>
        <ExerciseView id={exercise.id} />
      </DefaultLayout>
    </ExercisesProvider>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const exercises = getAllExercises([
    'title',
    'code',
    'solution',
    'hints',
    'tests',
    'cat',
  ]);

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
