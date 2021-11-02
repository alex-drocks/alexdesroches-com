export default function Footer() {
  return (
    <footer className="max-content-width display-flex">
      <p className="max-text-width services-description">
        Services de programmation sur mesure et à la demande. Situé sur la Rive-Sud de Montréal. Possibilité de travail
        à distance incluant horaires flexibles, tarification à l'heure avec facture à l'appui, et aucun engagement à
        long terme nécessaire.
      </p>
      <pre className="copyright">©&nbsp;<span>{new Date().getFullYear()}</span>&nbsp;Alexandre&nbsp;Desroches</pre>
    </footer>
  );
};
