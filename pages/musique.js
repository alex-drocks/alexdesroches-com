import PageLayout from "../components/PageLayout";

export default function Musique() {
  return (
    <PageLayout
      pageTitle={"Musique | " + process.env.NEXT_PUBLIC_WEBSITE_TITLE}
      pageDescription="Services de composition musicale et services de mixage audio. Musique, podcasts et plus. Alexandre Desroches freelancer travaillant avec Cubase et Reaper depuis plus de 10 ans."
      pageCanonicalURL={process.env.NEXT_PUBLIC_WEBSITE_URL + "/musique/"}
    >
      <h1>Musique</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa eaque eligendi illo incidunt ipsum nam nulla
        similique sit tempore unde. Assumenda autem beatae error iste maxime nostrum optio voluptates voluptatum!
      </p>
    </PageLayout>
  );
}
