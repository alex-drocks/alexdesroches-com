import Document, {Html, Head, Main, NextScript} from 'next/document';


class MyDocument extends Document {
  render() {
    return (
      <Html lang="fr-CA">
        <Head/>
        <body>
        <Main/>
        <NextScript/>
        </body>
      </Html>
    )
  }
}


export default MyDocument;
