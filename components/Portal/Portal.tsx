import React, { useEffect, useState } from 'react';
import * as ReactDOM from 'react-dom';

type PortalProps = {
  children: React.ReactElement;
};

export default function Portal(props: PortalProps): React.ReactElement {
  const { children } = props;

  const [portalElement, setPortalElement] = useState(<></>);

  const isBrowser = typeof window === 'object';

  useEffect(() => {
    if (isBrowser) {
      const domTarget = document.querySelector('#footer');

      let el = <></>;

      if (domTarget) el = ReactDOM.createPortal(children, domTarget);

      setPortalElement(el);
    }
  }, [isBrowser, children]);

  return portalElement;
}
