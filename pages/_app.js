import {useEffect} from "react";
import {useRouter} from "next/router";
import Script from "next/script";
import {ThemeProvider} from 'next-themes';
import * as gtag from '../lib/gtag'

import '../styles/globals.css';
import '../styles/Header.css';
import '../styles/Footer.css';

const isProduction = process.env.NODE_ENV === "production";


function MyApp({Component, pageProps}) {
  const router = useRouter()

  useEffect(() => {
    if (isProduction) {
      const handleRouteChange = (url) => {
        gtag.pageview(url)
      }
      router.events.on('routeChangeComplete', handleRouteChange)
      return () => {
        router.events.off('routeChangeComplete', handleRouteChange)
      }
    }
  }, [router.events])

  return (
    <>
      {/*Google Analytics*/}
      {
        isProduction && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
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
