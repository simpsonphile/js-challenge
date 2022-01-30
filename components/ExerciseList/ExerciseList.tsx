import React from 'react';

import Link from 'components/Link';
import List from 'components/List';
import { Post } from 'lib/getExercises';

export type ExerciseListProps = {
  posts: Post[];
};

const SLUG_PREFIX = '/exercises/';

export default function ExerciseList(
  props: ExerciseListProps
): React.ReactElement {
  const { posts } = props;

  const links = React.useMemo(
    () =>
      posts.map((link) => (
        <Link key={link.slug} href={SLUG_PREFIX + link.slug}>
          {link.title}
        </Link>
      )),
    [posts]
  );

  return <List>{links}</List>;
}
