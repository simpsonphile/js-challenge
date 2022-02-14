import React from 'react';

export type FullScreenContextType = {
  isFullScreen: boolean;
  toggleFullScreen?: () => void;
};

const defaultContext: FullScreenContextType = {
  isFullScreen: false,
  toggleFullScreen: undefined,
};

const FullScreenContext = React.createContext(defaultContext);

export { FullScreenContext };
