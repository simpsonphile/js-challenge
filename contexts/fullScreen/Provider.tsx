import { useState } from 'react';

import { FullScreenContext } from './context';

type ProviderProps = {
  children: React.ReactElement;
};

export default function Provider(props: ProviderProps): React.ReactElement {
  const { children } = props;

  const [isFullScreen, isFullScreenSet] = useState(false);

  const toggleFullScreen = () => {
    isFullScreenSet(!isFullScreen);
  };

  const value = {
    isFullScreen,
    toggleFullScreen,
  };

  return (
    <FullScreenContext.Provider value={value}>
      {children}
    </FullScreenContext.Provider>
  );
}
