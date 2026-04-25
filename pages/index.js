import Link from "next/link";
import PageTemplate from "../components/PageTemplate";
import ResponsiveImage from "../components/ResponsiveImage";


export default function Index() {
  return (
    <PageTemplate
      pageTitle={process.env.NEXT_PUBLIC_WEBSITE_TITLE}
      pageDescription={process.env.NEXT_PUBLIC_WEBSITE_DESCRIPTION}
      pageCanonicalURL={process.env.NEXT_PUBLIC_WEBSITE_URL}
      pageAlternateURL={process.env.NEXT_PUBLIC_WEBSITE_URL + "/en/"}
    >
      {/* Hero Section */}
      <section className="hero">
        <div className="max-content-width display-flex">
          <div className="max-text-width">
            <span className="hero-badge">Programmeur freelance</span>
            <h1 className="hero-title">
              <span>Alexandre</span>
              <span>Desroches</span>
            </h1>
            <div className="shimmer-bar" aria-hidden="true" />
            <p className="hero-subtitle">
              Développeur web front-end. Je conçois des sites rapides,
              accessibles et élégants — de l'idée au déploiement.
            </p>
            <div className="hero-ctas">
              <Link href="/programmation" className="btn btn-primary">
                Voir mes services →
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Me contacter
              </Link>
            </div>
          </div>
          <div className="max-text-width display-flex" aria-hidden="true" />
        </div>
      </section>

      {/* Original content layout */}
      <div className="max-content-width display-flex">
        <div className="max-text-width">
          <h2>Programmeur freelance (pigiste)</h2>
          <p>
            Mon nom est Alex Desroches. Je suis un développeur autonome, offrant des services de
            programmation de logiciels, applications Web et sites Internet, selon vos besoins.
          </p>
          <Link href="/a-propos" className="text-link">En savoir plus à propos de moi&nbsp;&rarr;</Link>

          <h3>Mon expertise est le Développement Web Front-End.</h3>
          <p>
            Mes forces en programmation, sont basées principalement sur les langages du Web.
            C'est-à-dire, HTML, CSS et <strong>JavaScript</strong>; dont les sites Internet et applications Web
            dépendent.
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
            Confiez-moi un nouveau projet ou joignons nos forces en collaborant avec votre équipe.
          </p>
          <div className="handwritten-signature-container display-flex">
            <Link href="/contact" className="text-link">Contactez-moi&nbsp;&rarr;</Link>
            <ResponsiveImage
              path="/images/signature/signature"
              alt="Signature Alex Desroches"
              renderedWidth={92}
              renderedHeight={92}
              desktopWidth={276}
              mobileWidth={184}
              className="handwritten-signature"
            />
          </div>

        </div>

        <div className="max-text-width display-flex">
          <div className="stylish-shadow-image">
            {/*<span className="stylish-shadow-image--overlay-text">Art is Thinking</span>*/}
            <ResponsiveImage
              path="/images/whitebloc/whitebloc"
              alt="Art is Thinking"
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
