import React from 'react';

import Link from 'components/Link';
import List from 'components/List';
import ClientOnly from 'components/ClientOnly';
import { Exercise } from 'lib/getExercises';
import { checkExerciseStatus } from 'lib/updateData';

export type ExerciseListProps = {
  exercises: Exercise[];
};

const SLUG_PREFIX = '/exercises/';

export default function ExerciseList(
  props: ExerciseListProps
): React.ReactElement {
  const { exercises } = props;

  const links = React.useMemo(
    () =>
      exercises.map(({ slug, title }) => {
        const status = slug && checkExerciseStatus(slug);

        return (
          <ClientOnly key={slug}>
            <Link
              color={status ? 'valid' : undefined}
              href={SLUG_PREFIX + slug}
            >
              {status && '✅ '}
              {title}
            </Link>
          </ClientOnly>
        );
      }),
    [exercises]
  );

  return <List>{links}</List>;
}
