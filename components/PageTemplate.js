import Head from 'next/head';
import Header from "./Header";
import Footer from "./Footer";
import {useIsEnglish} from "../hooks/useIsEnglish";


function StructuredData({pageTitle, pageDescription, pageCanonicalURL, siteDescription, isEnglish}) {
  const siteUrl = process.env.NEXT_PUBLIC_WEBSITE_URL;
  const siteName = process.env.NEXT_PUBLIC_WEBSITE_TITLE;
  const language = isEnglish ? "en-CA" : "fr-CA";
  const personDescription = isEnglish
    ? "Alex Desroches is a Quebec-based web developer specializing in JavaScript, React, Next.js, Node.js and accessible websites."
    : "Alex Desroches est un développeur web au Québec spécialisé en JavaScript, React, Next.js, Node.js et sites accessibles.";

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        "url": `${siteUrl}/`,
        "name": siteName,
        "alternateName": ["Alexandre Desroches", "Portfolio Alex Desroches"],
        "description": siteDescription,
        "inLanguage": ["fr-CA", "en-CA"],
        "publisher": {
          "@id": `${siteUrl}#person`
        }
      },
      {
        "@type": "Person",
        "@id": `${siteUrl}#person`,
        "name": siteName,
        "alternateName": "Alexandre Desroches",
        "url": `${siteUrl}/`,
        "image": siteUrl + process.env.NEXT_PUBLIC_WEBSITE_META_IMAGE,
        "description": personDescription,
        "jobTitle": isEnglish ? "Web Developer" : "Développeur web",
        "worksFor": {
          "@type": "Organization",
          "name": "9423-7518 Québec Inc.",
          "url": `${siteUrl}/`,
        },
        "sameAs": [
          "https://www.linkedin.com/in/alexandre-desroches-dev/",
          "https://github.com/alex-drocks",
        ],
        "knowsAbout": [
          "Développement web",
          "Développement front-end",
          "Web development",
          "Front-end development",
          "JavaScript",
          "React.js",
          "Next.js",
          "Node.js",
          "Electron.js",
          "HTML",
          "CSS",
        ],
        "knowsLanguage": ["fr-CA", "en-CA"],
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "Québec",
          "addressCountry": "CA",
        },
      },
      {
        "@type": "WebPage",
        "@id": `${pageCanonicalURL}#webpage`,
        "url": pageCanonicalURL,
        "name": pageTitle,
        "description": pageDescription,
        "inLanguage": language,
        "isPartOf": {
          "@id": `${siteUrl}#website`
        },
        "about": {
          "@id": `${siteUrl}#person`
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{__html: JSON.stringify(structuredData)}}
    />
  );
}


export default function PageTemplate({
  children,
  pageTitle,
  pageDescription,
  pageCanonicalURL,
  pageAlternateURL = "",
  noIndex = false,
}) {
  const isEnglish = useIsEnglish();

  const siteTitle = process.env.NEXT_PUBLIC_WEBSITE_TITLE;
  const siteDescription = isEnglish
    ? process.env.NEXT_PUBLIC_WEBSITE_DESCRIPTION_EN
    : process.env.NEXT_PUBLIC_WEBSITE_DESCRIPTION;
  const socialImageAlt = isEnglish
    ? "Alex Desroches, freelance web developer"
    : "Alex Desroches, développeur web freelance";

  const frenchCanonicalURL = isEnglish ? pageAlternateURL : pageCanonicalURL;
  const englishCanonicalURL = isEnglish ? pageCanonicalURL : pageAlternateURL;

  return (
    <>
      <Head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>

        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription}/>
        {noIndex && <meta name="robots" content="noindex, follow"/>}
        <link rel="canonical" href={pageCanonicalURL}/>

        {pageAlternateURL && (
          <>
            <link rel="alternate" hrefLang="fr-CA" href={frenchCanonicalURL}/>
            <link rel="alternate" hrefLang="en-CA" href={englishCanonicalURL}/>
            <link rel="alternate" hrefLang="x-default" href={frenchCanonicalURL}/>
          </>
        )}

        <meta property="og:site_name" content={siteTitle}/>
        <meta property="og:locale" content={isEnglish ? "en_CA" : "fr_CA"}/>
        {pageAlternateURL && <meta property="og:locale:alternate" content={isEnglish ? "fr_CA" : "en_CA"}/>}
        <meta property="og:title" content={pageTitle}/>
        <meta property="og:url" content={pageCanonicalURL}/>
        <meta property="og:type" content="website"/>
        <meta property="og:description" content={pageDescription}/>
        <meta property="og:image"
              content={process.env.NEXT_PUBLIC_WEBSITE_URL + process.env.NEXT_PUBLIC_WEBSITE_META_IMAGE}/>
        <meta property="og:image:width" content={process.env.NEXT_PUBLIC_WEBSITE_META_IMAGE_WIDTH}/>
        <meta property="og:image:height" content={process.env.NEXT_PUBLIC_WEBSITE_META_IMAGE_HEIGHT}/>
        <meta property="og:image:alt" content={socialImageAlt}/>

        <meta name="twitter:title" content={pageTitle}/>
        <meta name="twitter:image"
              content={process.env.NEXT_PUBLIC_WEBSITE_URL + process.env.NEXT_PUBLIC_WEBSITE_META_IMAGE}/>
        <meta name="twitter:image:alt" content={socialImageAlt}/>
        <meta name="twitter:url" content={pageCanonicalURL}/>
        <meta name="twitter:description" content={pageDescription}/>
        <meta name="twitter:card" content="summary_large_image"/>

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
        {!noIndex && (
          <StructuredData
            pageTitle={pageTitle}
            pageDescription={pageDescription}
            pageCanonicalURL={pageCanonicalURL}
            siteDescription={siteDescription}
            isEnglish={isEnglish}
          />
        )}
      </Head>

      <Header/>

      <main className="page-container" id="main-content">
        {children}
      </main>

      <Footer/>
    </>
  );
}
