import { useContext } from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';

import { ThemeContext, themes } from './index';

type ThemeConsumerProps = {
  children: React.ReactElement;
};

export default function BaseTheme(
  props: ThemeConsumerProps
): React.ReactElement {
  const { children } = props;

  const { themeName } = useContext(ThemeContext);

  const currentTheme = themes[themeName] || themes.dark;

  return <SCThemeProvider theme={currentTheme}>{children}</SCThemeProvider>;
}
