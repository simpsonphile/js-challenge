import React, { useContext, useState } from 'react';

import ExerciseListWithCats, {
  ExerciseListWithCatsProps,
} from 'components/ExerciseListWithCats';
import Inline from 'components/Inline';
import InputSearch from 'components/InputSearch';
import { ExerciseContext } from 'contexts/exercises';

type ExerciseListWithSearch = Omit<ExerciseListWithCatsProps, 'exercises'>;

export default function ExerciseListWithSearch(
  props: ExerciseListWithSearch
): React.ReactElement {
  const [value, valueSet] = useState('');

  const { exercises } = useContext(ExerciseContext);

  const exercisesFiltered = React.useMemo(
    () =>
      Object.values(exercises).filter(({ title }) =>
        title?.toLowerCase().includes(value.toLowerCase())
      ),
    [exercises, value]
  );

  return (
    <Inline $g="lg" $direction="column">
      <InputSearch
        value={value}
        placeholder="Adder function"
        onChange={(e) => valueSet(e.target.value)}
      />
      <ExerciseListWithCats exercises={exercisesFiltered} {...props} />
    </Inline>
  );
}
