import { useEffect, useState } from 'react';

import dynamic from 'next/dynamic';

import { StyledEditor } from './Editor.styles';

import 'codemirror/theme/material.css';
import 'codemirror/lib/codemirror.css';

const CodeMirror = dynamic<any>(
  import('react-codemirror2').then((mod) => mod.Controlled)
);

type EditorProps = {
  value?: string;
  setValue: (value: string) => void;
};

export default function Editor(props: EditorProps): React.ReactElement {
  const { value, setValue } = props;

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    import('codemirror/mode/javascript/javascript').then(() =>
      setIsLoaded(true)
    );
  }, []);

  return (
    <StyledEditor>
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
}
