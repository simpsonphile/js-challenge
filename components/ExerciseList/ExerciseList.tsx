import React from 'react';

import ClientOnly from 'components/ClientOnly';
import Link from 'components/Link';
import List from 'components/List';
import { Exercise } from 'contexts/exercises';
import routes from 'lib/routes';

export type ExerciseListProps = {
  exercises: Exercise[];
  onLinkClick?: () => void;
};

export default function ExerciseList(
  props: ExerciseListProps
): React.ReactElement {
  const { exercises, onLinkClick } = props;

  const links = React.useMemo(
    () =>
      exercises.map(({ fullSlug, title, isPassed }, id) => ({
        id: id.toString(),
        el: (
          <ClientOnly key={fullSlug}>
            <Link
              $color={isPassed ? 'valid' : undefined}
              href={fullSlug ? routes.exercise(fullSlug) : ''}
              onClick={onLinkClick}
            >
              {isPassed && '✅ '}
              {title}
            </Link>
          </ClientOnly>
        ),
      })),
    [exercises, onLinkClick]
  );

  return <List gap="xs" items={links} />;
}
