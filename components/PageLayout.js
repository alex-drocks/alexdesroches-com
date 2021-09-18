import Head from 'next/head';

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function PageLayout({children, pageTitle, pageDescription, pageCanonicalURL}) {
  return (<>
    <Head>
      {/* Page Meta */}
      <meta charSet="utf-8"/>
      <meta name="viewport" content="initial-scale=1.0, width=device-width"/>

      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription}/>
      <link rel="canonical" href={pageCanonicalURL}/>

      {/* OpenGraph Meta */}
      <meta property="og:site_name" content={process.env.NEXT_PUBLIC_WEBSITE_TITLE}/>
      <meta property="og:locale" content={process.env.NEXT_PUBLIC_LOCALE_LANG}/>
      <meta property="og:title"
            content={`${process.env.NEXT_PUBLIC_WEBSITE_TITLE} | ${process.env.NEXT_PUBLIC_WEBSITE_DESCRIPTION}`}/>
      <meta property="og:url" content={process.env.NEXT_PUBLIC_WEBSITE_URL}/>
      <meta property="og:type" content="website"/>
      <meta property="og:description" content={process.env.NEXT_PUBLIC_WEBSITE_DESCRIPTION}/>
      <meta property="og:image"
            content={process.env.NEXT_PUBLIC_WEBSITE_URL + process.env.NEXT_PUBLIC_WEBSITE_META_IMAGE}/>
      <meta property="og:image:width" content={process.env.NEXT_PUBLIC_WEBSITE_META_IMAGE_WIDTH}/>
      <meta property="og:image:height" content={process.env.NEXT_PUBLIC_WEBSITE_META_IMAGE_HEIGHT}/>

      {/* Twitter Meta */}
      <meta name="twitter:title"
            content={`${process.env.NEXT_PUBLIC_WEBSITE_TITLE} | ${process.env.NEXT_PUBLIC_WEBSITE_DESCRIPTION}`}/>
      />
      <meta name="twitter:image"
            content={process.env.NEXT_PUBLIC_WEBSITE_URL + process.env.NEXT_PUBLIC_WEBSITE_META_IMAGE}/>
      <meta name="twitter:url" content={process.env.NEXT_PUBLIC_WEBSITE_URL}/>
      <meta name="twitter:description" content={process.env.NEXT_PUBLIC_WEBSITE_DESCRIPTION}/>
      <meta name="twitter:card" content="summary"/>

      <link rel="apple-touch-icon" sizes="180x180"
            href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/icons/apple-` +
            `touch-icon.png`}/>
      <link rel="mask-icon" href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/icons/safari-pinned-tab.svg`}
            color="#21beeb"/>

      {/* /!*google analytics*!/ */}
      {
        process.env.NODE_ENV === 'production' && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_FIREBASE_ANALYTICS_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{__html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');`,}}
            />
          </>
        )
      }
    </Head>

    <Header/>

    <main className="page-container">
      {children}
    </main>

    <Footer/>
  </>);
}
