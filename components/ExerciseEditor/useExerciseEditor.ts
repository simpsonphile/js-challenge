import { useCallback, useContext, useEffect, useState } from 'react';

import { Result } from 'components/Results';
import { ExerciseContext } from 'contexts/exercises';
import getTestWithMessages from 'lib/parseTestsDataFromString';

const checkIfAllPassed = (results?: Result[]) => {
  return (
    results &&
    results.length > 0 &&
    !results.map((result) => result.result).includes(false)
  );
};

const useExerciseEditor = (onSuccess: () => void, id: string) => {
  const [results, resultsSet] = useState<Result[] | undefined>([]);
  const { getExerciseById, setExerciseCode } = useContext(ExerciseContext);
  const exercise = getExerciseById(id);
  const { userCode, code, tests } = exercise || {};
  const startingCode = userCode || code;
  const [value, valueSet] = useState<string | undefined>(startingCode);

  const testsArr = getTestWithMessages(tests || '');

  const onSubmit = useCallback(() => {
    const newResults = testsArr?.map(
      ({ body, failMessage, successMessage }) => {
        try {
          return { result: !!eval(value + body), failMessage, successMessage };
        } catch (error) {
          return { result: false, failMessage };
        }
      }
    );

    if (checkIfAllPassed(newResults)) {
      onSuccess?.();
      resultsSet([]);
    } else {
      resultsSet(newResults);
    }
  }, [onSuccess, value, testsArr]);

  const onEditorValueChange = (val: string) => {
    valueSet(val);
    setExerciseCode(id, val);
  };

  useEffect(() => {
    if (id) {
      resultsSet([]);
      valueSet(startingCode);
    }
  }, [id, startingCode]);

  return {
    onSubmit,
    onEditorValueChange,
    results,
    value,
  };
};

export default useExerciseEditor;
