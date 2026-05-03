import styles from "../styles/programmation.module.css";
import PageTemplate from "../components/PageTemplate";
import ResponsiveImage from "../components/ResponsiveImage";
import ExternalLink from "../components/ExternalLink";
import Project from "../components/Project";

export default function Programmation() {
  return (
    <PageTemplate
      pageTitle={"Services de développement web | " + process.env.NEXT_PUBLIC_WEBSITE_TITLE}
      pageDescription="Services de développement web et portfolio d'Alex Desroches. Sites, applications web, automatisation et outils JavaScript avec React, Next.js et Node.js."
      pageCanonicalURL={process.env.NEXT_PUBLIC_WEBSITE_URL + "/programmation/"}
      pageAlternateURL={process.env.NEXT_PUBLIC_WEBSITE_URL + "/en/programming/"}
    >
      <section className="skills max-content-width display-flex">
        <div className="max-text-width">
          <h1>Services de programmation et développement web</h1>

          <h2>Ce que je fais&nbsp;:</h2>
          <p>
            Je suis un <strong>développeur expérimenté en technologies web</strong>, en logiciels de bureau pour Mac et
            Windows ainsi qu'en automatisation de tâches sous Windows. Mon domaine d'expertise est donc assez vaste.
            Je peux <strong>concevoir et maintenir, selon vos besoins</strong>, des applications web, des logiciels, des
            outils internes et des sites web solides.
          </p>
          <p>
            Ainsi, je peux <strong>prendre en charge un nouveau projet et le mener à terme</strong>, ou poursuivre le
            développement de projets existants, seul ou en collaboration avec votre équipe de développeurs.
          </p>

          <h2>Langages et technologies maîtrisés&nbsp;:</h2>
          <div className={styles.techListsContainer}>
            <ul>
              <li>
                <ExternalLink url="https://en.wikipedia.org/wiki/JavaScript">
                  JavaScript
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
                <ExternalLink url="https://en.wikipedia.org/wiki/Bun_(software)">
                  Bun
                </ExternalLink>
              </li>
              <li>
                <ExternalLink url="https://en.wikipedia.org/wiki/React_(JavaScript_library)">
                  React.js
                </ExternalLink>
              </li>
              <li>
                <ExternalLink url="https://en.wikipedia.org/wiki/Next.js">
                  Next.js
                </ExternalLink>
              </li>
              <li>
                <ExternalLink url="https://en.wikipedia.org/wiki/Bittensor">
                  Bittensor
                </ExternalLink>
              </li>
            </ul>
            <ul>
              <li>
                <ExternalLink url="https://en.wikipedia.org/wiki/Python_(programming_language)">
                  Python
                </ExternalLink>
              </li>
              <li>
                <ExternalLink url="https://en.wikipedia.org/wiki/Angular_(web_framework)">
                  Angular
                </ExternalLink>
              </li>
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
                  AutoHotkey
                </ExternalLink>
              </li>
              <li>
                <ExternalLink url="https://en.wikipedia.org/wiki/GitHub">
                  Git, GitHub
                </ExternalLink>
              </li>
              <li>
                <ExternalLink url="https://en.wikipedia.org/wiki/Linux">
                  Linux
                </ExternalLink>
              </li>
              <li>
                <ExternalLink url="https://en.wikipedia.org/wiki/AI_agent">
                  AI Agents
                </ExternalLink>
              </li>
            </ul>
          </div>

          <h2>Expérience complémentaire&nbsp;:</h2>
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
                <ExternalLink url="https://en.wikipedia.org/wiki/SQL">
                  SQL
                </ExternalLink>
              </li>
            </ul>
            <ul>
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
              <li>
                <ExternalLink url="https://astro.build/">
                  Astro.js
                </ExternalLink>
              </li>
              <li>
                <ExternalLink url="https://en.wikipedia.org/wiki/Kubernetes">
                  Kubernetes
                </ExternalLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-text-width">
          <div className="stylish-shadow-image">
            <span className={styles.imageTextOverlay + " stylish-shadow-image--overlay-text"}>Programmer est un art</span>
            <ResponsiveImage
              path="/images/programmation/stylish/programmation"
              alt="Programmer est un art"
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
        <path fill="var(--main-background-color)" d="M0 0h900v150H0z" />
        <path fill="var(--blue)"
          d="m0 11 37.5 11C75 33 150 55 225 71.2c75 16.1 150 26.5 225 17.5s150-37.4 225-45.5C750 35 825 47 862.5 53l37.5 6v92H0Z" />
      </svg>

      <section className={styles.services}>
        <h2>Services offerts</h2>
        <ul className="max-text-width">
          <li>Sites web</li>
          <li>Applications web</li>
          <li>Boutiques en ligne</li>
          <li>Applications de bureau</li>
          <li>Extraction de données web</li>
          <li>Scripts d'automatisation</li>
        </ul>
      </section>

      <svg className={styles.waveBottom} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 150">
        <path fill="var(--main-background-color)" d="M0 0h900v150H0z" />
        <path fill="var(--blue)"
          d="m0 13 37.5 11C75 35 150 57 225 64.3c75 7.4 150 0 225-7.6C525 49 600 41 675 52.2c75 11.1 150 41.5 187.5 56.6L900 124V0H0Z" />
      </svg>

      <section className={styles.projects + " max-content-width display-flex"}>
        <h2>Projets réalisés</h2>
        <Project
          title="Finance D, site web pour logiciel et applications de comptabilité"

          description="Finance D est une entreprise que j'ai démarrée dans le but d'offrir une variété d'outils spécifiques pour la comptabilité.
        J'ai donc créé un site web pour rendre accessibles mon logiciel de tenue de livres ainsi que trois applications web différentes,
        servant chacune à solutionner des problèmes spécifiques."

          imgSrc="/images/programmation/finance-d/website/finance-d"

          technologies="React.js, JavaScript, Node.js, HTML, CSS, WordPress, WooCommerce, Stripe,
         Web Hosting Canada, GitHub."

          features="Site web de présentation adaptatif avec React.js, optimisé pour le SEO et la performance, avec des résultats
        qui frôlent 100 %. Plateforme de commerce en ligne avec WordPress et WooCommerce, ainsi qu'une option de dons en ligne
        avec Stripe. Le site se classe organiquement sur la première page des résultats Google, sans publicité payante,
        pour le terme 'logiciel comptable gratuit Québec'."

          timespan="2019 à aujourd'hui"

          url="https://finance-d.com"
        />
        <Project
          title="Logiciel de tenue de livres pour Windows et Mac, Finance D"

          description="Mon plus gros projet jusqu'à présent est ce logiciel de comptabilité pour ordinateurs Windows et Mac.
        Je l'ai créé avec les travailleurs autonomes du Québec en tête. Le but est la simplicité d'utilisation et l'efficacité.
        Ce logiciel est ma plus grande fierté en programmation. À mon avis, il vaut la peine d'être découvert et il est 100 % gratuit."

          imgSrc="/images/programmation/finance-d/software/finance-d_desktop_software"

          technologies="Electron.js, JavaScript, HTML, CSS, Node.js, VirtualBox VM, Google Firebase,
         Web Hosting Canada, GitHub."

          features="Logiciel pour ordinateurs Windows et Mac, incluant le certificat de signature de code avec SSL.com,
         une documentation complète pour les utilisateurs, la distribution en ligne, les mises à jour automatiques,
         le soutien technique et un système privé de logs pour assurer la qualité. Au moment de la rédaction,
         les avis d'utilisateurs sur Capterra.ca affichent une moyenne de 4,9 étoiles sur 5."

          timespan="2019 à aujourd'hui"

          url="https://magasin.finance-d.com/produit/logiciel-tenue-de-livres-simplifiee/"
        />
        <Project
          title="Site web de Gestion Desroches Inc."

          description="Gestion Desroches est une entreprise offrant des services de comptabilité.
         J'ai eu le mandat de remplacer le site web qui était conçu avec Squarespace auparavant.
         J'ai donc programmé le nouveau site avec React.js, puis changé d'hébergeur et reconfiguré les courriels
         @gestiondesroches.com. Cette migration a permis d'économiser des milliers de dollars en frais annuels."

          imgSrc="/images/programmation/gestion-desroches/site-gestion-desroches"

          technologies="React.js, JavaScript, HTML, CSS, Node.js, Next.js, Web Hosting Canada, GitHub, Microsoft Outlook,
         Calendly, PHP."

          features="Conception du site avec React, gestion de l'hébergement et des adresses courriel de l'entreprise
        avec Web Hosting Canada pour remplacer Squarespace, optimisation SEO, formulaire de contact PHP et
        prise de rendez-vous en ligne avec Calendly."

          timespan="Réalisé à contrat en décembre 2020, pour un total d'environ 30 heures."

          url="https://gestiondesroches.com"
        />
        <Project
          title="Application web pour la gestion de la paie et des employés, Finance D"

          description="Il s'agit d'une application web créée pour simplifier la gestion des périodes de paie
        et des employés, en collaboration avec un comptable. J'ai conçu le front-end avec React et le back-end avec Google Firebase."

          imgSrc="/images/programmation/finance-d/payes/app-payes"

          technologies="React.js, Firebase, JavaScript, HTML, CSS, Node.js, Web Hosting Canada, GitHub, PHP,
        WordPress, WooCommerce, WooCommerce License Manager."

          features="Programmation full-stack, c'est-à-dire le front-end avec React.js et le back-end avec Firebase
        pour l'authentification et la base de données. Le serveur de licences est géré avec WooCommerce License Manager
        et des appels API PHP de l'application vers WooCommerce. L'interface se met à jour en temps réel grâce
        à React et Firebase, de manière similaire à Google Sheets. La base de données est NoSQL."

          timespan="Réalisée à contrat en 2021, à raison de quelques heures par mois."

          url="https://finance-d.com/periodes-de-payes-simplifiees/"
        />
        <Project
          title="Ce site"

          description="Le site que vous visualisez en ce moment est conçu avec React.js et Next.js. J'ai choisi ces technologies
        parce qu'elles font partie de mes préférées. En effet, React est génial, et Next.js ajoute à React des fonctionnalités
        qui aident à créer des sites performants, propres et agréables à programmer. C'est super le fun. Je le recommande à tous."

          imgSrc="/images/programmation/alexdesrochescom/alexdesroches"

          technologies="React.js, Next.js, JavaScript, HTML, CSS, Node.js, Firebase Hosting, GitHub."

          features="Design, contenu, programmation, mise en ligne et optimisation des performances.
         Ce site est open-source. Vous pouvez d'ailleurs consulter le code source dans mon
          repository GitHub (lien ci-dessous)."

          timespan="Créé initialement en 2021, puis révisé dans mes temps libres."

          url="https://github.com/alex-drocks/alexdesroches-com"
        />
      </section>
      <section className={styles.endingSection}>
        <p>
          Voilà&nbsp;!
        </p>
        <p>
          J'ai fait plusieurs autres projets, mais ceux-ci étaient les plus pertinents pour démontrer{" "}
          <strong>ce que je maîtrise le mieux</strong>.
        </p>
        <p>
          Si vous souhaitez en savoir plus sur moi, n'hésitez pas à me contacter.
        </p>
      </section>
    </PageTemplate>
  );
}
