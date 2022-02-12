import { FormEvent } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { oneDark } from '@codemirror/theme-one-dark';
import { javascript } from '@codemirror/lang-javascript';

import { StyledEditor } from './Editor.styles';

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
