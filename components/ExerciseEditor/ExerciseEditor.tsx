import Button from 'components/Button';
import Editor from 'components/Editor';
import Results from 'components/Results';

import { StyledExerciseEditor } from './ExerciseEditor.styles';
import useExerciseEditor from './useExerciseEditor';

type ExerciseEditorProps = {
  id: string;
  onSuccess: () => void;
};

export default function ExerciseEditor(
  props: ExerciseEditorProps
): React.ReactElement {
  const { id, onSuccess } = props;

  const { onEditorValueChange, onSubmit, results, value } = useExerciseEditor(
    onSuccess,
    id
  );

  return (
    <StyledExerciseEditor>
      <Editor value={value} setValue={(val) => onEditorValueChange(val)} />
      <Results results={results || []} />
      <Button onClick={onSubmit}>test</Button>
    </StyledExerciseEditor>
  );
}
