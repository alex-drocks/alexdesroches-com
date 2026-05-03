import PageTemplate from "../components/PageTemplate";
import ResponsiveImage from "../components/ResponsiveImage";
import {EmailLogo, LinkedinLogo} from "../components/Logos";

import {myContactLinks} from "../lib/myContactLinks";
import ContactLink from "../components/ContactLink";

import styles from "../styles/contact.module.css";


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
            N'hésitez pas à me contacter. Ce sera un plaisir de discuter de votre projet.
            Je suis joignable par l'un des moyens ci-dessous :
          </p>

          <ul className={styles.contactLinks}>
            <ContactLink
              label="Courriel"
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
              alt="L'art communique"
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
}
