import Link from 'next/link';
import ToggleButton from '@mui/material/ToggleButton';

import LayoutContext from 'context/layoutContext';
import { useContext } from 'react';

export default function Header(): React.ReactElement {
  const layoutContext = useContext(LayoutContext);

  return (
    <header>
      <ToggleButton
        value="toggle-menu"
        size="large"
        selected={!!layoutContext?.isNavShownSet}
        onClick={() =>
          layoutContext?.isNavShownSet?.(!layoutContext.isNavShown)
        }
      ></ToggleButton>
      <Link href="/">JSChallenge</Link>
    </header>
  );
}
