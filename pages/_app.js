import {useEffect} from "react";
import {useRouter} from "next/router";
import Script from "next/script";
import {ThemeProvider} from 'next-themes';
import * as gtag from '../lib/gtag'

import '../styles/globals.css';
import '../styles/Header.css';
import '../styles/Footer.css';

function MyApp({Component, pageProps, nonce}) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      {/*Google Analytics*/}
      {
        process.env.NODE_ENV === "production" && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
              strategy="afterInteractive"
            />
            <Script
              id="google-analytics-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gtag.GA_TRACKING_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )
      }

      {/*app*/}
      <ThemeProvider defaultTheme="light" attribute="class" disableTransitionOnChange>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
