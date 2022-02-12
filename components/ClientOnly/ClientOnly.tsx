import { useEffect, useState } from 'react';

type ClientOnlyProps = {
  children: React.ReactElement;
};

export default function ClientOnly(
  props: ClientOnlyProps
): React.ReactElement | null {
  const { children } = props;

  const [isShown, isShownSet] = useState(false);

  const isBrowser = typeof window !== 'undefined';

  useEffect(() => {
    if (isBrowser) {
      isShownSet(true);
    }
  }, [isBrowser, isShown, isShownSet]);

  if (!isShown || !children) return null;

  return children;
}
