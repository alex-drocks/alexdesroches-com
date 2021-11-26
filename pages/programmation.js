import Link from "next/link";
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
      <section className="skills max-content-width display-flex">
        <div className="max-text-width">
          <h2>Services de programmation et conception&nbsp;web</h2>
          <p>
            Je suis un développeur expérimenté avec les technologies du web, les logiciels desktop pour Mac et
            Windows,
            ainsi que l'automatisation de tâches sur Windows.
            Mon domaine d'expertise est donc assez vaste.
            Pouvant concevoir applications, logiciels, outils internes et sites internets selon votre demande.
          </p>
          <p>
            Je suis capable de prendre en charge un nouveau projet et de le mener à terme ainsi que de poursuivre le
            développement de projets existants, seul, ou en collaborant avec votre équipe de développeurs.
          </p>

          <h3>Langages et technologies maîtrisées&nbsp;:</h3>
          <div className={styles.techListsContainer}>
            <ul>
              <li>Javascript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Node.js</li>
              <li>JSON</li>
              <li>Autohotkey</li>
            </ul>
            <ul>
              <li>React.js</li>
              <li>Next.js</li>
              <li>Electron.js</li>
              <li>Firebase</li>
              <li>Wordpress</li>
              <li>WooCommerce</li>
            </ul>
          </div>

          <h3>Connaissances de base niveau fonctionnel&nbsp;:</h3>
          <div className={styles.techListsContainer}>
            <ul>
              <li>PHP</li>
              <li>Java</li>
              <li>C#</li>
              <li>Python</li>
            </ul>
            <ul>
              <li>Angular.js</li>
              <li>Vue.js</li>
              <li>Astro.js</li>
              <li>Go</li>
            </ul>
          </div>
        </div>
        <div className="max-text-width">
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
        </div>
      </section>

      <section className={styles.services}>
        <h3>Ce que je fais</h3>
        <p className="max-text-width">
          Programmation pour la création et la maintenance de vos projets TI avec une
          expertise particulière dans les domaines suivants&nbsp;:
        </p>
        <h4>Sites internet</h4>
        <h4>Applications web</h4>
        <h4>Logiciels pour ordinateurs</h4>
        <h4>Scripts d'automatisation</h4>
      </section>

      <section className="projects max-content-width display-flex">
        <div className="max-text-width">
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
        </div>
        <div className="max-text-width">
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
        </div>
      </section>
    </PageTemplate>
  );
}
