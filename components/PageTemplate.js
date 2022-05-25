import Head from 'next/head';
import Header from "./Header";
import Footer from "./Footer";
import {useIsEnglish} from "../hooks/useIsEnglish";
import {useEffect} from "react";


export default function PageTemplate({children, pageTitle, pageDescription, pageCanonicalURL}) {
  const isEnglish = useIsEnglish()
  useEffect(() => {
    document.documentElement.lang = isEnglish ? "en" : "fr-CA"
  }, [])
  return (
    <>
      {
        isEnglish ? (
          <Head>
            {/* Page Meta */}
            <meta charSet="utf-8"/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>

            <title>{pageTitle}</title>
            <meta name="description" content={pageDescription}/>
            <link rel="canonical" href={pageCanonicalURL}/>

            {/* OpenGraph Meta */}
            <meta property="og:site_name" content={process.env.NEXT_PUBLIC_WEBSITE_TITLE}/>
            <meta property="og:locale" content="en"/>
            <meta property="og:title"
                  content={`${process.env.NEXT_PUBLIC_WEBSITE_TITLE} | ${process.env.NEXT_PUBLIC_WEBSITE_DESCRIPTION_EN}`}/>
            <meta property="og:url" content={process.env.NEXT_PUBLIC_WEBSITE_URL + "/en/"}/>
            <meta property="og:type" content="website"/>
            <meta property="og:description" content={process.env.NEXT_PUBLIC_WEBSITE_DESCRIPTION_EN}/>
            <meta property="og:image"
                  content={process.env.NEXT_PUBLIC_WEBSITE_URL + process.env.NEXT_PUBLIC_WEBSITE_META_IMAGE}/>
            <meta property="og:image:width" content={process.env.NEXT_PUBLIC_WEBSITE_META_IMAGE_WIDTH}/>
            <meta property="og:image:height" content={process.env.NEXT_PUBLIC_WEBSITE_META_IMAGE_HEIGHT}/>

            {/* Twitter Meta */}
            <meta name="twitter:title"
                  content={`${process.env.NEXT_PUBLIC_WEBSITE_TITLE} | ${process.env.NEXT_PUBLIC_WEBSITE_DESCRIPTION_EN}`}/>
            />
            <meta name="twitter:image"
                  content={process.env.NEXT_PUBLIC_WEBSITE_URL + process.env.NEXT_PUBLIC_WEBSITE_META_IMAGE}/>
            <meta name="twitter:url" content={process.env.NEXT_PUBLIC_WEBSITE_URL + "/en/"}/>
            <meta name="twitter:description" content={process.env.NEXT_PUBLIC_WEBSITE_DESCRIPTION_EN}/>
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

        ) : (
          <Head>
            {/* Page Meta */}
            <meta charSet="utf-8"/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>

            <title>{pageTitle}</title>
            <meta name="description" content={pageDescription}/>
            <link rel="canonical" href={pageCanonicalURL}/>

            {/* OpenGraph Meta */}
            <meta property="og:site_name" content={process.env.NEXT_PUBLIC_WEBSITE_TITLE}/>
            <meta property="og:locale" content="fr-CA"/>
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
        )
      }

      <Header/>

      <main className="page-container">
        {children}
      </main>

      <Footer/>
    </>
  );
}
