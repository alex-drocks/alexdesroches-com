import styles from "../styles/programmation.module.css";
import PageTemplate from "../components/PageTemplate";
import ResponsiveImage from "../components/ResponsiveImage";
import ExternalLink from "../components/ExternalLink";
import Project from "../components/Project";


export default function Programmation() {
  return (<PageTemplate
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
          Je suis capable de prendre en charge un nouveau Project et de le mener à terme ainsi que de poursuivre le
          développement de Projects existants, seul, ou en collaborant avec votre équipe de développeurs.
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
          <span className={styles.imageTextOverlay + " stylish-shadow-image--overlay-text"}>Programming is Art</span>
          <ResponsiveImage
            path="/images/programmation/stylish/programmation"
            alt="Programming is Art"
            renderedWidth={501}
            renderedHeight={752}
            desktopWidth={1000}
            mobileWidth={501}
            className={styles.stylishImage}
          />
        </div>
      </div>
    </section>

    <svg className={styles.waveTop} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 150">
      <path fill="var(--main-background-color)" d="M0 0h900v150H0z"/>
      <path fill="var(--blue)"
            d="m0 11 37.5 11C75 33 150 55 225 71.2c75 16.1 150 26.5 225 17.5s150-37.4 225-45.5C750 35 825 47 862.5 53l37.5 6v92H0Z"/>
    </svg>

    <section className={styles.services}>
      <h3>Ce que je fais</h3>
      <p className="max-text-width">
        Programmation pour la création et la maintenance de vos Projects TI, avec une
        expertise particulière dans les domaines suivants&nbsp;:
      </p>
      <h4>Sites internet</h4>
      <h4>Applications web</h4>
      <h4>Commerces en ligne</h4>
      <h4>Logiciels pour ordinateurs</h4>
      <h4>Web scraping</h4>
      <h4>Scripts d'automatisation</h4>
    </section>

    <svg className={styles.waveBottom} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 150">
      <path fill="var(--main-background-color)" d="M0 0h900v150H0z"/>
      <path fill="var(--blue)"
            d="m0 13 37.5 11C75 35 150 57 225 64.3c75 7.4 150 0 225-7.6C525 49 600 41 675 52.2c75 11.1 150 41.5 187.5 56.6L900 124V0H0Z"/>
    </svg>

    <section className={styles.projets + " max-content-width display-flex"}>
      <h2 className="max-text-width">Portfolio des projects que j'ai réalisés</h2>
      <Project
        title="Logiciel Finance D"
        description="Logiciel de comptabilité pour ordinateurs Windows et Mac.
        Facturation et tenue de livres, suivi des taxes et des résultats financiers pour les travailleurs
        autonomes du Québec."
        imgSrc="/images/programmation/finance-d/finance-d"
        technologies="Javascript, HTML, CSS, Node.js, Electron.js, PHP, Google Firebase, Web Hosting Canada"
        timespan="2019 - aujourd'hui"
        url="https://finance-d.com"
      />
    </section>
  </PageTemplate>);
}
