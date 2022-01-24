import type { AppProps } from 'next/app';

import { LayoutProvider } from 'context/layoutContext';

import 'normalize.css/normalize.css';
import 'scss/main.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LayoutProvider>
      <Component {...pageProps} />
    </LayoutProvider>
  );
}

export default MyApp;
