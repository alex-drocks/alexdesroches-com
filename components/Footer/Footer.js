export default function Footer() {
  return (
    <footer>
      <div className="branding">
        <a className="logo-finance-d no-wrap"
           href="https://finance-d.com"
           aria-label="Liens vers Finance D"
        >
          <img src="/icons/icon-32x32.png" width="32px" height="32px" alt="Logo de Finance D"/>
          <span>Finance&nbsp;D</span>
        </a>
      </div>

      <p className="details">
        <a href="https://finance-d.com/periodes-de-payes-simplifiees/">
          Périodes de payes simplifiées — Une application web pour la gestion de vos fiches d'employés et de leurs
          heures de travail.
        </a>
      </p>

      <pre className="copyright">© <span>{new Date().getFullYear()}</span> Finance D</pre>
    </footer>
  );
};
