import {
  MutableRefObject,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import { useRouter } from 'next/router';

import ClientOnly from 'components/ClientOnly';
import Box from 'components/Box';
import ExerciseList, { ExerciseListProps } from 'components/ExerciseList';
import Accords, { AccordsHandle } from 'components/Accords';
import routes from 'lib/routes';
import { ExerciseContext } from 'contexts/exercises';

import { exerciseArrToCatObj } from './exerciseArrToCatObj';

export type ExerciseListWithCatsProps = ExerciseListProps;

export default function ExerciseListWithCats(
  props: ExerciseListWithCatsProps
): React.ReactElement {
  const { exercises } = props;

  const { asPath } = useRouter();
  const { getCategoryExercisesCount, getCategoryCompletedExercisesCount } =
    useContext(ExerciseContext);
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
        const allExercises = getCategoryExercisesCount(cat);
        const passedExercises = getCategoryCompletedExercisesCount(cat);
        const title = (
          <ClientOnly>
            <span>{`${cat} [${passedExercises} / ${allExercises}]`}</span>
          </ClientOnly>
        );
        return [
          cat,
          {
            title,
            content: (
              <Box pl="base">
                <ExerciseList exercises={items} />
              </Box>
            ),
          },
        ];
      }),
    [
      exercisesByCat,
      getCategoryCompletedExercisesCount,
      getCategoryExercisesCount,
    ]
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
