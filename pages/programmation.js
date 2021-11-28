import Link from "next/link";
import PageTemplate from "../components/PageTemplate";
import ResponsiveImage from "../components/ResponsiveImage";
import styles from "../styles/programmation.module.css";
import ExternalLink from "../components/ExternalLink";

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
              <li>
                <ExternalLink url="https://en.wikipedia.org/wiki/JavaScript">
                  Javascript
                </ExternalLink>
              </li>
              <li>
                <ExternalLink url="https://en.wikipedia.org/wiki/HTML">
                  HTML
                </ExternalLink>
              </li>
              <li>
                <ExternalLink url="https://en.wikipedia.org/wiki/CSS">
                  CSS
                </ExternalLink>
              </li>
              <li>
                <ExternalLink url="https://en.wikipedia.org/wiki/Node.js">
                  Node.js
                </ExternalLink>
              </li>
              <li>
                <ExternalLink url="https://en.wikipedia.org/wiki/React_(JavaScript_library)">
                  React.js
                </ExternalLink>
              </li>
              <li>
                <ExternalLink url="https://en.wikipedia.org/wiki/Next.js"
                >Next.js
                </ExternalLink>
              </li>
            </ul>
            <ul>
              <li>
                <ExternalLink url="https://en.wikipedia.org/wiki/Electron_(software_framework)">
                  Electron.js
                </ExternalLink>
              </li>
              <li>
                <ExternalLink url="https://en.wikipedia.org/wiki/Firebase">
                  Firebase
                </ExternalLink>
              </li>
              <li>
                <ExternalLink url="https://en.wikipedia.org/wiki/AutoHotkey">
                  Autohotkey
                </ExternalLink>
              </li>
              <li>
                <ExternalLink url="https://en.wikipedia.org/wiki/JSON">
                  JSON
                </ExternalLink>
              </li>
              <li>
                <ExternalLink url="https://en.wikipedia.org/wiki/WordPress">
                  Wordpress
                </ExternalLink>
              </li>
              <li>
                <ExternalLink url="https://en.wikipedia.org/wiki/WooCommerce">
                  WooCommerce
                </ExternalLink>
              </li>
            </ul>
          </div>

          <h3>Connaissances de base&nbsp;:</h3>
          <div className={styles.techListsContainer}>
            <ul>
              <li>
                <ExternalLink url="https://en.wikipedia.org/wiki/PHP">
                  PHP
                </ExternalLink>
              </li>
              <li>
                <ExternalLink url="https://en.wikipedia.org/wiki/Java">
                  Java
                </ExternalLink>
              </li>
              <li>
                <ExternalLink url="https://en.wikipedia.org/wiki/C_Sharp_(programming_language)">
                  C#
                </ExternalLink>
              </li>
              <li>
                <ExternalLink url="https://en.wikipedia.org/wiki/Python_(programming_language)">
                  Python
                </ExternalLink>
              </li>
            </ul>
            <ul>
              <li>
                <ExternalLink url="https://en.wikipedia.org/wiki/Angular_(web_framework)">
                  Angular.js
                </ExternalLink>
              </li>
              <li>
                <ExternalLink url="https://en.wikipedia.org/wiki/Vue.js">
                  Vue.js
                </ExternalLink>
              </li>
              <li>
                <ExternalLink url="https://astro.build/">
                  Astro.js
                </ExternalLink>
              </li>
              <li>
                <ExternalLink url="https://en.wikipedia.org/wiki/Go_(programming_language)">
                  Go
                </ExternalLink>
              </li>
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

      <svg className={styles.waveTop} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 100">
        <path fill="var(--main-background-color)" d="M0 0h900v100H0z"/>
        <path fill="var(--blue)"
              d="m0 25 37.5 9.5C75 44 150 63 225 65s150-13 225-19.8c75-6.9 150-5.5 225 .5s150 16.6 187.5 22L900 73v28H0Z"/>
      </svg>

      <section className={styles.services}>
        <h3>Ce que je fais</h3>
        <p className="max-text-width">
          Programmation pour la création et la maintenance de vos projets TI, avec une
          expertise particulière dans les domaines suivants&nbsp;:
        </p>
        <h4>Sites internet</h4>
        <h4>Applications web</h4>
        <h4>Commerces en ligne</h4>
        <h4>Logiciels pour ordinateurs</h4>
        <h4>Web scraping</h4>
        <h4>Scripts d'automatisation</h4>
      </section>

      <svg className={styles.waveBottom} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 100">
        <path fill="var(--main-background-color)" d="M0 0h900v100H0z"/>
        <path fill="var(--blue)"
              d="m0 31 37.5 5.5C75 42 150 53 225 58.2c75 5.1 150 4.5 225-4s150-24.9 225-21.5C750 36 825 59 862.5 70.5L900 82V0H0Z"/>
      </svg>

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
