import CodeMirror, { ReactCodeMirrorRef } from '@uiw/react-codemirror';
import { oneDark } from '@codemirror/theme-one-dark';
import { javascript } from '@codemirror/lang-javascript';

import styles from './index.module.scss';
import { MutableRefObject, Ref, RefAttributes, useEffect, useRef } from 'react';

type EditorProps = {
  value?: string;
  setValue: (value: string) => void;
};

export default function Editor(props: EditorProps): React.ReactElement {
  const { value, setValue } = props;

  const cmRef = useRef<any>();

  console.log(cmRef);

  useEffect(() => {
    if (cmRef.current.state) {
      console.log(cmRef.current.state);
      cmRef.current.state.config.lineWrapping = true;
    }
  }, [cmRef]);

  return (
    <div className={styles.editor}>
      <CodeMirror
        ref={cmRef}
        className={styles['editor__textarea']}
        value={value}
        extensions={[javascript()]}
        theme={oneDark}
        onChange={(val) => {
          setValue(val);
        }}
      />
    </div>
  );
}
