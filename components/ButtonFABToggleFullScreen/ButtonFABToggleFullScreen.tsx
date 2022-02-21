import { useContext } from 'react';

import { AiOutlineFullscreen } from 'react-icons/ai';

import ButtonFAB from 'components/ButtonFAB';
import { FullScreenContext } from 'contexts/fullScreen';

export default function ButtonFABToggleFullScreen(): React.ReactElement {
  const { toggleFullScreen } = useContext(FullScreenContext);

  return (
    <ButtonFAB size="s" onClick={toggleFullScreen}>
      {<AiOutlineFullscreen size="2.4rem" />}
    </ButtonFAB>
  );
}
