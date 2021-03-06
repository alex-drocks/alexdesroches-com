import React from 'react';
import PageTemplate from "../../components/PageTemplate";
import styles from "../../styles/contact.module.css";
import ContactLink from "../../components/ContactLink";
import {myContactLinks} from "../../lib/myContactLinks";
import {
  CellphoneLogo,
  EmailLogo,
  FacebookLogo,
  GithubLogo,
  LinkedinLogo,
  MessengerLogo,
  TwitterLogo
} from "../../components/Logos";
import ExternalLink from "../../components/ExternalLink";
import ResponsiveImage from "../../components/ResponsiveImage";

const Contact = () => {
  return (
    <PageTemplate
      pageTitle={"Contact | " + process.env.NEXT_PUBLIC_WEBSITE_TITLE}
      pageDescription="Alexandre Desroches's contact info. Cellphone number, email and social network links."
      pageCanonicalURL={process.env.NEXT_PUBLIC_WEBSITE_URL + "/en/contact/"}
    >
      <div className="max-content-width display-flex">
        <section className="max-text-width">
          <h2>Contact Alexandre Desroches</h2>
          <p>
            Feel free to contact me, it will be my pleasure to discuss with you.
            I'm available about anytime using one of the below links:
          </p>

          <ul className={styles.contactLinks}>
            <ContactLink
              label="Messenger"
              url={myContactLinks.messenger}
              svgIcon={<MessengerLogo/>}
            />
            <ContactLink
              label="Courriel"
              url={`mailto:${myContactLinks.email}`}
              svgIcon={<EmailLogo/>}
            />
            <ContactLink
              label="Cellulaire"
              url={`tel:${myContactLinks.cellphone}`}
              svgIcon={<CellphoneLogo/>}
            />
            <ContactLink
              label="LinkedIn"
              url={myContactLinks.linkedIn}
              svgIcon={<LinkedinLogo/>}
            />
            <ContactLink
              label="GitHub"
              url={myContactLinks.github}
              svgIcon={<GithubLogo/>}
            />
            <ContactLink
              label="Facebook"
              url={myContactLinks.facebook}
              svgIcon={<FacebookLogo/>}
            />
            <ContactLink
              label="Twitter"
              url={myContactLinks.twitter}
              svgIcon={<TwitterLogo/>}
            />
          </ul>

          <h3>Contact info</h3>
          <p>
            <ExternalLink url={`mailto:${myContactLinks.email}`}>{myContactLinks.email}</ExternalLink><br/>
          </p>
          <p>
            <ExternalLink url={`tel:${myContactLinks.cellphone}`}>{myContactLinks.cellphone}</ExternalLink><br/>
          </p>
          <ExternalLink url="https://maps.google.com/?q=1684+Rue+Girard+Sainte-Madeleine+QC+J0H+1S0">
            <address className="address">
              1684, rue Girard<br/>
              Ste-Marie-Madeleine<br/>
              Qu??bec, Canada<br/>
              J0H 1S0
            </address>
          </ExternalLink>

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
};

export default Contact;
