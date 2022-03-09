import { MutableRefObject, useEffect, useMemo, useRef } from 'react';

import { useRouter } from 'next/router';

import Accords, { AccordsHandle } from 'components/Accords';
import Box from 'components/Box';
import ExerciseList, { ExerciseListProps } from 'components/ExerciseList';
import routes from 'lib/routes';

import { exerciseArrToCatObj } from './exerciseArrToCatObj';

export type ExerciseListWithCatsProps = ExerciseListProps;

export default function ExerciseListWithCats(
  props: ExerciseListWithCatsProps
): React.ReactElement {
  const { exercises, onLinkClick } = props;

  const { asPath } = useRouter();

  const accordsRef = useRef<AccordsHandle>() as MutableRefObject<AccordsHandle>;

  const currentCat = exercises.find(
    (exercise) => routes.exercise(exercise.fullSlug) === asPath
  )?.cat;

  const exercisesByCat = exerciseArrToCatObj(exercises);

  useEffect(() => {
    if (currentCat) {
      accordsRef.current.turnOn(currentCat);
    }
  }, [currentCat]);

  const accordsData = useMemo(
    () =>
      Object.entries(exercisesByCat).map(([cat, items]) => {
        return [
          cat,
          {
            title: cat,
            content: (
              <Box $pl="base">
                <ExerciseList exercises={items} onLinkClick={onLinkClick} />
              </Box>
            ),
          },
        ];
      }),
    [exercisesByCat]
  );

  const items = Object.fromEntries(accordsData);

  return (
    <Accords
      ref={accordsRef}
      defaultActive={currentCat ? [currentCat] : undefined}
      items={items}
    />
  );
}
