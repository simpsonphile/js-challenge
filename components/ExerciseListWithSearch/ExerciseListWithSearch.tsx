import React, { useContext, useState } from 'react';

import ExerciseListWithCats from 'components/ExerciseListWithCats';
import InputSearch from 'components/InputSearch';
import { ExerciseContext } from 'contexts/exercises';

import { StyledExerciseListSearch } from './ExerciseListWithSearch.styles';

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
    <div>
      <StyledExerciseListSearch>
        <InputSearch value={value} onChange={(e) => valueSet(e.target.value)} />
      </StyledExerciseListSearch>
      <ExerciseListWithCats exercises={exercisesFiltered} />
    </div>
  );
}
