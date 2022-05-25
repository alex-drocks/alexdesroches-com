import React from 'react';
import PageTemplate from "../../components/PageTemplate";
import styles from "../../styles/programmation.module.css";
import ExternalLink from "../../components/ExternalLink";
import ResponsiveImage from "../../components/ResponsiveImage";
import Project from "../../components/Project";

const Programming = () => {
  return (
    <PageTemplate
      pageTitle={"Programming Services & Portfolio | " + process.env.NEXT_PUBLIC_WEBSITE_TITLE}
      pageDescription="Alexandre Desroches Front-End Web Developer. Javascript, React, Node, Firebase, HTML, CSS, and more."
      pageCanonicalURL={process.env.NEXT_PUBLIC_WEBSITE_URL + "/en/programming/"}
    >
      <section className="skills max-content-width display-flex">
        <div className="max-text-width">
          <h2>Programming Services Portfolio</h2>

          <h3>What I do:</h3>
          <p>
            I am an experienced developer with web technologies, desktop software for Mac and Windows, as well as task
            automation on Windows. My area of expertise is therefore quite broad — being able to <strong>develop and
            maintain projects, according to your needs</strong> — Web applications, softwares, internal tools,
            websites and more.
          </p>
          <p>
            Thus, I can take charge of a new project and bring it to fruition and/or
            continue the development of existing projects, alone, or by collaborating with your team of developers.
          </p>

          <h3>Mastered Languages and Technologies:</h3>
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
                  GitHub, GitLab
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

          <h3>Basic knowledge:</h3>
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
                  Go language
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
        <h3>Offered Services</h3>
        <ul className="max-text-width">
          <li>Websites</li>
          <li>Web Apps</li>
          <li>Online Commerce</li>
          <li>Desktop Softwares</li>
          <li>Web Scraping</li>
          <li>Automation Scripts</li>
          <li>...and more</li>
        </ul>
      </section>

      <svg className={styles.waveBottom} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 150">
        <path fill="var(--main-background-color)" d="M0 0h900v150H0z"/>
        <path fill="var(--blue)"
              d="m0 13 37.5 11C75 35 150 57 225 64.3c75 7.4 150 0 225-7.6C525 49 600 41 675 52.2c75 11.1 150 41.5 187.5 56.6L900 124V0H0Z"/>
      </svg>

      <section className={styles.projects + " max-content-width display-flex"}>
        <h2>Portfolio</h2>
        <Project
          title="Finance&nbsp;D — A Website for multiple Accounting Tools I built"

          description="Finance&nbsp;D, is my startup
        that provides various accounting tools aimed specifically at Quebec tax payers.
        Each app tries to solve a problem by simplifying what it takes to accomplish the most with the least education
        possible."

          imgSrc="/images/programmation/finance-d/website/finance-d"

          technologies="React.js, Javascript, Node.js, HTML, CSS, WordPress, WooCommerce, Stripe,
         Web Hosting Canada, GitHub."

          features="Responsive website using React.js with a focus on SEO
        and performance which is close to 100% scores. Online shop with WordPress and WooCommerce,
        and a donation feature using the Stripe SDK. This website is ranked in the top Google Search results
        for local keywords like 'Logiciel comptable gratuit Québec'."

          timespan="2019 - Now (in my free time)"

          url="https://finance-d.com"
        />
        <Project
          title="Bookkeeping software for Windows and Mac — Finance&nbsp;D"

          description="My biggest project to date is this accounting software for Windows and Mac.
        I created it for free, to help small businesses in Quebec.
        The aim is efficiency and extreme simplicity of use at the expense of more advanced accounting features being excluded.
        In my opinion, it is worth discovering and it is 100% free."

          imgSrc="/images/programmation/finance-d/software/finance-d_desktop_software"

          technologies="Electron.js, Javascript, HTML, CSS, Node.js, VirtualBox VM, Google Firebase,
         Web Hosting Canada, GitHub."

          features="Desktop software for Windows et Mac. Including code signing certificate management obtained through SSL.com,
         a complete documentation, an online distribution server with automatic updates,
         free technical support, a private admin cloud logging system to ensure app quality.
         At this time, user reviews on Capterra.ca
         average 4.9 stars on 5 which demonstrates its appreciation."

          timespan="2019 - Now (in my free time)"

          url="https://magasin.finance-d.com/produit/logiciel-tenue-de-livres-simplifiee/"
        />
        <Project
          title="Gestion Desroches Inc. Website"

          description="Gestion Desroches is a local accounting business.
         I had the responsibility to migrate the existing website from Squarespace to a local hosting company.
         So this implied programming the site from scratch using React.js, and configure the email accounts for the
         @gestiondesroches.com domain. This migration helped reduce recurring annual costs by about 75%, improved the page
         loading speeds and design flexibility."

          imgSrc="/images/programmation/gestion-desroches/site-gestion-desroches"

          technologies="React.js, Javascript, HTML, CSS, Node.js, Next.js, Web Hosting Canada, GitHub, Microsoft Outlook,
         Calendly, PHP."

          features="Created the website form scratch with React.js, web hosting and email management, SEO,
           PHP contact form and online booking with Calendly."

          timespan="December 2020"

          url="https://gestiondesroches.com"
        />
        <Project
          title="Web App for employees pay period management — Finance&nbsp;D"

          description="This is a web application created to simplify the management of pay periods
         and employees in collaboration with an accountant. I built the Front-End using React and the Back-End
         with Google Firebase."

          imgSrc="/images/programmation/finance-d/payes/app-payes"

          technologies="React.js, Firebase, Javascript, HTML, CSS, Node.js, Web Hosting Canada, GitHub, PHP,
        WordPress, WooCommerce, WooCommerce License Manager."

          features="Full-Stack. Meaning, Front-End with React.js and the Back-End with Firebase
        (for the authentication and database services). License server with WooCommerce License Manager
        and a PHP API in the middle to connect both ends. The UI is updated in realtime thanks to the
        great Firebase Firestore database feature."

          timespan="Created in 2021, still updating it occasionally."

          url="https://finance-d.com/periodes-de-payes-simplifiees/"
        />
        <Project
          title="This website"

          description="The website you are viewing right now is built with React.js and Next.js. I chose both of these
          technologies because they are great. Probably my current top choice as of 2022-05-24."

          imgSrc="/images/programmation/alexdesrochescom/alexdesroches"

          technologies="React.js, Next.js, Javascript, HTML, CSS, Node.js, Firebase Hosting, GitHub."

          features="Design, programming, content, translation, hosting and performance optimisations.
         This website is open-source - you can peek into the source code in my GitHub repository (link below)."

          timespan="Created in 2021 and revised occasionally."

          url="https://github.com/alex-drocks/alexdesroches-com"
        />
      </section>
      <section className={styles.endingSection}>
        <p>
          That's it!
        </p>
        <p>
          I did many more coding projects, but those were the most relevant to what I am very good at doing.
        </p>
        <p>
          If you would like to know more about me, please feel free to reach out to me.
        </p>
      </section>
    </PageTemplate>
  );
};

export default Programming;
