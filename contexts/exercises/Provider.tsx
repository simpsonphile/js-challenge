import { getExerciseStatuses } from 'lib/updateData';

import { ExerciseContext, Exercise, ExerciseContextType } from './context';

type ProviderProps = {
  exercises: Exercise[];
  children: React.ReactElement;
};

export default function Provider(props: ProviderProps): React.ReactElement {
  const { exercises, children } = props;

  const statuses = getExerciseStatuses();

  const exercisesWithStatuses = exercises.map((exercise) => ({
    ...exercise,
    isPassed: statuses[exercise.id],
  }));

  const getExerciseById = (id: string) =>
    exercises.find((exercise) => exercise.id === id);

  const getCompletedExercisesCount = () => Object.keys(statuses).length;

  const getCategoryCompletedExercisesCount = (category: string) =>
    exercisesWithStatuses.filter(
      (exercise) => exercise.cat === category && exercise.isPassed
    ).length;

  const getCategoryExercisesCount = (category: string) =>
    exercises.filter((exercise) => exercise.cat === category).length;

  const value: ExerciseContextType = {
    exercises: exercisesWithStatuses,
    getExerciseById,
    getCompletedExercisesCount,
    getCategoryCompletedExercisesCount,
    getCategoryExercisesCount,
  };

  return (
    <ExerciseContext.Provider value={value}>
      {children}
    </ExerciseContext.Provider>
  );
}
