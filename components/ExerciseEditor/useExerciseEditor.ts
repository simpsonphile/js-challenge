import { useCallback, useState } from 'react';

import { Result } from 'components/Results';
import getTestWithMessages from 'lib/parseTestsDataFromString';

const useExerciseEditor = (
  code: string,
  tests: string,
  onSuccess: () => void
) => {
  const [value, valueSet] = useState<string | undefined>(code);
  const [results, resultsSet] = useState<Result[] | undefined>([]);

  const testsArr = getTestWithMessages(tests);

  const isAllPassed =
    results &&
    results.length > 0 &&
    !results.map((result) => result.result).includes(false);

  const onSubmit = useCallback(() => {
    if (isAllPassed) {
      onSuccess?.();
    } else {
      const results = testsArr?.map(({ body, failMessage, successMessage }) => {
        try {
          return { result: !!eval(value + body), failMessage, successMessage };
        } catch (error) {
          console.log(error);
          return { result: false, failMessage };
        }
      });

      resultsSet(results);
    }
  }, [onSuccess, isAllPassed, value, testsArr]);

  const onEditorValueChange = (val: string) => {
    valueSet(val);
  };

  return {
    onSubmit,
    onEditorValueChange,
    isAllPassed,
    results,
  };
};

export default useExerciseEditor;
