import { useCallback, useState } from 'react';

import { Result } from 'components/Results';
import getTestWithMessages from 'lib/parseTestsDataFromString';

const checkIfAllPassed = (results?: Result[]) => {
  return (
    results &&
    results.length > 0 &&
    !results.map((result) => result.result).includes(false)
  );
};

const useExerciseEditor = (
  code: string,
  tests: string,
  onSuccess: () => void
) => {
  const [value, valueSet] = useState<string | undefined>(code);
  const [results, resultsSet] = useState<Result[] | undefined>([]);

  const testsArr = getTestWithMessages(tests);

  const onSubmit = useCallback(() => {
    const newResults = testsArr?.map(
      ({ body, failMessage, successMessage }) => {
        try {
          return { result: !!eval(value + body), failMessage, successMessage };
        } catch (error) {
          console.log(error);
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
  };

  return {
    onSubmit,
    onEditorValueChange,
    results,
  };
};

export default useExerciseEditor;
