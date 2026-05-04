import PageTemplate from "../../components/PageTemplate";
import styles from "../../styles/programmation.module.css";
import ExternalLink from "../../components/ExternalLink";
import ResponsiveImage from "../../components/ResponsiveImage";
import Project from "../../components/Project";

const Programming = () => {
  return (
    <PageTemplate
      pageTitle={"Web Development Services | " + process.env.NEXT_PUBLIC_WEBSITE_TITLE}
      pageDescription="Web development services and portfolio by Alex Desroches. Websites, web apps, automation and JavaScript tools built with React, Next.js and Node.js."
      pageCanonicalURL={process.env.NEXT_PUBLIC_WEBSITE_URL + "/en/programming/"}
      pageAlternateURL={process.env.NEXT_PUBLIC_WEBSITE_URL + "/programmation/"}
    >
      <section className="skills max-content-width display-flex">
        <div className="max-text-width">
          <h1>Web Development Services and Portfolio</h1>

          <h2>What I do:</h2>
          <p>
            I have experience with <strong>web technologies</strong>, desktop software for Mac and Windows, and Windows
            task automation. My area of expertise is pretty broad, so I can <strong>develop and maintain web applications,
            software, internal tools, websites</strong>, and more depending on what you need.
          </p>
          <p>
            I can <strong>take charge of a new project</strong> and bring it to completion, or continue developing an
            existing project, either alone or with your team.
          </p>

          <h2>Technologies I know well:</h2>
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

          <h2>Other tools I've used:</h2>
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
            <span aria-hidden="true" className={styles.imageTextOverlay + " stylish-shadow-image--overlay-text"}>Programming is Art</span>
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
        <h2>Services I offer</h2>
        <ul className="max-text-width">
          <li>Websites</li>
          <li>Web apps</li>
          <li>E-commerce</li>
          <li>Desktop software</li>
          <li>Web scraping</li>
          <li>Automation scripts</li>
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
          title="Finance D: a website I built for multiple accounting tools"

          description="Finance D is my startup that provides various accounting tools aimed specifically at Quebec taxpayers.
        Each app solves a practical problem by making accounting easier, even when the user has very little accounting knowledge."

          imgSrc="/images/programmation/finance-d/website/finance-d"

          technologies="React.js, JavaScript, Node.js, HTML, CSS, WordPress, WooCommerce, Stripe,
         Web Hosting Canada, GitHub."

          features="Responsive website built with React.js, with a focus on SEO and performance scores close to 100.
        Online shop with WordPress and WooCommerce, plus a donation feature using the Stripe SDK. This website ranks in the
        top Google search results for a local French keyword such as 'Logiciel comptable gratuit Québec'."

          timespan="2019 to present (in my free time)"

          url="https://finance-d.com"
        />
        <Project
          title="Finance D bookkeeping software for Windows and Mac"

          description="My biggest project to date is this accounting software for Windows and Mac.
        I created it for free to help small businesses in Quebec. The goal is efficiency and an extremely simple user experience,
        which means more advanced accounting features are left out. In my opinion, it is worth discovering,
        and it is 100% free."

          imgSrc="/images/programmation/finance-d/software/finance-d_desktop_software"

          technologies="Electron.js, JavaScript, HTML, CSS, Node.js, VirtualBox VM, Google Firebase,
         Web Hosting Canada, GitHub."

          features="Desktop software for Windows and Mac, including code signing certificate management through SSL.com,
         complete documentation, an online distribution server with automatic updates, free technical support,
         and a private admin cloud logging system to ensure app quality. At this time, user reviews on Capterra.ca
         average 4.9 out of 5 stars."

          timespan="2019 to present (in my free time)"

          url="https://magasin.finance-d.com/produit/logiciel-tenue-de-livres-simplifiee/"
        />
        <Project
          title="Gestion Desroches Inc. website"

          description="Gestion Desroches is a local accounting business.
         I was responsible for migrating the existing website from Squarespace to a local hosting company.
         This involved programming the site from scratch with React.js and configuring email accounts for the
         @gestiondesroches.com domain. The migration reduced recurring annual costs by about 75%, improved page load speed,
         and increased design flexibility."

          imgSrc="/images/programmation/gestion-desroches/site-gestion-desroches"

          technologies="React.js, JavaScript, HTML, CSS, Node.js, Next.js, Web Hosting Canada, GitHub, Microsoft Outlook,
         Calendly, PHP."

          features="Created the website from scratch with React.js, web hosting and email management, SEO,
           PHP contact form and online booking with Calendly."

          timespan="December 2020"

          url="https://gestiondesroches.com"
        />
        <Project
          title="Web app for employee pay period management, Finance D"

          description="This is a web application created to simplify the management of pay periods
         and employees in collaboration with an accountant. I built the front end with React and the back end
         with Google Firebase."

          imgSrc="/images/programmation/finance-d/payes/app-payes"

          technologies="React.js, Firebase, JavaScript, HTML, CSS, Node.js, Web Hosting Canada, GitHub, PHP,
        WordPress, WooCommerce, WooCommerce License Manager."

          features="Full stack. This means the front end uses React.js and the back end uses Firebase for authentication and database services.
        A license server with WooCommerce License Manager and a PHP API connects both ends. The UI updates in real time
        thanks to Firebase Firestore, which works really well for real-time data."

          timespan="Created in 2021 and still updated occasionally."

          url="https://finance-d.com/periodes-de-payes-simplifiees/"
        />
        <Project
          title="This website"

          description="The website you are viewing right now is built with React.js and Next.js. I chose these technologies
          because they are great to work with. They are probably my current top choice for this type of project."

          imgSrc="/images/programmation/alexdesrochescom/alexdesroches"

          technologies="React.js, Next.js, JavaScript, HTML, CSS, Node.js, Firebase Hosting, GitHub."

          features="Design, programming, content, translation, hosting, and performance optimization.
         This website is open source, and you can peek into the source code in my GitHub repository (link below)."

          timespan="Created in 2021 and revised occasionally."

          url="https://github.com/alex-drocks/alexdesroches-com"
        />
      </section>
      <section className={styles.endingSection}>
        <p>
          That's it!
        </p>
        <p>
          I have done many more coding projects, but these are the best examples of{" "}
          <strong>what I do best</strong>.
        </p>
        <p>
          If you would like to know more about me, please feel free to reach out to me.
        </p>
      </section>
    </PageTemplate>
  );
};

export default Programming;
