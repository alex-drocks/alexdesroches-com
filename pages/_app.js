import {ThemeProvider} from 'next-themes';
import {useEffect} from 'react';
import {Geist, Geist_Mono} from 'next/font/google';
import {useIsEnglish} from '../hooks/useIsEnglish';

import '../styles/globals.css';
import '../styles/image-sheen.css';
import '../styles/Header.css';
import '../styles/Footer.css';

// Called for their side effect: each emits self-hosted @font-face rules and a
// preload hint at build time, so there is no render-blocking request to
// fonts.googleapis.com on the critical path. The returned class names go
// unused because both families keep their real names, which lets
// styles/globals.css name them directly in its font stacks -- but next/font
// still requires the result to be assigned to a module-scope const.
const geist = Geist({subsets: ['latin'], display: 'swap'});
const geistMono = Geist_Mono({subsets: ['latin'], display: 'swap'});

function MyApp({Component, pageProps}) {
  const isEnglish = useIsEnglish();

  // _document does not run on client navigation.
  useEffect(() => {
    document.documentElement.lang = isEnglish ? 'en-CA' : 'fr-CA';
  }, [isEnglish]);

  return (
    <ThemeProvider defaultTheme="light" attribute="class" disableTransitionOnChange>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
