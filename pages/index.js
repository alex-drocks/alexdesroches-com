import Link from "next/link";
import PageTemplate from "../components/PageTemplate";
import ResponsiveImage from "../components/ResponsiveImage";


export default function Index() {
  return (
    <PageTemplate
      pageTitle={process.env.NEXT_PUBLIC_WEBSITE_TITLE}
      pageDescription="Portfolio d'Alexandre Desroches."
      pageCanonicalURL={process.env.NEXT_PUBLIC_WEBSITE_URL}
    >
      <div className="max-content-width display-flex">
        <div className="max-text-width">
          <h2>Programmeur freelance (pigiste)</h2>
          <p>
            Mon nom est Alexandre Desroches. Je suis un développeur autonome, offrant des services de
            programmation de logiciels pour ordinateurs, applications Web et sites Internet.
          </p>
          <Link href="/a-propos"><a className="text-link">En savoir plus à propos de moi&nbsp;&rarr;</a></Link>

          <h3>Mon expertise est le Développement Web Front-End.</h3>
          <p>
            En effet, mes forces en programmation, sont basées principalement sur les langages du Web.
            C'est-à-dire, HTML, CSS et Javascript; Dont les sites Internet et applications Web
            dépendent.
          </p>
          <p>
            Dans ce vaste univers, je maîtrise des technologies modernes en forte demande
            telles
            que&nbsp;: React.js, Next.js, Node.js, Electron.js, Squarespace, WordPress, WooCommerce et
            Firebase.
          </p>
          <Link href="/programmation">
            <a className="text-link">Mes services de programmation&nbsp;&rarr;</a>
          </Link>

          <h3>Faisons équipe&nbsp;!</h3>
          <p>
            Confiez-moi un nouveau project ou joignons nos forces en collaborant avec votre équipe.
          </p>
          <div className="handwritten-signature-container display-flex">
            <Link href="/contact"><a className="text-link">Contactez-moi&nbsp;&rarr;</a></Link>
            <ResponsiveImage
              path="/images/signature/signature"
              alt="Signature Alexandre Desroches"
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
            <span className="stylish-shadow-image--overlay-text">Art is Thinking</span>
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
