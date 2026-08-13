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

// next/font appends a size-adjusted local(Arial) face to each family to hold
// layout steady while the real font loads. Being first in the chain, it also
// catches glyphs the real font lacks -- and neither Geist nor Geist Mono
// covers U+2192, the &rarr; in every link (monospace) and button (sans). That
// drew the arrow as stretched Arial instead of letting it reach system-ui or
// Consolas. Keep only the real family so globals.css owns the fallbacks; the
// fonts are preloaded from our own origin, so the unstyled window is short.
const primaryFamily = (font) => font.style.fontFamily.split(",")[0];

function MyApp({Component, pageProps}) {
  return (
    <ThemeProvider defaultTheme="light" attribute="class" disableTransitionOnChange>
      {/* next/font owns the generated family name, so expose it to globals.css
          as a variable rather than naming 'Geist' literally there. */}
      <style jsx global>{`
        :root {
          --font-geist: ${primaryFamily(geist)};
          --font-geist-mono: ${primaryFamily(geistMono)};
        }
      `}</style>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
