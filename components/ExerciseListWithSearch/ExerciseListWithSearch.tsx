import React, { useState } from 'react';

import InputSearch from 'components/InputSearch';
import ExerciseList, { ExerciseListProps } from 'components/ExerciseList';

import { StyledExerciseListSearch } from './ExerciseListWithSearch.styles';

export type ExerciseListWithSearchProps = ExerciseListProps;

export default function ExerciseListWithSearch(
  props: ExerciseListWithSearchProps
): React.ReactElement {
  const { exercises } = props;

  const [value, valueSet] = useState('');

  const exercisesFiltered = React.useMemo(
    () =>
      exercises.filter(({ title }) =>
        title?.toLowerCase().includes(value.toLowerCase())
      ),
    [exercises, value]
  );

  return (
    <div>
      <StyledExerciseListSearch>
        <InputSearch value={value} onChange={(e) => valueSet(e.target.value)} />
      </StyledExerciseListSearch>
      <ExerciseList exercises={exercisesFiltered} />
    </div>
  );
}
