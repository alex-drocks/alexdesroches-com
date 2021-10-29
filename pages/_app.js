import {ThemeProvider} from 'next-themes';

import '../styles/globals.css';
import '../styles/Header.css';
import '../styles/Footer.css';

function MyApp({Component, pageProps}) {
  return (
    <ThemeProvider defaultTheme="light" attribute="class" disableTransitionOnChange>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
