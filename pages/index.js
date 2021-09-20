import PageLayout from "../components/PageLayout";

export default function Index() {
  return (
    <PageLayout
      pageTitle={process.env.NEXT_PUBLIC_WEBSITE_TITLE}
      pageDescription="Portfolio d'Alexandre Desroches."
      pageCanonicalURL={process.env.NEXT_PUBLIC_WEBSITE_URL}
    >
      <div className="readable-width-container">
        <h1>Portfolio d'<em>Alexandre Desroches</em></h1>
        <h2>Bienvenue!</h2>
        <p>
          Mon nom est Alexandre Desroches.
        </p>
        <p>
          J'offre des services de programmation, de conception de sites webs,
          ainsi que de composition musicale et de mixage audio.
        </p>
      </div>
    </PageLayout>
  );
}
