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
        <h2>Programmeur de logiciels, applications et sites webs</h2>
        <p>
          Je suis un travailleur autonome qui offre des services de programmation, conception d'applications webs et
          de sites internets. Je suis disponible, à la demande, pour vos projets.
        </p>
        <h3>Programmeur indépendant (freelancer)</h3>
        <p>
          Mes forces en programmation sont surtout pour les langages&nbsp;: Javascript, HTML, CSS. Dans cet écosystème,
          je maîtrise des technologies modernes en forte demande telles que&nbsp;: React.js, Next.js, Electron.js et
          Firebase.
        </p>
        <Link href="/programmation"><a className="text-link">Services de programmation&nbsp;&rarr;</a></Link>
      </div>
    </PageLayout>
  );
}
