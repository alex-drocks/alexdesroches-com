import PageTemplate from "../components/PageTemplate";

export default function Musique() {
  return (
    <PageTemplate
      pageTitle={"Musique | " + process.env.NEXT_PUBLIC_WEBSITE_TITLE}
      pageDescription="Services de composition musicale et services de mixage audio. Musique, podcasts et plus. Alexandre Desroches freelancer travaillant avec Cubase et Reaper depuis plus de 10 ans."
      pageCanonicalURL={process.env.NEXT_PUBLIC_WEBSITE_URL + "/musique/"}
    >
      <div className="readable-width-container">
        <h1>Musique & sonorisation</h1>
        <h2>
          La musique est comme l'expression inachevée des pensées inexprimables les plus profondes.
          Le son est le courant d'air que produisent ces notes dans l'univers de qui le perçoit.
          En d'autres mots, la musique et la sonorisation sont fascinantes.
        </h2>
        <p>
          Depuis plus de {new Date().getFullYear() - 2005} ans, je suis passionné par la composition musicale ainsi que
          par le mixage de musique. Durant cette période, j'ai eu le privilège de créer des chansons originales,
          d'enregister et de mixer des projets pour d'autres artistes; Sans minimiser l'importance des oeuvres
          incroyablement bonnes que j'ai pu apprécier et qui m'ont influencé.
        </p>
        <div>
          <h2>Mes Compositions</h2>
          {/*todo*/}
        </div>
        <div>
          <h2>Projets réalisés pour des clients</h2>
          {/*todo*/}
        </div>
        <div>
          <h2>Musique que j'apprécie</h2>
          {/*todo*/}
        </div>

        <a href="https://drocksrecords.com">D Rocks Records</a>

      </div>
    </PageTemplate>
  );
}
