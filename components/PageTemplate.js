import Head from 'next/head';
import Header from "./Header";
import Footer from "./Footer";
import {useIsEnglish} from "../hooks/useIsEnglish";


function StructuredData({description = "Portfolio d'Alexandre Desroches - Services de programmation web."}) {
  const siteUrl = process.env.NEXT_PUBLIC_WEBSITE_URL;
  const titles = {
    base: process.env.NEXT_PUBLIC_WEBSITE_TITLE,
    en: process.env.NEXT_PUBLIC_WEBSITE_DESCRIPTION_EN,
    fr: process.env.NEXT_PUBLIC_WEBSITE_DESCRIPTION,
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}#website`,
    "url": siteUrl,
    "name": titles.base,
    "description": description,
    "alternateName": titles.en,
    "inLanguage": ["fr-CA", "en-CA"],
    "publisher": {
      "@id": `${siteUrl}#person`
    }
  };

  const personData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}#person`,
    "name": titles.base,
    "url": siteUrl,
    "image": siteUrl + process.env.NEXT_PUBLIC_WEBSITE_META_IMAGE,
    "jobTitle": "Développeur Web / Web Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "9423-7518 Québec Inc.",
      "url": siteUrl,
    },
    "sameAs": [
      "https://www.linkedin.com/in/alexandre-desroches-dev/",
      "https://github.com/alex-drocks",
    ],
    "knowsAbout": [
      "Développement Web",
      "Front-End Development",
      "JavaScript",
      "React.js",
      "Next.js",
      "Node.js",
      "Electron.js",
      "HTML",
      "CSS",
    ],
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Québec",
      "addressCountry": "CA",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(websiteData)}}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(personData)}}
      />
    </>
  );
}


export default function PageTemplate({children, pageTitle, pageDescription, pageCanonicalURL, pageAlternateURL}) {
  const isEnglish = useIsEnglish();

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
            <link rel="alternate" hreflang="fr" href={frenchCanonicalURL}/>
            <link rel="alternate" hreflang="en" href={englishCanonicalURL}/>
            <link rel="alternate" hreflang="x-default" href={frenchCanonicalURL}/>
          </>
        )}

        {/* OpenGraph Meta */}
        <meta property="og:site_name" content={siteTitle}/>
        <meta property="og:locale" content={isEnglish ? "en_CA" : "fr_CA"}/>
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
        <StructuredData description={pageDescription}/>
      </Head>

      <Header/>

      <main className="page-container">
        {children}
      </main>

      <Footer/>
    </>
  );
}
