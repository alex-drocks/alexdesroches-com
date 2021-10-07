import Link from "next/link";
import PageLayout from "../components/PageLayout";

export default function Index() {
  return (
    <PageLayout
      pageTitle={process.env.NEXT_PUBLIC_WEBSITE_TITLE}
      pageDescription="Portfolio d'Alexandre Desroches."
      pageCanonicalURL={process.env.NEXT_PUBLIC_WEBSITE_URL}
    >
      <div className="readable-width-container">
        <h1>Alexandre Desroches</h1>
        <h2>Programmeur pigiste (freelance)</h2>
        <p>
          En tant que travailleur autonome, j'offre des services de programmation sur mesure pour vos projets
          de logiciels, applications webs et sites internets; qu'ils soient grands ou petits.
        </p>
        <Link href="/contact"><a className="text-link">Contactez-moi&nbsp;&rarr;</a></Link>

        <h3>Expertise en développement web Front-End moderne</h3>
        <p>
          Mes forces en programmation, sont basées principalement sur les langages du web. C'est-à-dire,
          Javascript, HTML et CSS.
        </p>
        <p>
          Dans ce vaste écosystème de conception web, je maîtrise des technologies modernes en forte demande telles
          que&nbsp;: Node.js, React.js, Next.js, Electron.js, Squarespace, Wordpress et Firebase.
        </p>
        <Link href="/programmation"><a className="text-link">Services de programmation freelance&nbsp;&rarr;</a></Link>
      </div>
    </PageLayout>
  );
}
