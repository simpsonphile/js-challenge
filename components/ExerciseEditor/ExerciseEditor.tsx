import React, { useCallback, useState } from 'react';
import Editor from 'components/Editor';
import getTests from 'lib/getTests';
import Results from 'components/Results';

type ExerciseEditorProps = {
  code: string;
  tests: string;
  onSuccess?: () => void;
};

export default function ExerciseEditor(
  props: ExerciseEditorProps
): React.ReactElement {
  const { code, tests, onSuccess } = props;

  const [value, valueSet] = useState<string | undefined>(code);
  const [results, resultsSet] = useState<boolean[]>([]);

  const testsArr = getTests(tests);

  const isAllPassed = results.length > 0 && !results.includes(false);

  const onSubmit = useCallback(() => {
    if (isAllPassed) {
      onSuccess?.();
    } else {
      const results = testsArr.map((test) => {
        try {
          return !!eval(value + test);
        } catch (error) {
          console.log(error);
          return false;
        }
      });

      resultsSet(results);
    }
  }, [onSuccess, isAllPassed, value, testsArr]);

  const onEditorValueChange = (val: string) => {
    resultsSet([]);
    valueSet(val);
  };

  return (
    <div>
      <Editor value={code} setValue={(val) => onEditorValueChange(val)} />
      <button onClick={onSubmit}>{isAllPassed ? 'accept' : 'test'}</button>
      <Results results={results} />
    </div>
  );
}
