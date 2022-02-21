import { useRef } from 'react';

import { AiOutlineSearch } from 'react-icons/ai';

import Input, { InputProps } from 'components/Input';
import { usePredefinedHotkeys } from 'hooks/usePredefinedHotkeys';

type InputSearchProps = Omit<InputProps, 'type' | 'iconRight'>;

export default function InputSearch(
  props: InputSearchProps
): React.ReactElement {
  const ref = useRef<HTMLInputElement | null>(null);

  usePredefinedHotkeys({
    keys: 'search',
    callback: () => ref.current?.focus(),
  });

  return (
    <Input
      ref={ref}
      type="text"
      iconRight={<AiOutlineSearch />}
      {...props}
      placeholder="⌘ + k"
    />
  );
}
