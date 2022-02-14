import React, { useEffect, useState } from 'react';

import * as ReactDOM from 'react-dom';

type PortalProps = {
  children: React.ReactElement;
};

export default function Portal(props: PortalProps): React.ReactElement | null {
  const { children } = props;

  const [portalElement, setPortalElement] = useState<React.ReactElement | null>(
    null
  );

  const isBrowser = typeof window === 'object';

  useEffect(() => {
    if (isBrowser) {
      const domTarget = document.querySelector('#footer');

      if (domTarget) {
        const el = ReactDOM.createPortal(children, domTarget);

        setPortalElement(el);
      }
    }
  }, [isBrowser, children]);

  return portalElement;
}
