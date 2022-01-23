import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { oneDark } from '@codemirror/theme-one-dark';
import { javascript } from '@codemirror/lang-javascript'

import styles from './index.module.scss';

export default function Editor (): React.ReactElement {
  return <div className={styles.editor}>
    <CodeMirror extensions={[javascript()]} theme={oneDark} />
  </div>;
}
