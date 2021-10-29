import PageTemplate from "../components/PageTemplate";

export default function APropos() {
  return (
    <PageTemplate
      pageTitle={"À propos | " + process.env.NEXT_PUBLIC_WEBSITE_TITLE}
      pageDescription="En savoir plus à propos d'Alexandre Desroches."
      pageCanonicalURL={process.env.NEXT_PUBLIC_WEBSITE_URL + "/a-propos/"}
    >
      <div className="readable-width-container">
        <h1>À propos d'Alexandre Desroches</h1>
        <p>
          Je suis un passionné de code, cinéma, musique, composition, théologie et philosophie.
          Bref, à peu près tout ce qui éveil mon côté créatif.
        </p>
        <p>
          Je suis dans la trentaine et j'habite au Canada dans la province du Québec avec ma chère épouse Cathy.
        </p>
        <p>
          Depuis mon enfance j'aime ce qui est technologique, créatif et qui amène à la réflexion.
          Pour citer un exemple plutôt drôle... étant très jeune, j'ai reçu mon premier piano électronique
          pour Noël et j'ai joué jusqu'à ce que les piles soient épuisées&nbsp;! Je mentionne ce fait cocasse, car il
          démontre bien ma personnalité d'aujourd'hui. Quand je découvre quelque chose que j'aime, comme la
          programmation ou la musique, je suis investi à fond sur çà.
        </p>
        <p>
          J'ai une personnalité de travailleur persévérant, passionné et orienté sur l'excellence. Je n'aime pas l'échec
          et je fais mon mieux à chaque défi pour réussir à bien faire. Quand j'échoue, je le prend difficillement, mais
          çà me propulse vers d'autres niveaux de persévérance. Ce que j'aime encore moins que l'échec, est l'abandon.
          Pour moi, abandonner est le véritable échec. Alors, je m'efforce constamment à progresser plutôt qu'à me
          résigner à la défaite. Tout ce que je fais, je le fais de mon mieux et je trouve des solutions pour améliorer
          mon environnement de travail.
        </p>
      </div>
    </PageTemplate>
  );
}
