import { useContext } from 'react';

import { AiOutlineFullscreen } from 'react-icons/ai';

import ButtonFAB from 'components/ButtonFAB';
import { FullScreenContext } from 'contexts/fullScreen';
import { usePredefinedHotkeys } from 'hooks/usePredefinedHotkeys';

export default function ButtonFABToggleFullScreen(): React.ReactElement {
  const { toggleFullScreen } = useContext(FullScreenContext);

  usePredefinedHotkeys({
    keys: 'fullScreen',
    callback: () => toggleFullScreen?.(),
  });

  return (
    <ButtonFAB size="s" onClick={toggleFullScreen}>
      {<AiOutlineFullscreen size="2.4rem" />}
    </ButtonFAB>
  );
}
