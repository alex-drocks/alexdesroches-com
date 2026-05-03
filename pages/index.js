import Link from "next/link";
import PageTemplate from "../components/PageTemplate";
import ResponsiveImage from "../components/ResponsiveImage";
import HeroSkillShowcase from "../components/HeroSkillShowcase";

export default function Index() {
  return (
    <PageTemplate
      pageTitle={"Développeur web pigiste au Québec | " + process.env.NEXT_PUBLIC_WEBSITE_TITLE}
      pageDescription="Développeur web front-end au Québec. Création de sites rapides, accessibles et performants avec React, Next.js et JavaScript."
      pageCanonicalURL={process.env.NEXT_PUBLIC_WEBSITE_URL + "/"}
      pageAlternateURL={process.env.NEXT_PUBLIC_WEBSITE_URL + "/en/"}
    >
      <section className="hero">
        <div className="max-content-width display-flex">
          <div className="max-text-width">
            <span className="hero-badge">Programmeur pigiste</span>
            <h1 className="hero-title">
              <span>Alexandre</span>{" "}
              <span>Desroches</span>
            </h1>
            <div className="shimmer-bar" aria-hidden="true" />
            <p className="hero-subtitle">
              <strong>Développeur web front-end.</strong> Je conçois des sites rapides,
              accessibles et élégants, de l'idée au déploiement.
            </p>
            <div className="hero-ctas">
              <Link href="/programmation" className="btn btn-primary">
                Voir mes services&nbsp;&rarr;
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Me contacter
              </Link>
            </div>
          </div>
          <div className="max-text-width hero-visual-wrap">
            <HeroSkillShowcase
              coreLabels={{
                build: "créer",
                ship: "livrer",
                maintain: "maintenir",
              }}
            />
          </div>
        </div>
      </section>

      <div className="max-content-width display-flex">
        <div className="max-text-width">
          <h2>Programmeur pigiste</h2>
          <p>
            Je m'appelle <strong>Alex Desroches</strong>. Je suis développeur autonome et j'offre des{" "}
            <strong>services de programmation de logiciels, d'applications web et de sites web</strong> selon vos besoins.
          </p>
          <Link href="/a-propos" className="text-link">En savoir plus sur moi&nbsp;&rarr;</Link>

          <h3>Mon expertise&nbsp;: le développement web front-end.</h3>
          <p>
            Mes forces en programmation reposent principalement sur les langages du web, c'est-à-dire HTML,
            CSS et <strong>JavaScript</strong>, dont dépendent les sites web et les applications web.
          </p>
          <p>
            Dans ce vaste univers, je maîtrise des technologies modernes en forte demande
            telles
            que&nbsp;: <strong>React.js</strong>, Next.js, Node.js, Electron.js, <strong>Angular</strong>, Squarespace,
            WordPress, WooCommerce et Firebase.
          </p>
          <Link href="/programmation" className="text-link">
            Mes services de programmation&nbsp;&rarr;
          </Link>

          <h3>Faisons équipe&nbsp;!</h3>
          <p>
            Confiez-moi <strong>un nouveau projet</strong> ou joignons nos forces en collaborant avec votre équipe.
          </p>
          <div className="handwritten-signature-container display-flex">
            <Link href="/contact" className="text-link">Contactez-moi&nbsp;&rarr;</Link>
            <ResponsiveImage
              path="/images/signature/signature"
              alt="Signature d'Alex Desroches"
              renderedWidth={92}
              renderedHeight={92}
              desktopWidth={276}
              mobileWidth={184}
              fallbackExtension="png"
              className="handwritten-signature"
            />
          </div>

        </div>

        <div className="max-text-width display-flex">
          <div className="stylish-shadow-image">
            <span aria-hidden="true" className="stylish-shadow-image--overlay-text stylish-shadow-image--overlay-text--angled">L'art fait réfléchir</span>
            <ResponsiveImage
              path="/images/whitebloc/whitebloc"
              alt="L'art fait réfléchir"
              renderedWidth={501}
              renderedHeight={751}
              desktopWidth={1002}
              mobileWidth={501}
            />
          </div>
        </div>
      </div>

    </PageTemplate>
  );
}
