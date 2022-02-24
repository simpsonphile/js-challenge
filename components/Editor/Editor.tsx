import { FormEvent } from 'react';

import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';
import dynamic from 'next/dynamic';

import { StyledEditor } from './Editor.styles';

const CodeMirror = dynamic(import('@uiw/react-codemirror'));

type EditorProps = {
  value?: string;
  setValue?: (value: string) => void;
};

export default function Editor(props: EditorProps): React.ReactElement {
  const { value, setValue } = props;

  const onBeforeInput = setValue
    ? undefined
    : (e: FormEvent<HTMLDivElement>) => e.preventDefault();

  const onChange = setValue ? (val: string) => setValue(val) : undefined;

  return (
    <StyledEditor>
      <CodeMirror
        value={value}
        extensions={[javascript()]}
        theme={oneDark}
        onBeforeInput={onBeforeInput}
        onChange={onChange}
      />
    </StyledEditor>
  );
}
