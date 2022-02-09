import React from 'react';

import Link from 'components/Link';
import List from 'components/List';
import ClientOnly from 'components/ClientOnly';
import { Exercise } from 'lib/getExercises';
import { checkExerciseStatus } from 'lib/updateData';
import routes from 'lib/routes';

export type ExerciseListProps = {
  exercises: Exercise[];
};

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
              href={slug ? routes.exercise(slug) : ''}
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
