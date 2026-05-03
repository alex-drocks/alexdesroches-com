import PageTemplate from "../components/PageTemplate";
import Link from "next/link";

export default function Custom404() {
  return (
    <PageTemplate
      pageTitle="Page introuvable | Alex Desroches"
      pageDescription="La page demandée est introuvable. Retournez à l'accueil pour consulter les services de développement web d'Alex Desroches."
      pageCanonicalURL={process.env.NEXT_PUBLIC_WEBSITE_URL + "/404/"}
      noIndex={true}
    >
      <div className="max-content-width display-flex">
        <section className="max-text-width">
          <h1>Page introuvable</h1>
          <p>
            La page demandée n'existe pas ou a été déplacée.
          </p>
          <Link href="/" className="text-link">Retour à l'accueil&nbsp;&rarr;</Link>
        </section>
      </div>
    </PageTemplate>
  );
}
