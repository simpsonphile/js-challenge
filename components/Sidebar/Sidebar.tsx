import ExerciseList, { ExerciseListProps } from 'components/ExerciseList';
import React from 'react';

type SidebarProps = ExerciseListProps;

export default function Sidebar(props: SidebarProps): React.ReactElement {
  const { posts } = props;

  return (
    <div>
      <ExerciseList posts={posts} />
    </div>
  );
}
