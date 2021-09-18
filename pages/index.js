import PageLayout from "../components/PageLayout";

export default function Index() {
  return (
    <PageLayout
      pageTitle={process.env.NEXT_PUBLIC_WEBSITE_TITLE}
      pageDescription="Portfolio d'Alexandre Desroches."
      pageCanonicalURL={process.env.NEXT_PUBLIC_WEBSITE_URL}
    >
      <h1>Portfolio d'Alexandre Desroches</h1>
      <p> Bienvenue&nbsp;!</p>
      <p>
        Mon nom est Alexandre Desroches.
      </p>
      <p>
        J'offre des services de programmation, conception de sites webs
        ainsi que de composition musicale et mixage audio.
      </p>
    </PageLayout>
  );
}
