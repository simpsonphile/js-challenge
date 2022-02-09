import { useContext } from 'react';
import { ThemeContext, themes } from 'themes';

const useTheme = () => {
  const { themeName } = useContext(ThemeContext);

  return themes[themeName] || themes.dark;
};

export default useTheme;
