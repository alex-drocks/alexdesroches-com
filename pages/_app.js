import {ThemeProvider} from 'next-themes';
import {Geist, Geist_Mono} from 'next/font/google';

import '../styles/globals.css';
import '../styles/image-sheen.css';
import '../styles/Header.css';
import '../styles/Footer.css';

// Self-hosted at build time, so there is no render-blocking request to
// fonts.googleapis.com and no third-party connection on the critical path.
const geist = Geist({subsets: ['latin'], display: 'swap'});
const geistMono = Geist_Mono({subsets: ['latin'], display: 'swap'});

function MyApp({Component, pageProps}) {
  return (
    <ThemeProvider defaultTheme="light" attribute="class" disableTransitionOnChange>
      {/* next/font generates a hashed family name, so expose it to globals.css
          as a variable rather than naming 'Geist' literally there. */}
      <style jsx global>{`
        :root {
          --font-geist: ${geist.style.fontFamily};
          --font-geist-mono: ${geistMono.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
