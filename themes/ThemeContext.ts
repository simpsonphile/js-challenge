import { createContext } from 'react';

import { ThemeName } from './index';

type ThemeContextProps = {
  themeName: ThemeName;
  setTheme?: (e: ThemeName) => void;
};

const ThemeContext = createContext<ThemeContextProps>({
  themeName: 'dark',
});

export default ThemeContext;
