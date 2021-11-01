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
      <div className="max-content-width">
        <div className="max-text-width flex-col">
          <h2>Programmeur pigiste (freelance)</h2>
          <p>
            En tant que travailleur autonome, j'offre mes services de programmation pour vos projets de
            développement
            de logiciels pour ordinateurs, applications webs et conception de sites internets à la fine pointe de la
            technologie.
          </p>
          <Link href="/contact"><a className="text-link">Contactez-moi pour discuter de votre
            projet&nbsp;&rarr;</a>
          </Link>

          <h3>Expertise en développement web Front-End moderne</h3>
          <p>
            Mes forces en programmation, sont basées principalement sur les langages du web. C'est-à-dire,
            Javascript, HTML et CSS; dont tous les sites internet et applications webs dépendent.
          </p>
          <p>
            Dans ce vaste écosystème de conception web, je maîtrise des technologies modernes en forte demande
            telles
            que&nbsp;: Node.js, React.js, Next.js, Electron.js, Squarespace, Wordpress et Firebase.
          </p>
          <Link href="/programmation">
            <a className="text-link">Services de programmation freelance&nbsp;&rarr;</a>
          </Link>

          <h3>Faisons équipe&nbsp;!</h3>
          <p>
            Proposez-moi un projet sur lequel vous voulez collaborer
            pour réaliser vos idées.
            Concevons des choses géniales ensemble.
            <br/>
            <br/>
            Alexandre Desroches
            <br/>
            <br/>
            <ResponsiveImage
              path="/images/signature/signature"
              alt="Signature Alexandre Desroches"
              renderedWidth={92}
              renderedHeight={92}
              desktopWidth={276}
              mobileWidth={184}
              className="handwritten-signature"
            />
          </p>
        </div>
        <div className="max-text-width">
          <div className="stylish-image">
            <span className="stylish-image--overlay-text">Art is thinking</span>
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
