import useExerciseData from 'hooks/useExerciseData';

import { ExerciseContext, Exercise, ExerciseContextType } from './context';

type ProviderProps = {
  exercises: Exercise[];
  children: React.ReactElement;
};

export default function Provider(props: ProviderProps): React.ReactElement {
  const { exercises, children } = props;

  const [statuses, setExerciseStatus] =
    useExerciseData<boolean>('EXERCISES_STATUS');
  const [userCodes, setExerciseCode] =
    useExerciseData<string>('EXERCISES_CODE');

  const exercisesWithLSData = exercises.map((exercise) => ({
    ...exercise,
    isPassed: statuses[exercise.id],
    userCode: userCodes[exercise.id],
  }));

  const getExerciseById = (id: string) =>
    exercisesWithLSData.find((exercise) => exercise.id === id);

  const getCompletedExercisesCount = () => Object.keys(statuses).length;

  const getCategoryCompletedExercisesCount = (category: string) =>
    exercisesWithLSData.filter(
      (exercise) => exercise.cat === category && exercise.isPassed
    ).length;

  const getCategoryExercisesCount = (category: string) =>
    exercises.filter((exercise) => exercise.cat === category).length;

  const value: ExerciseContextType = {
    exercises: exercisesWithLSData,
    getExerciseById,
    getCompletedExercisesCount,
    getCategoryCompletedExercisesCount,
    getCategoryExercisesCount,
    setExerciseStatus,
    setExerciseCode,
  };

  return (
    <ExerciseContext.Provider value={value}>
      {children}
    </ExerciseContext.Provider>
  );
}
