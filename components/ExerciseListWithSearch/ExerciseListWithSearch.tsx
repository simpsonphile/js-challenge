import React, { useState } from 'react';

import Search from 'components/Search';
import ExerciseList, { ExerciseListProps } from 'components/ExerciseList';

import { StyledExerciseListSearch } from './ExerciseListWithSearch.styles';

export type ExerciseListWithSearchProps = ExerciseListProps;

export default function ExerciseListWithSearch(
  props: ExerciseListWithSearchProps
): React.ReactElement {
  const { posts } = props;

  const [value, valueSet] = useState('');

  const postsFiltered = React.useMemo(
    () =>
      posts.filter(({ title }) =>
        title?.toLowerCase().includes(value.toLowerCase())
      ),
    [posts, value]
  );

  return (
    <div>
      <StyledExerciseListSearch>
        <Search value={value} onChange={(e) => valueSet(e.target.value)} />
      </StyledExerciseListSearch>
      <ExerciseList posts={postsFiltered} />
    </div>
  );
}
