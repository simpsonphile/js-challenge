import DefaultLayout from 'layouts/DefaultLayout';
import Sidebar from 'components/Sidebar';
import HomeView from 'views/HomeView';
import { Exercise, getAllExercises } from 'lib/getExercises';
import { GetStaticProps } from 'next';

type ExercisePageProps = {
  exercises: Exercise[];
};

export default function Home(props: ExercisePageProps) {
  const { exercises } = props;

  return (
    <DefaultLayout sidebar={<Sidebar exercises={exercises} />}>
      <HomeView></HomeView>
    </DefaultLayout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const exerciseKeys = ['title', 'slug'];
  const exercises = getAllExercises(exerciseKeys);

  return {
    props: {
      exercises,
    },
  };
};
