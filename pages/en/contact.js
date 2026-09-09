import PageTemplate from "../../components/PageTemplate";
import ResponsiveImage from "../../components/ResponsiveImage";
import ContactOptions from "../../components/ContactOptions";

const Contact = () => {
  return (
    <PageTemplate
      pageTitle="Contact Alex Desroches | Web Developer"
      pageDescription="Contact Alex Desroches to discuss a website, web app or JavaScript project. Reach out by email or LinkedIn."
      pageCanonicalURL={process.env.NEXT_PUBLIC_WEBSITE_URL + "/en/contact/"}
      pageAlternateURL={process.env.NEXT_PUBLIC_WEBSITE_URL + "/contact/"}
    >
      <div className="max-content-width display-flex">
        <section className="max-text-width">
          <h1>Contact Alex Desroches</h1>
          <p>
            Feel free to contact me. It would be a pleasure to <strong>talk about your project</strong>.
            You can reach me through one of the links below:
          </p>

          <ContactOptions/>

        </section>

        <div className="max-text-width">
          <div className="stylish-shadow-image">
            <span aria-hidden="true" className="stylish-shadow-image--overlay-text">Art is Communicating</span>
            <ResponsiveImage
              path="/images/celltower/celltower"
              alt="Art is Communicating"
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
};

export default Contact;
