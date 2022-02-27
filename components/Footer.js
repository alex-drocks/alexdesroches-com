import Link from "next/link";
import ExternalLink from "./ExternalLink";
import {FacebookLogo, GithubLogo, LinkedinLogo, TwitterLogo} from "./Logos";

import {myContactLinks} from "../lib/myContactLinks";


export default function Footer() {
  return (
    <footer>
      <div className="display-flex flex-row">
        <p className="max-text-width services-description">
          <strong><Link href="/programmation">Services de programmation</Link></strong> sur mesure et à la demande.
          Programmeur situé sur la Rive-Sud de
          Montréal. Possibilité de travail à distance incluant horaires flexibles, tarification à l'heure avec facture
          détaillée
          à l'appui, et aucun engagement à long terme nécessaire.
        </p>

        <div className="max-text-width footer-links">
          <ul>
            <li>
              <Link href="/a-propos">
                <a className="text-link">À propos de moi&nbsp;&rarr;</a>
              </Link>
            </li>
            <li>
              <Link href="/programmation">
                <a className="text-link">Mon portfolio&nbsp;&rarr;</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className="text-link">Contactez-moi&nbsp;&rarr;</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-links--social">
        <ExternalLink url={myContactLinks.linkedIn}><LinkedinLogo/></ExternalLink>
        <ExternalLink url={myContactLinks.facebook}><FacebookLogo/></ExternalLink>
        <ExternalLink url={myContactLinks.twitter}><TwitterLogo/></ExternalLink>
        <ExternalLink url={myContactLinks.github}><GithubLogo/></ExternalLink>
      </div>

      <div>
        <pre className="entreprise">9423-7518 Québec Inc.</pre>
        <pre className="copyright">©&nbsp;<span>{new Date().getFullYear()}</span>&nbsp;Alexandre&nbsp;Desroches</pre>
      </div>


    </footer>
  );
};
