import styles from "../styles/programmation.module.css";
import PageTemplate from "../components/PageTemplate";
import ResponsiveImage from "../components/ResponsiveImage";
import ExternalLink from "../components/ExternalLink";
import Project from "../components/Project";


export default function Programmation() {
  return (<PageTemplate
    pageTitle={"Programmation | " + process.env.NEXT_PUBLIC_WEBSITE_TITLE}
    pageDescription="Services de programmation et développement de sites Internet. Alexandre Desroches freelancer. Javascript, React, Node, Firebase, HTML, CSS."
    pageCanonicalURL={process.env.NEXT_PUBLIC_WEBSITE_URL + "/programmation/"}
  >
    <section className="skills max-content-width display-flex">
      <div className="max-text-width">
        <h2>Services de Programmation et Développement&nbsp;Web</h2>

        <h3>Ce que je fais&nbsp;:</h3>
        <p>
          Je suis un développeur expérimenté avec les technologies du Web, les logiciels desktop pour Mac et
          Windows, ainsi que l'automatisation de tâches sur Windows.
          Mon domaine d'expertise est donc assez vaste.
          Pouvant maintenir et <strong>concevoir, selon votre
          demande</strong> — applications Web, logiciels, outils internes et sites Internet de haute qualité.
        </p>
        <p>
          Ainsi, je peux prendre en charge un nouveau project et le mener à terme et/ou
          poursuivre le développement de projects existants, seul, ou en collaborant avec votre équipe de développeurs.
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
              <ExternalLink url="https://en.wikipedia.org/wiki/GitHub">
                Github
              </ExternalLink>
            </li>
            <li>
              <ExternalLink url="https://en.wikipedia.org/wiki/WordPress">
                WordPress
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
                Go Lang
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
      <h3>Services offerts</h3>
      <ul className="max-text-width">
        <li>Sites Internet</li>
        <li>Applications Web</li>
        <li>Commerces en ligne</li>
        <li>Logiciels pour ordinateurs</li>
        <li>Web scraping</li>
        <li>Scripts d'automatisation</li>
      </ul>
    </section>

    <svg className={styles.waveBottom} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 150">
      <path fill="var(--main-background-color)" d="M0 0h900v150H0z"/>
      <path fill="var(--blue)"
            d="m0 13 37.5 11C75 35 150 57 225 64.3c75 7.4 150 0 225-7.6C525 49 600 41 675 52.2c75 11.1 150 41.5 187.5 56.6L900 124V0H0Z"/>
    </svg>

    <section className={styles.projects + " max-content-width display-flex"}>
      <h2>Projects réalisés</h2>
      <Project
        title="Finance&nbsp;D — Site Internet pour logiciel et apps de comptabilité"

        description="Finance&nbsp;D, est une entreprise que j'ai démarrée
        dans le but d'offrir une variété d'outils spécifiques pour la comptabilité.
        J'ai donc créé un site Internet pour rendre accessibles mon logiciel de tenue de livres
        ainsi que 3 applications web différentes servant chacune à solutionner des problèmes spécifiques."

        imgSrc="/images/programmation/finance-d/finance-d"

        features="Site Internet de présentation responsive avec React.js et une forte attention aux SEO
        et à la performance du site qui frôle le 100%, plateforme de commerce en ligne avec WordPress et WooCommerce,
        ainsi qu'un moyen de donner en ligne avec Stripe."

        technologies="React.js, Javascript, Node.js, HTML, CSS, WordPress, WooCommerce, Stripe,
         Web Hosting Canada, Github."

        timespan="2019 - aujourd'hui"

        url="https://finance-d.com"
      />
      <Project
        title="Finance&nbsp;D — Logiciel de tenue de livres pour Windows et Mac"

        description="Mon plus gros projet jusqu'à présent est ce logiciel de comptabilité pour ordinateurs Windows et Mac.
        Je l'ai créé avec les travailleurs autonomes du Québec en tête. Le but est la simplicité d'utilisation et l'efficacité.
        Ce logiciel est ma plus grande fierté en programmation. À mon avis, il vaut la peine à découvrir et il est 100% gratuit."

        imgSrc="/images/programmation/finance-d/finance-d"

        features="Logiciel pour ordinateurs Windows et Mac. Incluant la certification de signature du code avec SSL.com,
         une documentation complète pour les utilisateurs, la distribution par internet, les mises à jours automatiques,
         le soutien technique et un système de logs privé pour assurer la qualité."

        technologies="Javascript, HTML, CSS, Node.js, Electron.js, Google Firebase,
         Web Hosting Canada, Github."

        timespan="2019 - aujourd'hui"

        url="https://finance-d.com"
      />
    </section>
  </PageTemplate>);
}
