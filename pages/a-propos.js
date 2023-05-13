import PageTemplate from "../components/PageTemplate";
import ResponsiveImage from "../components/ResponsiveImage";
import styles from "../styles/a-propos.module.css";

export default function About() {
  return (
    <PageTemplate
      pageTitle={"À propos | " + process.env.NEXT_PUBLIC_WEBSITE_TITLE}
      pageDescription="En savoir plus à propos d'Alexandre Desroches. Programmeur JavaScript, développement Web, Front-end."
      pageCanonicalURL={process.env.NEXT_PUBLIC_WEBSITE_URL + "/a-propos/"}
    >
      <div className="max-content-width display-flex">
        <section className="max-text-width">
          <h2>À propos d'Alexandre Desroches</h2>
          <p>
            Je suis un <strong>passionné de programmation</strong>, cinéma, jeux vidéos, musique, composition musicale,
            théologie et philosophie. Bref, à peu près tout ce qui éveil mon côté créatif et nourri mon imagination.
          </p>
          <p>
            Je suis dans la trentaine, habitant au Canada dans la province du Québec, avec ma chère épouse Cathy
            et Samuel, notre nouveau né&nbsp;!
          </p>
          <p>
            Depuis mon enfance, <strong>j'aime ce qui est technologique, créatif et qui amène à la
            réflexion.</strong>{" "}
            Pour citer un exemple plutôt drôle... étant très jeune, j'ai reçu mon premier piano électronique
            pour Noël et j'ai joué jusqu'à ce que les piles soient épuisées&nbsp;! Cette anecdote démontre encore bien
            ma personnalité d'aujourd'hui. Quand je découvre quelque chose que j'aime, comme la musique ou la
            programmation, je suis investi à fond sur çà.
          </p>
          <p>
            <strong>
              J'ai une personnalité de travailleur&nbsp;: persévérant, passionné et orienté sur l'excellence.
            </strong>{" "}
            Je n'aime pas l'échec et je fais mon mieux à chaque défi pour réussir à bien faire. Quand j'échoue, je le
            prend difficilement, mais çà me propulse vers d'autres niveaux de persévérance. Ce que j'aime encore moins
            que l'échec, est l'abandon. Pour moi, abandonner est le véritable échec. Alors,{" "}
            <strong>je m'efforce constamment à progresser</strong> plutôt qu'à me résigner à la défaite.
          </p>
          <p>
            <strong>Tout ce que je fais, je le fais de mon mieux</strong> et je trouve des solutions pour améliorer mon
            environnement de travail. Avec moi, vous pouvez vous attendre au professionnalisme et à l'excellence de mon
            travail. Je donne toujours le meilleur de moi-même peu importe la responsabilité.
          </p>
        </section>

        <section className="max-text-width">
          <div className="stylish-shadow-image">
            <ResponsiveImage
              path="/images/about/about"
              alt="Art is Revealing"
              renderedWidth={501}
              renderedHeight={752}
              desktopWidth={1000}
              mobileWidth={501}
              className={styles.stylishImage}
            />
          </div>
        </section>
      </div>
    </PageTemplate>
  );
}
