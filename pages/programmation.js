import PageTemplate from "../components/PageTemplate";
import ResponsiveImage from "../components/ResponsiveImage";
import styles from "../styles/programmation.module.css";

export default function Programmation() {
  return (
    <PageTemplate
      pageTitle={"Programmation | " + process.env.NEXT_PUBLIC_WEBSITE_TITLE}
      pageDescription="Services de programmation et conception de sites webs. Alexandre Desroches freelancer. Javascript, React, NodeJS, Firebase, HTML, CSS."
      pageCanonicalURL={process.env.NEXT_PUBLIC_WEBSITE_URL + "/programmation/"}
    >
      <div className="max-content-width display-flex">
        <div className="max-text-width">
          <h1>Services de programmation et de conception&nbsp;web</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores blanditiis dolor dolorum eaque
            excepturi hic obcaecati pariatur, perferendis placeat qui quidem repellendus tempora vero vitae. Aspernatur
            dolorem dolorum enim.
          </p>

          <div>
            <h2>Langages</h2>
            <h3>Favoris:</h3>
            <ul>
              <li>Javascript</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
            <h3>Maîtrisés:</h3>
            <ul>
              <li>Javascript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Node.js</li>
              <li>JSON</li>
              <li>Autohotkey</li>
            </ul>

            <h4>Frameworks</h4>
            <ul>
              <li>React.js</li>
              <li>Next.js</li>
              <li>Firebase</li>
              <li>Stripe</li>
              <li>GoogleSheets</li>
            </ul>

            <h3>Connaissances de base:</h3>
            <ul>
              <li>Python</li>
              <li>PHP</li>
              <li>Java</li>
              <li>C#</li>
            </ul>

            <h4>Frameworks</h4>
            <ul>
              <li>WordPress</li>
            </ul>
          </div>
        </div>

        <section className="max-text-width">
          <div className="stylish-shadow-image">
            <span className={styles.imageTextOverlay1 + " stylish-shadow-image--overlay-text"}>Art is Coding</span>
            <ResponsiveImage
              path="/images/programmation/programmation"
              alt="Art is Coding"
              renderedWidth={501}
              renderedHeight={752}
              desktopWidth={1000}
              mobileWidth={501}
              className={styles.stylishImage1}
            />
          </div>
        </section>

        <section className="max-text-width">
          <div className="stylish-shadow-image">
            <span className={styles.imageTextOverlay2 + " stylish-shadow-image--overlay-text"}>Art is Reaching</span>
            <ResponsiveImage
              path="/images/programmation2/programmation2"
              alt="Art is Coding"
              renderedWidth={501}
              renderedHeight={752}
              desktopWidth={1000}
              mobileWidth={501}
              className={styles.stylishImage2}
            />
          </div>
        </section>

        <section className="max-text-width">
          <div>
            <h2>Projets</h2>
            <ul>
              <li>
                <h3>Finance D</h3>
                Logiciel de comptabilité simplifié pour les travailleurs autonomes du Québec.
                Facturation et tenue de livres, suivi des taxes et des résultats financiers.

                <h4>Stack</h4>
                Javascript, HTML, CSS, Node.js, Electron.js
              </li>
            </ul>
          </div>

          <div>
            <h2>Meilleures aptitudes</h2>
            <ul>
              <li>Programmation Javascript</li>
              <li>Design d'interfaces avec HTML, CSS et Javascript.</li>
              <li>Design d'interfaces avec React.js et le framework Next.js</li>
              <li>Authentification, base de données et services back-end avec Google Firebase.</li>
            </ul>
          </div>

          <div>
            <h2>Éditeurs de code (IDE)</h2>
            <ul>
              <li>WebStorm / PhpStorm (conçu par JetBrains)</li>
              <li>Visual Studio Code (conçu par Microsoft)</li>
            </ul>
          </div>
        </section>

      </div>
    </PageTemplate>
  );
}
