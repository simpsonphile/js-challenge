import getLSData from 'helpers/getLSData';

type ExerciseStatuses = Record<string, boolean>;

const KEY = 'EXERCISES_STATUS';

const updateExercisesStatus = (slug: string, status: boolean) => {
  const exercisesStatusDatabase = getLSData(KEY) || {};

  exercisesStatusDatabase[slug] = status;

  window.localStorage.setItem(KEY, JSON.stringify(exercisesStatusDatabase));
};

const getExerciseStatuses = (): ExerciseStatuses => {
  const exercisesStatusDatabase = getLSData(KEY);

  return exercisesStatusDatabase ? JSON.parse(exercisesStatusDatabase) : {};
};

export default updateExercisesStatus;
export { getExerciseStatuses };
