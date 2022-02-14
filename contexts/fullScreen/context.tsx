import React from 'react';

export type FullScreen = {
  id: string;
  fullSlug: string;
  slug: string;
  cat?: string | null;
  title?: string;
  hints?: string;
  solution?: string;
  code?: string;
  tests?: string;
  isPassed?: boolean;
};

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
