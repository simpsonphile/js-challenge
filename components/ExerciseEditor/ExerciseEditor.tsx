import { useRef } from 'react';

import Button from 'components/Button';
import Editor from 'components/Editor';
import Results from 'components/Results';
import { usePredefinedHotkeys } from 'hooks/usePredefinedHotkeys';

import {
  StyledExerciseEditor,
  StyledExerciseEditorResults,
} from './ExerciseEditor.styles';
import useExerciseEditor from './useExerciseEditor';
import { useExerciseEditorMaxHeight } from './useExerciseEditorMaxHeight';

type ExerciseEditorProps = {
  id: string;
  onSuccess: () => void;
};

export default function ExerciseEditor(
  props: ExerciseEditorProps
): React.ReactElement {
  const { id, onSuccess } = props;

  const editorRef = useRef<HTMLDivElement>(null);

  const { onEditorValueChange, onSubmit, results, value } = useExerciseEditor(
    onSuccess,
    id
  );

  const maxHeight = useExerciseEditorMaxHeight(editorRef);

  usePredefinedHotkeys({
    keys: 'testExercise',
    callback: onSubmit,
  });

  return (
    <StyledExerciseEditor>
      <Editor
        ref={editorRef}
        value={value}
        $maxHeight={maxHeight}
        setValue={(val) => onEditorValueChange(val)}
      />
      <StyledExerciseEditorResults>
        <Results results={results || []} />
      </StyledExerciseEditorResults>
      <Button onClick={onSubmit}>Test</Button>
    </StyledExerciseEditor>
  );
}
