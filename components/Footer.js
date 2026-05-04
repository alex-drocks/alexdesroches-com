import ExternalLink from "./ExternalLink";
import {GithubLogo, LinkedinLogo} from "./Logos";

import {myContactLinks} from "../lib/myContactLinks";
import InternalLink from "./InternalLink";
import {useIsEnglish} from "../hooks/useIsEnglish";


export default function Footer() {
  const isEnglish = useIsEnglish()
  return (
    <footer>
      <div className="display-flex flex-row">
        <p className="max-text-width services-description">
          {
            isEnglish ? (
              <>
                On-demand <strong>
                <InternalLink page="programming">
                  programming services
                </InternalLink>
              </strong>.
                Located near Montreal, Canada.
                Available for remote work, with flexible hours when the project needs it.
              </>
            ) : (
              <>
                <strong>
                  <InternalLink page="programming">
                    Services de programmation
                  </InternalLink>
                </strong> à la demande.
                Programmeur situé près de Montréal, au Canada.
                Tarification à l'heure avec facture détaillée à l'appui.
              </>
            )
          }
        </p>

        <div className="max-text-width footer-links">
          <ul>
            <li>
              <InternalLink
                page="index"
                className="text-link"
                withArrow={true}
              >
                {isEnglish ? "Home" : "Accueil"}
              </InternalLink>
            </li>
            <li>
              <InternalLink
                page="about"
                className="text-link"
                withArrow={true}
              >
                {isEnglish ? "About me" : "À propos de moi"}
              </InternalLink>
            </li>
            <li>
              <InternalLink
                page="programming"
                className="text-link"
                withArrow={true}
              >
                {isEnglish ? "My portfolio" : "Services et projets"}
              </InternalLink>
            </li>
            <li>
              <InternalLink
                page="contact"
                className="text-link"
                withArrow={true}
              >
                {isEnglish ? "Contact me" : "Contactez-moi"}
              </InternalLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-links--social">
        <ExternalLink
          url={myContactLinks.linkedIn}
          ariaLabel={isEnglish ? "Alex Desroches on LinkedIn" : "Alex Desroches sur LinkedIn"}
        >
          <LinkedinLogo/>
        </ExternalLink>
        <ExternalLink
          url={myContactLinks.github}
          ariaLabel={isEnglish ? "Alex Desroches on GitHub" : "Alex Desroches sur GitHub"}
        >
          <GithubLogo/>
        </ExternalLink>
      </div>

      <div>
        <pre className="entreprise">9423-7518 Québec Inc.</pre>
        <pre className="copyright">©&nbsp;<span>{new Date().getFullYear()}</span>&nbsp;Alex&nbsp;Desroches</pre>
      </div>


    </footer>
  );
};
