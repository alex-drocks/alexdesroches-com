import PageLayout from "../components/PageLayout";

export default function APropos() {
  return (
    <PageLayout
      pageTitle={"À propos | " + process.env.NEXT_PUBLIC_WEBSITE_TITLE}
      pageDescription="En savoir plus à propos d'Alexandre Desroches."
      pageCanonicalURL={process.env.NEXT_PUBLIC_WEBSITE_URL + "/a-propos/"}
    >
      <h1>À propos</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus animi beatae, commodi dignissimos
        doloribus ea incidunt iure, natus quaerat quam quas quisquam rerum saepe vitae! Illum quaerat quisquam vero.
      </p>
    </PageLayout>
  );
}
