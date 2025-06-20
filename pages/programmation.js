import styles from "../styles/programmation.module.css";
import PageTemplate from "../components/PageTemplate";
import ResponsiveImage from "../components/ResponsiveImage";
import ExternalLink from "../components/ExternalLink";
import Project from "../components/Project";
import React from "react";


export default function Programmation() {
  return (
    <PageTemplate
      pageTitle={"Services de programmation | " + process.env.NEXT_PUBLIC_WEBSITE_TITLE}
      pageDescription="Services de programmation et développement de sites Internet. Alexandre Desroches freelancer. JavaScript, React, Node, Firebase, HTML, CSS."
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
            Ainsi, je peux prendre en charge un nouveau projet et le mener à terme et/ou
            poursuivre le développement de projets existants, seul, ou en collaborant avec votre équipe de développeurs.
          </p>

          <h3>Langages et technologies maîtrisées&nbsp;:</h3>
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
                  Autohotkey
                </ExternalLink>
              </li>
              <li>
                <ExternalLink url="https://en.wikipedia.org/wiki/GitHub">
                  GitHub, GitLab
                </ExternalLink>
              </li>
              <li>
                <ExternalLink url="https://en.wikipedia.org/wiki/WordPress">
                  WordPress
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
              <li>
                <ExternalLink url="https://en.wikipedia.org/wiki/Go_(programming_language)">
                  Go Lang
                </ExternalLink>
              </li>
            </ul>
            <ul>
              <li>
                <ExternalLink url="https://en.wikipedia.org/wiki/WooCommerce">
                  WooCommerce
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
                <ExternalLink url="https://en.wikipedia.org/wiki/VirtualBox">
                  VirtualBox
                </ExternalLink>
              </li>
              <li>
                <ExternalLink url="https://en.wikipedia.org/wiki/Linux">
                  Linux
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
        <h2>Projets réalisés</h2>
        <Project
          title="Finance&nbsp;D — Site Internet pour logiciel et apps de comptabilité"

          description="Finance&nbsp;D, est une entreprise que j'ai démarrée
        dans le but d'offrir une variété d'outils spécifiques pour la comptabilité.
        J'ai donc créé un site Internet pour rendre accessibles mon logiciel de tenue de livres
        ainsi que 3 applications web différentes servant chacune à solutionner des problèmes spécifiques."

          imgSrc="/images/programmation/finance-d/website/finance-d"

          technologies="React.js, JavaScript, Node.js, HTML, CSS, WordPress, WooCommerce, Stripe,
         Web Hosting Canada, GitHub."

          features="Site Internet de présentation responsive avec React.js et une forte attention aux SEO
        et à la performance du site qui frôle le 100%, plateforme de commerce en ligne avec WordPress et WooCommerce,
        ainsi qu'un moyen de donner en ligne avec Stripe. Le site est classé sur la première page des résultats
        Google Search de façon organique sans aucune publicité payante pour
        le terme 'Logiciel comptable gratuit Québec'."

          timespan="2019 - aujourd'hui"

          url="https://finance-d.com"
        />
        <Project
          title="Logiciel de tenue de livres pour Windows et Mac — Finance&nbsp;D"

          description="Mon plus gros projet jusqu'à présent est ce logiciel de comptabilité pour ordinateurs Windows et Mac.
        Je l'ai créé avec les travailleurs autonomes du Québec en tête. Le but est la simplicité d'utilisation et l'efficacité.
        Ce logiciel est ma plus grande fierté en programmation. À mon avis, il vaut la peine à découvrir et il est 100% gratuit."

          imgSrc="/images/programmation/finance-d/software/finance-d_desktop_software"

          technologies="Electron.js, JavaScript, HTML, CSS, Node.js, VirtualBox VM, Google Firebase,
         Web Hosting Canada, GitHub."

          features="Logiciel pour ordinateurs Windows et Mac. Incluant la certification de signature du code avec SSL.com,
         une documentation complète pour les utilisateurs, la distribution par internet, les mises à jours automatiques,
         le soutien technique et un système de logs privé pour assurer la qualité. Au moment de la rédaction, les avis
         d'utilisateurs sur Capterra.ca ont une moyenne de 4.9 étoiles sur 5."

          timespan="2019 - aujourd'hui"

          url="https://magasin.finance-d.com/produit/logiciel-tenue-de-livres-simplifiee/"
        />
        <Project
          title="Site Internet de Gestion Desroches Inc."

          description="Gestion Desroches est une entreprise offrant des services de comptabilité.
         J'ai eu le mandant de remplacer le site Internet qui était conçu avec Squarespace auparavant.
         J'ai donc programmé le nouveau site avec React.js, puis changé d'hébergeur et reconfiguré les courriels
         @gestiondesroches.com. Cette migration a permis d'économiser des milliers de dollars en frais annuels."

          imgSrc="/images/programmation/gestion-desroches/site-gestion-desroches"

          technologies="React.js, JavaScript, HTML, CSS, Node.js, Next.js, Web Hosting Canada, GitHub, Microsoft Outlook,
         Calendly, PHP."

          features="Conception du site avec React, gestion de l'hébergement et des adresses courriels de l'entreprise
        avec Web Hosting Canada pour remplacer Squarespace, optimisations SEO, formulaire de contact PHP et
        prise de rendez-vous en-ligne avec Calendly."

          timespan="Créé à contrat pendant le mois de décembre 2020, total environ 30 heures."

          url="https://gestiondesroches.com"
        />
        <Project
          title="Web app pour la gestion des payes et employés — Finance&nbsp;D"

          description="Il s'agit d'une application Web créée pour simplifier la gestion des périodes de payes
        et des employés en collaboration avec un comptable.
        J'ai conçu le Front-End avec React et le Back-End avec Google Firebase."

          imgSrc="/images/programmation/finance-d/payes/app-payes"

          technologies="React.js, Firebase, JavaScript, HTML, CSS, Node.js, Web Hosting Canada, GitHub, PHP,
        WordPress, WooCommerce, WooCommerce License Manager."

          features="Programmation Full-Stack. C'est-à-dire, le Front-End avec React.js et le Back-End avec Firebase
        pour l'authentification et la base de donnée. Le serveur de license est géré avec WooCommerce License Manager
        et des appels API PHP de l'application vers WooCommerce. L'interface se met à jour en temps réel grâce
        à React et Firebase real-time similaire à Google Sheets par exemple. La base de donnée est du No-SQL."

          timespan="Créée à contrat en 2021, en investissant quelques heures par mois."

          url="https://finance-d.com/periodes-de-payes-simplifiees/"
        />
        <Project
          title="Ce site"

          description="Le site que vous visualisez en ce moment est conçu avec React et Next JS. J'ai choisi ces technologies
        car elles sont mes préférées. En effet, React est génial. Et, Next.js est un framework par-dessus React qui
        est d'une aide très appréciable. Next.js permet d'être performant, clean et satisfait en programmant.
        C'est super le fun. Je le recommande à tous."

          imgSrc="/images/programmation/alexdesrochescom/alexdesroches"

          technologies="React.js, Next.js, JavaScript, HTML, CSS, Node.js, Firebase Hosting, GitHub."

          features="Design, contenu, programmation, mise en ligne et optimisation des performances.
         Ce site est open-source. Vous pouvez d'ailleurs consulter le code source en allant sur mon
          repository de GitHub (lien ci-dessous)."

          timespan="Créé initialement en 2021, et révisé pendant mes temps libres."

          url="https://github.com/alex-drocks/alexdesroches-com"
        />
      </section>
      <section className={styles.endingSection}>
        <p>
          Voilà&nbsp;!
        </p>
        <p>
          J'ai fait plusieurs autres projets, mais ceux-ci étaient les plus pertinents pour démontrer ce que je maîtrise
          le mieux.
        </p>
        <p>
          Si vous souhaitez en savoir plus à propos de moi, n'hésitez pas à me contacter.
        </p>
      </section>
    </PageTemplate>
  );
}
