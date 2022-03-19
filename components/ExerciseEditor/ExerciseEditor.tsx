import { MutableRefObject, useRef } from 'react';

import Button from 'components/Button';
import Editor from 'components/Editor';
import Results from 'components/Results';
import { usePredefinedHotkeys } from 'hooks/usePredefinedHotkeys';
import { useTopFromBody } from 'hooks/useTopFromBody';

import {
  StyledExerciseEditor,
  StyledExerciseEditorResults,
} from './ExerciseEditor.styles';
import useExerciseEditor from './useExerciseEditor';

type ExerciseEditorProps = {
  id: string;
  onSuccess: () => void;
};

export default function ExerciseEditor(
  props: ExerciseEditorProps
): React.ReactElement {
  const { id, onSuccess } = props;

  const editorRef = useRef<HTMLDivElement>(null);

  const top = useTopFromBody(
    (editorRef as MutableRefObject<HTMLDivElement>).current
  );

  // todo: get rid of magic numbers
  const maxHeight = `calc(100vh - ${top}px - 3.2rem - 1.6rem - 4rem)`;

  const { onEditorValueChange, onSubmit, results, value } = useExerciseEditor(
    onSuccess,
    id
  );

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
