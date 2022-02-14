import { useContext } from 'react';

import { AiOutlineFullscreen } from 'react-icons/ai';

import ButtonFAB from 'components/ButtonFAB';
import { FullScreenContext } from 'contexts/fullScreen';

export default function ButtonFABToggleFullScreen(): React.ReactElement {
  const { toggleFullScreen } = useContext(FullScreenContext);

  return (
    <ButtonFAB onClick={toggleFullScreen}>{<AiOutlineFullscreen />}</ButtonFAB>
  );
}
