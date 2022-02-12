import { AiOutlineFullscreen } from 'react-icons/ai';

import Editor from 'components/Editor';
import Results from 'components/Results';
import Button from 'components/Button';

import { StyledExerciseEditor } from './ExerciseEditor.style';
import useExerciseEditor from './useExerciseEditor';

type ExerciseEditorProps = {
  code: string;
  tests: string;
  onSuccess: () => void;
  toggleFullScreen: () => void;
};

export default function ExerciseEditor(
  props: ExerciseEditorProps
): React.ReactElement {
  const { code, tests, toggleFullScreen, onSuccess } = props;

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
      <Button onClick={toggleFullScreen} iconRight={<AiOutlineFullscreen />}>
        full screen
      </Button>
    </StyledExerciseEditor>
  );
}
