import React from 'react';

import Link from 'components/Link';
import List from 'components/List';
import ClientOnly from 'components/ClientOnly';
import { Post } from 'lib/getExercises';
import { checkExerciseStatus } from 'lib/updateData';

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
      posts.map(({ slug, title }) => {
        const status = slug && checkExerciseStatus(slug);

        return (
          <ClientOnly key={slug}>
            <Link
              color={status ? 'green' : undefined}
              href={SLUG_PREFIX + slug}
            >
              {title}
              {status && ' ✅'}
            </Link>
          </ClientOnly>
        );
      }),
    [posts]
  );

  return <List>{links}</List>;
}
