import Box from 'components/Box';
import ExerciseList, { ExerciseListProps } from 'components/ExerciseList';
import Accords from 'components/Accords';
import { exerciseArrToCatObj } from './exerciseArrToCatObj';

export type ExerciseListWithCatsProps = ExerciseListProps;

export default function ExerciseListWithCats(
  props: ExerciseListWithCatsProps
): React.ReactElement {
  const { exercises } = props;

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

  return <Accords items={Object.fromEntries(accordsData)} />;
}
