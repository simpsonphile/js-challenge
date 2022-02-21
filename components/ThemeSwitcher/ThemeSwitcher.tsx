import { useContext } from 'react';

import { WiDaySunny, WiNightClear } from 'react-icons/wi';
import { useTheme } from 'styled-components';

import Button from 'components/Button';
import ThemeContext from 'themes/ThemeContext';

export default function ThemeSwitcher(): React.ReactElement {
  const themeContext = useContext(ThemeContext);
  const { color } = useTheme();
  const { themeName, setTheme } = themeContext;
  const nextTheme = themeName === 'dark' ? 'light' : 'dark';

  const Icon = themeName === 'dark' ? WiDaySunny : WiNightClear;

  return (
    <div>
      <Button variant={undefined} onClick={() => setTheme?.(nextTheme)}>
        <Icon size="3.2rem" strokeWidth="1" color={color.main} />
      </Button>
    </div>
  );
}
