import { useState } from 'react';

import { useLocalStorage } from 'react-use';

import { ThemeContext, ThemeName } from './index';

type ThemeProviderProps = {
  children: React.ReactElement;
};

const ThemeContextProvider = (props: ThemeProviderProps) => {
  const { children } = props;
  const [themeLS, setThemeLs] = useLocalStorage<ThemeName>('theme', 'dark');
  const [themeName, setThemeName] = useState<ThemeName>(themeLS || 'dark');

  return (
    <ThemeContext.Provider
      value={{
        themeName,
        setTheme: (e: ThemeName) => {
          setThemeLs(e);
          setThemeName(e);
        },
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
