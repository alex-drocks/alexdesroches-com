import PageTemplate from "../components/PageTemplate";
import ResponsiveImage from "../components/ResponsiveImage";
import ContactOptions from "../components/ContactOptions";

export default function Contact() {
  return (
    <PageTemplate
      pageTitle="Contact | Alex Desroches, développeur web"
      pageDescription="Contactez Alex Desroches pour discuter de votre site web, application ou projet JavaScript. Réponse par courriel ou LinkedIn."
      pageCanonicalURL={process.env.NEXT_PUBLIC_WEBSITE_URL + "/contact/"}
      pageAlternateURL={process.env.NEXT_PUBLIC_WEBSITE_URL + "/en/contact/"}
    >
      <div className="max-content-width display-flex">
        <section className="max-text-width">
          <h1>Contactez Alex Desroches</h1>
          <p>
            N'hésitez pas à me contacter. Ce sera un plaisir de <strong>discuter de votre projet</strong>.
            Je suis joignable par l'un des moyens ci-dessous&nbsp;:
          </p>

          <ContactOptions/>

        </section>

        <div className="max-text-width">
          <div className="stylish-shadow-image">
            <span aria-hidden="true" className="stylish-shadow-image--overlay-text">L'art communique</span>
            <ResponsiveImage
              path="/images/celltower/celltower"
              alt="L'art communique"
              renderedWidth={501}
              renderedHeight={752}
              desktopWidth={1000}
              mobileWidth={501}
            />
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
