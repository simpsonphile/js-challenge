import type { AppProps } from 'next/app';

import AppWrapper from 'components/AppWrapper';

import 'normalize.css/normalize.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  );
}

export default MyApp;
