import { useLocalStorage } from 'react-use';

type UseExerciseDataKey = 'EXERCISES_STATUS' | 'EXERCISES_CODE';

type UseExerciseDataReturnTuple<T> = [
  Record<string, T>,
  (slug: string, data: T) => void
];

function useExerciseData<T>(key: UseExerciseDataKey) {
  const defaultState: Record<string, T> = {};
  const [value, setValue] = useLocalStorage(key, defaultState);

  const updateExerciseData = (slug: string, data: T) => {
    setValue({
      ...value,
      [slug]: data,
    });
  };

  return [value, updateExerciseData] as UseExerciseDataReturnTuple<T>;
}

export default useExerciseData;
