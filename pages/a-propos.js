import PageTemplate from "../components/PageTemplate";
import ResponsiveImage from "../components/ResponsiveImage";
import styles from "../styles/a-propos.module.css";

export default function About() {
  return (
    <PageTemplate
      pageTitle={"À propos d'Alex Desroches | Développeur web"}
      pageDescription="Découvrez le parcours, les valeurs et l'approche d'Alex Desroches, développeur web front-end spécialisé en JavaScript, React et Next.js."
      pageCanonicalURL={process.env.NEXT_PUBLIC_WEBSITE_URL + "/a-propos/"}
      pageAlternateURL={process.env.NEXT_PUBLIC_WEBSITE_URL + "/en/about/"}
    >
      <div className="max-content-width display-flex">
        <section className="max-text-width">
          <h1>À propos d'Alex Desroches</h1>
          <p>
            Je suis un passionné de programmation, cinéma, jeux vidéo, musique, composition musicale, théologie et
            philosophie. Bref, à peu près tout ce qui éveille mon côté créatif et nourrit mon imagination.
          </p>
          <p>
            J'ai la trentaine et j'habite au Québec, au Canada, avec ma chère épouse Cathy et nos deux enfants&nbsp;!
          </p>
          <p>
            <strong>Depuis mon enfance, j'aime tout ce qui touche à la technologie, à la créativité et à la
            réflexion.</strong>{" "}
            Petite anecdote&nbsp;: très jeune, j'ai reçu mon premier piano électronique pour Noël et j'ai joué jusqu'à ce
            que les piles soient épuisées&nbsp;! Cette anecdote illustre encore bien ma personnalité d'aujourd'hui. Quand je
            découvre quelque chose que j'aime, comme la musique ou la programmation, je m'y investis à fond.
          </p>
          <p>
            <strong>
              J'ai une personnalité de travailleur&nbsp;: persévérant, passionné et orienté vers l'excellence.
            </strong>{" "}
            Je n'aime pas l'échec et je fais de mon mieux, à chaque défi, pour bien faire les choses. Quand j'échoue, je le
            prends difficilement, mais ça me propulse vers d'autres niveaux de persévérance. Ce que j'aime encore moins
            que l'échec, c'est l'abandon. Pour moi, abandonner est le véritable échec. Alors,{" "}
            <strong>je m'efforce constamment de progresser</strong> plutôt que de me résigner à la défaite.
          </p>
          <p>
            <strong>Tout ce que je fais, je le fais de mon mieux</strong> et je trouve des solutions pour améliorer mon
            environnement de travail. Avec moi, vous pouvez vous attendre à un travail professionnel, sérieux et bien fait.
            Je donne toujours le meilleur de moi-même, peu importe la responsabilité.
          </p>
        </section>

        <section className="max-text-width">
          <div className="stylish-shadow-image">
            <span aria-hidden="true" className="stylish-shadow-image--overlay-text">L'art révèle</span>
            <ResponsiveImage
              path="/images/about/about"
              alt="L'art révèle"
              renderedWidth={501}
              renderedHeight={752}
              desktopWidth={1000}
              mobileWidth={501}
              mobilePath="/images/about/about-w501"
              className={styles.stylishImage}
            />
          </div>
        </section>
      </div>
    </PageTemplate>
  );
}
