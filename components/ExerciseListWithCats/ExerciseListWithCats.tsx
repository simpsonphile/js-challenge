import Box from 'components/Box';
import ExerciseList, { ExerciseListProps } from 'components/ExerciseList';
import Headline from 'components/Headline';
import List from 'components/List';
import { exerciseArrToCatObj } from './exerciseArrToCatObj';

export type ExerciseListWithCatsProps = ExerciseListProps;

export default function ExerciseListWithCats(
  props: ExerciseListWithCatsProps
): React.ReactElement {
  const { exercises } = props;

  const x = exerciseArrToCatObj(exercises);

  const a = Object.entries(x).map(([cat, items]) => (
    <>
      <Box bgColor="bgAccent" p="s base" mb="base">
        <Headline>{cat}</Headline>
      </Box>
      <Box pl="base">
        <ExerciseList exercises={items} />
      </Box>
    </>
  ));

  return <List gap="lg">{a}</List>;
}
