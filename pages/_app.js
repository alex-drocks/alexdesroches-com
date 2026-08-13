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

// next/font appends a size-adjusted local(Arial) face to each family, which
// keeps layout stable while the real font loads. That is what we want for the
// sans stack, but Geist Mono's subsets omit U+2192 -- the &rarr; ending every
// link -- so for monospace that face would render the arrow as Arial at 134%
// rather than letting it fall through to Consolas/SF Mono in globals.css.
// Take just the real family and let globals.css own the monospace fallbacks.
const geistMonoFamily = geistMono.style.fontFamily.split(",")[0];

function MyApp({Component, pageProps}) {
  return (
    <ThemeProvider defaultTheme="light" attribute="class" disableTransitionOnChange>
      {/* next/font generates a hashed family name, so expose it to globals.css
          as a variable rather than naming 'Geist' literally there. */}
      <style jsx global>{`
        :root {
          --font-geist: ${geist.style.fontFamily};
          --font-geist-mono: ${geistMonoFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
