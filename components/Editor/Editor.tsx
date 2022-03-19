import { forwardRef, useEffect, useState } from 'react';

import dynamic from 'next/dynamic';

import { StyledEditor, StyledEditorProps } from './Editor.styles';

import 'codemirror/theme/material.css';
import 'codemirror/lib/codemirror.css';

const CodeMirror = dynamic<any>(
  import('react-codemirror2').then((mod) => mod.Controlled)
);

type EditorProps = StyledEditorProps & {
  value?: string;
  setValue: (value: string) => void;
};

const Editor = forwardRef<HTMLDivElement, EditorProps>((props, ref) => {
  const { value, setValue, $maxHeight } = props;

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    import('codemirror/mode/javascript/javascript').then(() =>
      setIsLoaded(true)
    );
  }, []);

  return (
    <StyledEditor ref={ref} $maxHeight={$maxHeight} data-testid="code-editor">
      {isLoaded && (
        <CodeMirror
          value={value}
          options={{
            mode: 'javascript',
            theme: 'material',
            lineWrapping: true,
            lineNumbers: true,
            flattenSpans: true,
          }}
          onBeforeChange={({}, {}, value: string) => setValue(value)}
        />
      )}
    </StyledEditor>
  );
});

Editor.displayName = 'Editor';

export default Editor;
