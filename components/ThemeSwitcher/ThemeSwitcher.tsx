import { useContext } from 'react';

import { useTheme } from 'styled-components';

import Button from 'components/Button';
import { IconWi } from 'components/Icon';
import { usePredefinedHotkeys } from 'hooks/usePredefinedHotkeys';
import ThemeContext from 'themes/ThemeContext';

export default function ThemeSwitcher(): React.ReactElement {
  const themeContext = useContext(ThemeContext);
  const { color } = useTheme();
  const { themeName, setTheme } = themeContext;
  const nextTheme = themeName === 'dark' ? 'light' : 'dark';
  const setNextTheme = () => setTheme?.(nextTheme);

  usePredefinedHotkeys(
    {
      keys: 'switchTheme',
      callback: setNextTheme,
    },
    [nextTheme]
  );

  return (
    <div>
      <Button
        variant={undefined}
        aria-label="switch theme"
        onClick={setNextTheme}
      >
        <IconWi
          name={themeName === 'dark' ? 'WiDaySunny' : 'WiNightClear'}
          size="3.2rem"
          strokeWidth="1"
          color={color.main}
        />
      </Button>
    </div>
  );
}
