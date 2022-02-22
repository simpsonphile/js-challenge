import { BoxDefault } from 'components/Box';
import Headline from 'components/Headline';
import List from 'components/List';

export type Result = {
  result: boolean;
  failMessage?: string;
  successMessage?: string;
};

type ResultsProps = {
  results: Result[];
};

export default function Results(props: ResultsProps): React.ReactElement {
  const { results } = props;

  const resultNodes = results.map(
    ({ result, failMessage, successMessage }, index) => {
      let text = failMessage || `test ${index + 1} failed`;
      if (result) {
        text = successMessage || `test ${index + 1} passed`;
      }

      return {
        id: index.toString(),
        el: (
          <Headline key={text} $fs="base" $color={result ? 'valid' : 'error'}>
            {text}
          </Headline>
        ),
      };
    }
  );

  return (
    <BoxDefault>
      <List items={resultNodes}>{}</List>
    </BoxDefault>
  );
}
