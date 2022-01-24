import Link from 'next/link';

import LayoutContext from 'context/layoutContext';
import { useContext } from 'react';

export default function Header(): React.ReactElement {
  const layoutContext = useContext(LayoutContext);

  return (
    <header>
      <button
        onClick={() =>
          layoutContext?.isNavShownSet?.(!layoutContext.isNavShown)
        }
      >
        x
      </button>
      <Link href="/">JSChalange</Link>
    </header>
  );
}
