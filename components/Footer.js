import ExternalLink from "./ExternalLink";
import {FacebookLogo, GithubLogo, LinkedinLogo} from "./Logos";

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
                On demand <strong>
                <InternalLink page="programming">
                  programming services
                </InternalLink>
              </strong>.
                Located near Montreal, in Canada.
                Available for remote work and flexible hours to fit your needs, with a detailed invoice
                and no long-term commitment needed. Let's get the job done.
              </>
            ) : (
              <>
                <strong>
                  <InternalLink page="programming">
                    Services de programmation
                  </InternalLink>
                </strong> sur mesure et à la demande.
                Programmeur situé sur la Rive-Sud de
                Montréal. Possibilité de travail à distance incluant horaires flexibles, tarification à l'heure avec
                facture détaillée à l'appui, et aucun engagement à long terme nécessaire.
              </>
            )
          }
        </p>

        <div className="max-text-width footer-links">
          <ul>
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
                {isEnglish ? "My portfolio" : "Mon portfolio"}
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
        <ExternalLink url={myContactLinks.linkedIn}><LinkedinLogo/></ExternalLink>
        <ExternalLink url={myContactLinks.facebook}><FacebookLogo/></ExternalLink>
        {/*<ExternalLink url={myContactLinks.twitter}><TwitterLogo/></ExternalLink>*/}
        <ExternalLink url={myContactLinks.github}><GithubLogo/></ExternalLink>
      </div>

      <div>
        <pre className="entreprise">9423-7518 Québec Inc.</pre>
        <pre className="copyright">©&nbsp;<span>{new Date().getFullYear()}</span>&nbsp;Alexandre&nbsp;Desroches</pre>
      </div>


    </footer>
  );
};
