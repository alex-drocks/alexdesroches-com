import PageTemplate from "../components/PageTemplate";
import ResponsiveImage from "../components/ResponsiveImage";
import ExternalLink from "../components/ExternalLink";
import {CellphoneLogo, EmailLogo, LinkedinLogo} from "../components/Logos";

import {myContactLinks} from "../lib/myContactLinks";
import ContactLink from "../components/ContactLink";

import styles from "../styles/contact.module.css";


export default function Contact() {
  return (
    <PageTemplate
      pageTitle={"Contact | " + process.env.NEXT_PUBLIC_WEBSITE_TITLE}
      pageDescription="Contacter Alexandre Desroches. Coordonnées directes, téléphone cellulaire et courriel."
      pageCanonicalURL={process.env.NEXT_PUBLIC_WEBSITE_URL + "/contact/"}
    >
      <div className="max-content-width display-flex">
        <section className="max-text-width">
          <h2>Contacter Alexandre Desroches</h2>
          <p>
            N'hésitez pas à me contacter, ce sera un plaisir de discuter de votre projet.
            Je suis joignable en tout temps par l'un des moyens ci-dessous&nbsp;:
          </p>

          <ul className={styles.contactLinks}>
            {/*<ContactLink*/}
            {/*  label="Messenger"*/}
            {/*  url={myContactLinks.messenger}*/}
            {/*  svgIcon={<MessengerLogo/>}*/}
            {/*/>*/}
            <ContactLink
              label="Courriel"
              url={`mailto:${myContactLinks.email}`}
              svgIcon={<EmailLogo/>}
            />
            {/* <ContactLink
              label="Cellulaire"
              url={`tel:${myContactLinks.cellphone}`}
              svgIcon={<CellphoneLogo/>}
            /> */}
            <ContactLink
              label="LinkedIn"
              url={myContactLinks.linkedIn}
              svgIcon={<LinkedinLogo/>}
            />
            {/*<ContactLink*/}
            {/*  label="GitHub"*/}
            {/*  url={myContactLinks.github}*/}
            {/*  svgIcon={<GithubLogo/>}*/}
            {/*/>*/}
            {/*<ContactLink*/}
            {/*  label="Facebook"*/}
            {/*  url={myContactLinks.facebook}*/}
            {/*  svgIcon={<FacebookLogo/>}*/}
            {/*/>*/}
            {/*<ContactLink*/}
            {/*  label="Twitter"*/}
            {/*  url={myContactLinks.twitter}*/}
            {/*  svgIcon={<TwitterLogo/>}*/}
            {/*/>*/}
          </ul>

        </section>

        <section className="max-text-width">
          <div className="stylish-shadow-image">
            {/*<span*/}
            {/*  className={styles.imageTextOverlay + " stylish-shadow-image--overlay-text"}>Art is Communicating</span>*/}
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
}
