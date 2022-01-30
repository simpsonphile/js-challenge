import Input, { InputProps } from 'components/Input';

type SearchProps = Omit<InputProps, 'type' | 'iconRight'>;

export default function Search(props: SearchProps): React.ReactElement {
  return <Input type="search" iconRight="s" {...props} />;
}
