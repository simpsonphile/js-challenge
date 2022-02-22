import { useRef } from 'react';

import { Icon } from 'components/Icon';
import Input, { InputProps } from 'components/Input';
import { usePredefinedHotkeys } from 'hooks/usePredefinedHotkeys';

type InputSearchProps = Omit<InputProps, 'type' | 'iconRight' | 'placeholder'>;

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
      iconRight={<Icon name="AiOutlineSearch" />}
      placeholder="⌘ + K"
      {...props}
    />
  );
}
