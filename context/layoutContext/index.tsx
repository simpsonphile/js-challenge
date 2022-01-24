import React, { useState } from 'react';

type LayoutContext = {
  isNavShown: boolean;
  isNavShownSet?: (state: boolean) => void;
};

const LayoutContext = React.createContext<LayoutContext>({
  isNavShown: true,
});

export const LayoutProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [isNavShown, isNavShownSet] = useState(true);

  return (
    <LayoutContext.Provider
      value={{
        isNavShown,
        isNavShownSet,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

export default LayoutContext;
