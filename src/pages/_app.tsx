import { ReactElement } from 'react';
import { AppProps } from 'next/app';
import Header from 'next/head';
import '../styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
  return (
    <>
      <Header>
        <title>Vavatips - Dicas de gameplay</title>
        <noscript>You need to enable JavaScript to run this app.</noscript>
      </Header>

      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
      />

      <Component {...pageProps} />
    </>
  );
};
export default MyApp;
