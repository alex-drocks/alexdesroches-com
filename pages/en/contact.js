import PageTemplate from "../../components/PageTemplate";
import styles from "../../styles/contact.module.css";
import ContactLink from "../../components/ContactLink";
import {myContactLinks} from "../../lib/myContactLinks";
import {EmailLogo, LinkedinLogo} from "../../components/Logos";
import ResponsiveImage from "../../components/ResponsiveImage";

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

          <ul className={styles.contactLinks}>
            <ContactLink
              label="Email"
              url={`mailto:${myContactLinks.email}`}
              svgIcon={<EmailLogo/>}
            />
            <ContactLink
              label="LinkedIn"
              url={myContactLinks.linkedIn}
              svgIcon={<LinkedinLogo/>}
            />
          </ul>

        </section>

        <section className="max-text-width">
          <div className="stylish-shadow-image">
            <ResponsiveImage
              path="/images/celltower/celltower"
              alt="Art is Communicating"
              renderedWidth={501}
              renderedHeight={752}
              desktopWidth={1000}
              mobileWidth={501}
            />
          </div>
        </section>
      </div>
    </PageTemplate>
  );
};

export default Contact;
