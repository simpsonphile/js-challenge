import React from 'react';

import styles from './index.module.scss';

type ResultsProps = {
  results: boolean[];
};

export default function Results(props: ResultsProps): React.ReactElement {
  const { results } = props;

  if (results.length < 0) return <></>;

  const resultNodes = results.map((result, index) => (
    <li key={index}>
      {result ? `test ${index} passed` : `test ${index} failed`}
    </li>
  ));

  return <ul className={styles['result-list']}>{resultNodes}</ul>;
}
