import { useRouter } from 'next/router';

import Box from 'components/Box';
import ExerciseList, { ExerciseListProps } from 'components/ExerciseList';
import Accords from 'components/Accords';
import routes from 'lib/routes';

import { exerciseArrToCatObj } from './exerciseArrToCatObj';

export type ExerciseListWithCatsProps = ExerciseListProps;

export default function ExerciseListWithCats(
  props: ExerciseListWithCatsProps
): React.ReactElement {
  const { exercises } = props;

  const { asPath } = useRouter();

  const currentCat = exercises.find(
    (exercise) => routes.exercise(exercise.fullSlug) === asPath
  )?.cat;

  const exercisesByCat = exerciseArrToCatObj(exercises);

  const accordsData = Object.entries(exercisesByCat).map(([cat, items]) => [
    cat,
    {
      title: cat,
      content: (
        <Box pl="base">
          <ExerciseList exercises={items} />
        </Box>
      ),
    },
  ]);

  return (
    <Accords
      defaultActive={currentCat ? [currentCat] : undefined}
      items={Object.fromEntries(accordsData)}
    />
  );
}
