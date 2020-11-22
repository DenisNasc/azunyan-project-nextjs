import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import Head from 'next/head';
import {ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import lightTheme from 'style/themes/light';
import darkTheme from 'style/themes/dark';

import type {AppProps} from 'next/app';

import store from '../state/store';

export default function (props: AppProps) {
  const {Component, pageProps} = props;

  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <title>with-typescript-material-ui</title>
      </Head>
      <ReduxProvider store={store}>
        <ThemeProvider theme={true ? darkTheme : lightTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </ReduxProvider>
    </React.Fragment>
  );
}
