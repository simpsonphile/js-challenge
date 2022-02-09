import { useContext } from 'react';
import { WiDaySunny, WiNightClear } from 'react-icons/wi';

import ThemeContext from 'themes/ThemeContext';
import { useTheme } from 'styled-components';
import Button from 'components/Button';

export default function ThemeSwitcher(): React.ReactElement {
  const themeContext = useContext(ThemeContext);
  const { color } = useTheme();
  const { themeName, setTheme } = themeContext;
  const nextTheme = themeName === 'dark' ? 'light' : 'dark';

  const Icon = themeName === 'dark' ? WiDaySunny : WiNightClear;

  return (
    <div>
      <Button genre="plain" onClick={() => setTheme?.(nextTheme)}>
        <Icon size="3.2rem" strokeWidth="1" color={color.main} />
      </Button>
    </div>
  );
}
