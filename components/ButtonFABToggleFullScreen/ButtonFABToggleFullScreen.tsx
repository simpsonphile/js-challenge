import { useContext } from 'react';

import ButtonFAB from 'components/ButtonFAB';
import { Icon } from 'components/Icon';
import { FullScreenContext } from 'contexts/fullScreen';
import { usePredefinedHotkeys } from 'hooks/usePredefinedHotkeys';

export default function ButtonFABToggleFullScreen(): React.ReactElement {
  const { toggleFullScreen } = useContext(FullScreenContext);

  usePredefinedHotkeys({
    keys: 'fullScreen',
    callback: () => toggleFullScreen?.(),
  });

  return (
    <ButtonFAB
      size="s"
      aria-label="toggle full screen"
      onClick={() => toggleFullScreen?.()}
    >
      {<Icon name="AiOutlineFullscreen" size="2.4rem" />}
    </ButtonFAB>
  );
}
