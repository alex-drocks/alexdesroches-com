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
          <h2>Programmeur pigiste (freelance)</h2>
          <p>
            Je m'appelle Alexandre Desroches, je suis un travailleur autonome qui offre des services de programmation
            pour le développement de logiciels d'ordinateurs, applications webs et conception de sites internets à la
            fine pointe de la technologie.
          </p>
          <Link href="/contact"><a className="text-link">Contactez-moi pour votre projet&nbsp;&rarr;</a>
          </Link>

          <h3>Mon expertise est le développement web Front-End moderne.</h3>
          <p>
            En effet, mes forces en programmation, sont basées principalement sur les langages du web. C'est-à-dire,
            Javascript, HTML et CSS; Dont les sites internet et applications webs dépendent.
          </p>
          <p>
            Dans ce vaste écosystème de conception web, je maîtrise des technologies modernes en forte demande
            telles
            que&nbsp;: Node.js, React.js, Next.js, Electron.js, Squarespace, Wordpress et Firebase.
          </p>
          <Link href="/programmation">
            <a className="text-link">En savoir plus à propos de mes services de programmation&nbsp;&rarr;</a>
          </Link>

          <h3>Faisons équipe&nbsp;!</h3>
          <p>
            Ce sera un plaisir pour moi de discuter de votre projet afin qu'ensemble nous puissions réaliser vos idées.
          </p>

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
