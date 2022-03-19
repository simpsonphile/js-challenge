import { useContext, useEffect, useState } from 'react';

import { ThemeProvider as SCThemeProvider } from 'styled-components';

import { ThemeContext, themes } from './index';

type ThemeConsumerProps = {
  children: React.ReactElement;
};

export default function BaseTheme(
  props: ThemeConsumerProps
): React.ReactElement {
  const { children } = props;

  const [isMounted, setMounted] = useState(false);

  const { themeName } = useContext(ThemeContext);

  const currentTheme = themes[themeName];

  const body = (
    <SCThemeProvider theme={currentTheme}>{children}</SCThemeProvider>
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isMounted) return <div style={{ visibility: 'hidden' }}>{body}</div>;

  return body;
}
