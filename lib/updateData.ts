type ExercisesStatusDatabase = { [key: string]: boolean };

const KEY = 'EXERCISES_STATUS';

const updateLocalStorageExercisesData = (slug: string, status: boolean) => {
  if (typeof window === 'object') {
    const exercisesStatusDatabase = window.localStorage.getItem(KEY);

    const exercisesStatusDatabaseParsed: ExercisesStatusDatabase = JSON.parse(
      exercisesStatusDatabase || '{}'
    );
    exercisesStatusDatabaseParsed[slug] = status;
    window.localStorage.setItem(
      KEY,
      JSON.stringify(exercisesStatusDatabaseParsed)
    );
  }
};

type ExerciseStatuses = { [key: string]: boolean };

const getExerciseStatuses = (): ExerciseStatuses => {
  if (typeof window === 'object') {
    const exercisesStatusDatabase = window.localStorage.getItem(KEY);

    return exercisesStatusDatabase
      ? JSON.parse(exercisesStatusDatabase)
      : false;
  }

  return {};
};

const checkExerciseStatus = (slug: string) => {
  const statuses = getExerciseStatuses();
  return statuses?.[slug];
};

export default updateLocalStorageExercisesData;
export { checkExerciseStatus, getExerciseStatuses };
