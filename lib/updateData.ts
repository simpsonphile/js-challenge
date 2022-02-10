type ExerciseStatuses = Record<string, boolean>;

const KEY = 'EXERCISES_STATUS';

const updateLocalStorageExercisesData = (slug: string, status: boolean) => {
  if (typeof window !== 'object') return;

  const exercisesStatusDatabase = window.localStorage.getItem(KEY);

  const exercisesStatusDatabaseParsed: ExerciseStatuses = JSON.parse(
    exercisesStatusDatabase || '{}'
  );

  exercisesStatusDatabaseParsed[slug] = status;

  window.localStorage.setItem(
    KEY,
    JSON.stringify(exercisesStatusDatabaseParsed)
  );
};

const getExerciseStatuses = (): ExerciseStatuses => {
  if (typeof window !== 'object') return {};
  const exercisesStatusDatabase = window.localStorage.getItem(KEY);

  return exercisesStatusDatabase ? JSON.parse(exercisesStatusDatabase) : false;
};

export default updateLocalStorageExercisesData;
export { getExerciseStatuses };
