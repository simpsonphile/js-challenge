import { useRef } from 'react';

import { AiOutlineSearch } from 'react-icons/ai';

import Input, { InputProps } from 'components/Input';
import { useHotkeys } from 'hooks/useHotkeys';

type InputSearchProps = Omit<InputProps, 'type' | 'iconRight'>;

export default function InputSearch(
  props: InputSearchProps
): React.ReactElement {
  const ref = useRef<HTMLInputElement | null>(null);

  useHotkeys('command + option + s, ctrl + alt + s', () =>
    ref.current?.focus()
  );

  return (
    <Input
      ref={ref}
      type="text"
      iconRight={<AiOutlineSearch />}
      {...props}
      placeholder="⌘ + ⌥ + s"
    />
  );
}
