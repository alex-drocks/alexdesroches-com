import PageLayout from "../components/PageLayout";

export default function Programmation() {
  return (
    <PageLayout
      pageTitle={"Programmation | " + process.env.NEXT_PUBLIC_WEBSITE_TITLE}
      pageDescription="Services de programmation et conception de sites webs. Alexandre Desroches freelancer. Javascript, React, NodeJS, Firebase, HTML, CSS."
      pageCanonicalURL={process.env.NEXT_PUBLIC_WEBSITE_URL + "/programmation/"}
    >
      <div className="readable-width-container">
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
    </PageLayout>
  );
}
