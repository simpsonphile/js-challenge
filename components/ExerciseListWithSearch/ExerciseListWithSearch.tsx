import React, { useContext, useState } from 'react';

import ExerciseListWithCats from 'components/ExerciseListWithCats';
import Inline from 'components/Inline';
import InputSearch from 'components/InputSearch';
import { ExerciseContext } from 'contexts/exercises';

export default function ExerciseListWithSearch(): React.ReactElement {
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
    <Inline $g="base" $direction="column">
      <InputSearch value={value} onChange={(e) => valueSet(e.target.value)} />
      <ExerciseListWithCats exercises={exercisesFiltered} />
    </Inline>
  );
}
