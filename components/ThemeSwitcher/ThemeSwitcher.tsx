import { useContext } from 'react';

import Button from 'components/Button';
import ThemeContext from 'themes/ThemeContext';

export default function ThemeSwitcher(): React.ReactElement {
  const themeContext = useContext(ThemeContext);

  const { themeName, setTheme } = themeContext;
  const nextTheme = themeName === 'dark' ? 'light' : 'dark';

  return (
    <div>
      <Button onClick={() => setTheme?.(nextTheme)}>{nextTheme}</Button>
    </div>
  );
}
