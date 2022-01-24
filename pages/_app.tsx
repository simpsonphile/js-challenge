import type { AppProps } from 'next/app';

import { LayoutProvider } from 'context/layoutContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LayoutProvider>
      <Component {...pageProps} />
    </LayoutProvider>
  );
}

export default MyApp;
