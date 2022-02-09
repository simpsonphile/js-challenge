import { GetStaticProps } from 'next';

import { getExerciseBySlug, getAllExercises } from 'lib/getExercises';
import ExerciseView from 'views/ExerciseView';

import { Exercise } from 'lib/getExercises';
import DefaultLayout from 'layouts/DefaultLayout';
import Sidebar from 'components/Sidebar';

type ExercisePageProps = {
  exercises: Exercise[];
  exercise: Exercise;
};

export default function ExercisePage({
  exercise,
  exercises,
}: ExercisePageProps) {
  return (
    <DefaultLayout sidebar={<Sidebar exercises={exercises} />}>
      <ExerciseView exercises={exercises} {...exercise} />
    </DefaultLayout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const exerciseKeys = [
    'title',
    'slug',
    'code',
    'solution',
    'hints',
    'description',
    'tests',
  ];
  const exercises = getAllExercises(exerciseKeys);

  const slug = params?.slug as string;
  const exercise: { [key: string]: string } = getExerciseBySlug(
    slug,
    exerciseKeys
  );

  return {
    props: {
      exercises,
      exercise: {
        ...exercise,
      },
    },
  };
};

export async function getStaticPaths() {
  const exercises = getAllExercises(['slug']);

  return {
    paths: exercises.map((exercise) => {
      return {
        params: {
          slug: exercise.slug,
        },
      };
    }),
    fallback: false,
  };
}
