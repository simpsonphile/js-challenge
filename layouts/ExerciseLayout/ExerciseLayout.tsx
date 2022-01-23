import React from 'react';
import ExerciseEditor from '../../components/ExerciseEditor';

import styles from './index.module.scss';

type ExerciseProps = {
  title: string;
  code: string;
  description: string;
  tests: string;
};

export default function ExerciseLayout(
  props: ExerciseProps
): React.ReactElement {
  const { title, code, description, tests } = props;

  return (
    <div className={styles['exercise-layout']}>
      <header className={styles['exercise-layout__header']}>
        <h1>{title}</h1>

        <div>{description}</div>
      </header>

      <div>
        <ExerciseEditor code={code} tests={tests} />
      </div>
    </div>
  );
}
