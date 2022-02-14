import Button from 'components/Button';
import Editor from 'components/Editor';
import Results from 'components/Results';

import { StyledExerciseEditor } from './ExerciseEditor.styles';
import useExerciseEditor from './useExerciseEditor';

type ExerciseEditorProps = {
  code: string;
  tests: string;
  onSuccess: () => void;
};

export default function ExerciseEditor(
  props: ExerciseEditorProps
): React.ReactElement {
  const { code, tests, onSuccess } = props;

  const { onEditorValueChange, onSubmit, results } = useExerciseEditor(
    code,
    tests,
    onSuccess
  );

  return (
    <StyledExerciseEditor>
      <Editor value={code} setValue={(val) => onEditorValueChange(val)} />
      <Results results={results || []} />
      <Button onClick={onSubmit}>test</Button>
    </StyledExerciseEditor>
  );
}
