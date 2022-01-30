import { useEffect, useState } from 'react';

type ClientOnlyProps = {
  children: React.ReactNode;
};

export default function ClientOnly(props: ClientOnlyProps): React.ReactElement {
  const { children } = props;

  const [show, setShow] = useState(false);

  const isBrowser = typeof window !== 'undefined';

  useEffect(() => {
    if (isBrowser) {
      setShow(true);
    }
  }, [isBrowser, show, setShow]);

  if (!show) return <></>;

  return <>{children}</>;
}
