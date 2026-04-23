import Head from 'next/head';
import Header from "./Header";
import Footer from "./Footer";
import {useIsEnglish} from "../hooks/useIsEnglish";
import {useEffect} from "react";


export default function PageTemplate({children, pageTitle, pageDescription, pageCanonicalURL, pageAlternateURL}) {
  const isEnglish = useIsEnglish()
  useEffect(() => {
    document.documentElement.lang = isEnglish ? "en" : "fr-CA"
  }, [isEnglish])

  const siteTitle = process.env.NEXT_PUBLIC_WEBSITE_TITLE;
  const siteDescription = isEnglish
    ? process.env.NEXT_PUBLIC_WEBSITE_DESCRIPTION_EN
    : process.env.NEXT_PUBLIC_WEBSITE_DESCRIPTION;

  const frenchCanonicalURL = isEnglish ? pageAlternateURL : pageCanonicalURL;
  const englishCanonicalURL = isEnglish ? pageCanonicalURL : pageAlternateURL;

  return (
    <>
      <Head>
        {/* Page Meta */}
        <meta charSet="utf-8"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>

        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription}/>
        <link rel="canonical" href={pageCanonicalURL}/>

        {/* hreflang alternates */}
        {pageAlternateURL && (
          <>
            <link rel="alternate" hrefLang="fr" href={frenchCanonicalURL}/>
            <link rel="alternate" hrefLang="en" href={englishCanonicalURL}/>
            <link rel="alternate" hrefLang="x-default" href={frenchCanonicalURL}/>
          </>
        )}

        {/* OpenGraph Meta */}
        <meta property="og:site_name" content={siteTitle}/>
        <meta property="og:locale" content={isEnglish ? "en" : "fr-CA"}/>
        <meta property="og:title"
              content={`${siteTitle} | ${siteDescription}`}/>
        <meta property="og:url" content={pageCanonicalURL}/>
        <meta property="og:type" content="website"/>
        <meta property="og:description" content={siteDescription}/>
        <meta property="og:image"
              content={process.env.NEXT_PUBLIC_WEBSITE_URL + process.env.NEXT_PUBLIC_WEBSITE_META_IMAGE}/>
        <meta property="og:image:width" content={process.env.NEXT_PUBLIC_WEBSITE_META_IMAGE_WIDTH}/>
        <meta property="og:image:height" content={process.env.NEXT_PUBLIC_WEBSITE_META_IMAGE_HEIGHT}/>

        {/* Twitter Meta */}
        <meta name="twitter:title"
              content={`${siteTitle} | ${siteDescription}`}/>
        <meta name="twitter:image"
              content={process.env.NEXT_PUBLIC_WEBSITE_URL + process.env.NEXT_PUBLIC_WEBSITE_META_IMAGE}/>
        <meta name="twitter:url" content={pageCanonicalURL}/>
        <meta name="twitter:description" content={siteDescription}/>
        <meta name="twitter:card" content="summary"/>

        <link rel="apple-touch-icon" sizes="180x180"
              href={"/favicons/apple-touch-icon.png"}/>
        <link rel="icon" type="image/png" sizes="32x32"
              href={"/favicons/favicon-32x32.png"}/>
        <link rel="icon" type="image/png" sizes="16x16"
              href={"/favicons/favicon-16x16.png"}/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" color="#5d6d72"
              href={"/favicons/safari-pinned-tab.svg"}/>
        <meta name="msapplication-TileColor" content="#2b5797"/>
        <meta name="theme-color" content="#ffffff"/>
      </Head>

      <Header/>

      <main className="page-container">
        {children}
      </main>

      <Footer/>
    </>
  );
}
