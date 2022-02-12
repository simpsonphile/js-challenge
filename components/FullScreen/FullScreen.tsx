import { MutableRefObject, useRef } from 'react';
import { useFullscreen } from 'react-use';

import { StyledFullScreen } from './FullScreen.style';

type FullScreenProps = {
  children: React.ReactElement;
  toggle?: (state: boolean) => void;
  isActive: boolean;
};

export default function FullScreen(props: FullScreenProps): React.ReactElement {
  const { children, toggle, isActive } = props;

  const isBrowser = typeof window === 'object';

  const ref = useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;

  useFullscreen(ref, isBrowser && isActive, {
    onClose: () => toggle?.(false),
  });

  return <StyledFullScreen ref={ref}>{children}</StyledFullScreen>;
}
