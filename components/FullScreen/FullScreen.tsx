import { MutableRefObject, useContext, useRef } from 'react';

import { useFullscreen } from 'react-use';

import { FullScreenContext } from 'contexts/fullScreen';

import { StyledFullScreen } from './FullScreen.styles';

type FullScreenProps = {
  children: React.ReactElement;
};

export default function FullScreen(props: FullScreenProps): React.ReactElement {
  const { children } = props;

  const isBrowser = typeof window === 'object';

  const { isFullScreen, toggleFullScreen } = useContext(FullScreenContext);

  const ref = useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;

  useFullscreen(ref, isBrowser && isFullScreen, {
    onClose: () => toggleFullScreen?.(),
  });

  return <StyledFullScreen ref={ref}>{children}</StyledFullScreen>;
}
