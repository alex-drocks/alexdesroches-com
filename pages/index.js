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
        <h2>Programmeur de logiciels, applications webs et sites internets.</h2>
        <p>
          Je suis un passionné de code.
          En tant que travailleur autonome, j'offre des services personnalisés de programmation pour répondre aux
          besoins de vos projets.
        </p>
        <h3>Programmation à la demande (freelance)</h3>
        <p>
          Mes forces en programmation, sont basées sur les fondements des langages du web. C'est-à-dire,
          Javascript, HTML et CSS.
        </p>
        <p>
          Dans ce vaste écosystème, je maîtrise des technologies modernes en forte demande telles que&nbsp;: Node.js,
          React.js, Next.js, Electron.js et Firebase.
        </p>
        <Link href="/programmation"><a className="text-link">Services de programmation freelance&nbsp;&rarr;</a></Link>
      </div>
    </PageLayout>
  );
}
