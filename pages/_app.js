import {ThemeProvider} from 'next-themes';

import '../styles/globals.css';
import '../styles/Header.css';
import '../styles/Footer.css';

function MyApp({Component, pageProps}) {
  // NOTE: Google Analytics is currently disabled. To re-enable:
  // import {useEffect} from "react";
  // import {useRouter} from "next/router";
  // import Script from "next/script";
  // import * as gtag from '../lib/gtag';

  return (
    <>
      <ThemeProvider defaultTheme="light" attribute="class" disableTransitionOnChange>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
