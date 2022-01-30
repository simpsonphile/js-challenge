import List from 'components/List';

export type Result = {
  result: boolean;
  message?: string;
};

type ResultsProps = {
  results: Result[];
};

export default function Results(props: ResultsProps): React.ReactElement {
  const { results } = props;

  if (results.length < 0) return <></>;

  const resultNodes = results.map(({ result, message }, index) => {
    const failMessage = message || `test ${index} failed`;

    return result ? `test ${index} passed` : failMessage;
  });

  return <List>{resultNodes}</List>;
}
