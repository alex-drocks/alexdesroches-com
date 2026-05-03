import PageTemplate from "../components/PageTemplate";
import Link from "next/link";
import {useIsEnglish} from "../hooks/useIsEnglish";

export default function Custom404() {
  const isEnglish = useIsEnglish();

  return (
    <PageTemplate
      pageTitle={isEnglish ? "Page not found | Alex Desroches" : "Page introuvable | Alex Desroches"}
      pageDescription={
        isEnglish
          ? "The requested page could not be found. Return home to view Alex Desroches's web development services."
          : "La page demandée est introuvable. Retournez à l'accueil pour consulter les services de développement web d'Alex Desroches."
      }
      pageCanonicalURL={process.env.NEXT_PUBLIC_WEBSITE_URL + "/404/"}
      noIndex={true}
    >
      <div className="max-content-width display-flex">
        <section className="max-text-width">
          <h1>{isEnglish ? "Page not found" : "Page introuvable"}</h1>
          <p>
            {isEnglish
              ? "The requested page does not exist or has been moved."
              : "La page demandée n'existe pas ou a été déplacée."}
          </p>
          <Link href={isEnglish ? "/en/" : "/"} className="text-link">
            {isEnglish ? "Back to home" : "Retour à l'accueil"}&nbsp;&rarr;
          </Link>
        </section>
      </div>
    </PageTemplate>
  );
}
