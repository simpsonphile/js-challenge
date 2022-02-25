import { useRef } from 'react';

import { Icon } from 'components/Icon';
import Inline from 'components/Inline';
import Input, { InputProps } from 'components/Input';
import { Kbd } from 'components/Kbd';
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
      iconLeft={<Icon name="AiOutlineSearch" />}
      iconRight={
        <Inline $g="xs">
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </Inline>
      }
      {...props}
    />
  );
}
