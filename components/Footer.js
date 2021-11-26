import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="display-flex flex-row">
        <p className="max-text-width services-description">
          Services de programmation sur mesure et à la demande. Programmeur situé sur la Rive-Sud de Montréal.
          Possibilité de travail à distance incluant horaires flexibles, tarification à l'heure avec facture détaillée
          à
          l'appui, et aucun engagement à long terme nécessaire.
        </p>

        <div className="max-text-width footer-links">
          <ul>
            <li>
              <Link href="/a-propos">
                <a className="text-link">En savoir plus à propos de moi&nbsp;&rarr;</a>
              </Link>
            </li>
            <li>
              <Link href="/programmation">
                <a className="text-link">Consulter mon portfolio&nbsp;&rarr;</a>
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


      <pre className="copyright">©&nbsp;<span>{new Date().getFullYear()}</span>&nbsp;Alexandre&nbsp;Desroches</pre>

    </footer>
  );
};
