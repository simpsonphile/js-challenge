import React from 'react';

import Link from 'components/Link';
import List from 'components/List';
import ClientOnly from 'components/ClientOnly';
import routes from 'lib/routes';
import { Exercise } from 'contexts/exercises';

export type ExerciseListProps = {
  exercises: Exercise[];
};

export default function ExerciseList(
  props: ExerciseListProps
): React.ReactElement {
  const { exercises } = props;

  const links = React.useMemo(
    () =>
      exercises.map(({ fullSlug, title, isPassed }) => (
        <ClientOnly key={fullSlug}>
          <Link
            color={isPassed ? 'valid' : undefined}
            href={fullSlug ? routes.exercise(fullSlug) : ''}
          >
            {isPassed && '✅ '}
            {title}
          </Link>
        </ClientOnly>
      )),
    [exercises]
  );

  return <List gap="xs">{links}</List>;
}
