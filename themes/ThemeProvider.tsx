import { useState } from 'react';

import { useLocalStorage } from 'react-use';

import { useDetectColorScheme } from 'hooks/useDetectColorScheme';

import { ThemeContext, ThemeName } from './index';

type ThemeProviderProps = {
  children: React.ReactElement;
};

const ThemeContextProvider = (props: ThemeProviderProps) => {
  const { children } = props;

  const browserTheme = useDetectColorScheme();

  const [themeLS, setThemeLs] = useLocalStorage<ThemeName>(
    'theme',
    browserTheme
  );

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
