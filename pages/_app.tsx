import type { AppProps } from 'next/app';

import 'normalize.css/normalize.css';
import 'scss/main.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
