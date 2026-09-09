import Document, {Html, Head, Main, NextScript} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const isEnglish = ctx.pathname === '/en' || ctx.pathname.startsWith('/en/');
    return {...initialProps, isEnglish};
  }

  render() {
    const lang = this.props.isEnglish ? 'en-CA' : 'fr-CA';
    return (
      <Html lang={lang} data-scroll-behavior="smooth">
        <Head/>
        <body>
          <Main/>
          <NextScript/>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
