import CodeMirror from '@uiw/react-codemirror';
import { oneDark } from '@codemirror/theme-one-dark';
import { javascript } from '@codemirror/lang-javascript';

import { StyledEditor } from './Editor.styles';

type EditorProps = {
  value?: string;
  setValue: (value: string) => void;
};

export default function Editor(props: EditorProps): React.ReactElement {
  const { value, setValue } = props;

  return (
    <StyledEditor>
      <CodeMirror
        className={'editor__textarea'}
        value={value}
        extensions={[javascript()]}
        theme={oneDark}
        onChange={(val) => {
          setValue(val);
        }}
      />
    </StyledEditor>
  );
}
