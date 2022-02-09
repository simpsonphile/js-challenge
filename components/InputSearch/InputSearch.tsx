import { AiOutlineSearch } from 'react-icons/ai';

import Input, { InputProps } from 'components/Input';

type InputSearchProps = Omit<InputProps, 'type' | 'iconRight'>;

export default function InputSearch(
  props: InputSearchProps
): React.ReactElement {
  return <Input type="text" iconRight={<AiOutlineSearch />} {...props} />;
}
