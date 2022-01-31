import { useCallback, useState } from 'react';

import Editor from 'components/Editor';
import Results, { Result } from 'components/Results';
import Button from 'components/Button';
import getTestWithMessages from 'lib/getTests';

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
  const [results, resultsSet] = useState<Result[]>([]);

  const testsArr = getTestWithMessages(tests);

  const isAllPassed =
    results.length > 0 &&
    !results.map((result) => result.result).includes(false);

  const onSubmit = useCallback(() => {
    if (isAllPassed) {
      onSuccess?.();
    } else {
      const results = testsArr.map(({ body, message }) => {
        try {
          return { result: !!eval(value + body), message };
        } catch (error) {
          console.log(error);
          return { result: false, message };
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
      <Button onClick={onSubmit}>{isAllPassed ? 'accept' : 'test'}</Button>
      <Results results={results} />
    </div>
  );
}
