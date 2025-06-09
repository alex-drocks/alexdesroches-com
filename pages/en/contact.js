import React from 'react';
import PageTemplate from "../../components/PageTemplate";
import styles from "../../styles/contact.module.css";
import ContactLink from "../../components/ContactLink";
import {myContactLinks} from "../../lib/myContactLinks";
import {CellphoneLogo, EmailLogo, LinkedinLogo} from "../../components/Logos";
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
            Feel free to contact me, it will be a pleasure to discuss about your project.
            You can reach me via one of the links below:
          </p>

          <ul className={styles.contactLinks}>
            {/*<ContactLink*/}
            {/*  label="Messenger"*/}
            {/*  url={myContactLinks.messenger}*/}
            {/*  svgIcon={<MessengerLogo/>}*/}
            {/*/>*/}
            <ContactLink
              label="Email"
              url={`mailto:${myContactLinks.email}`}
              svgIcon={<EmailLogo/>}
            />
            {/* <ContactLink
              label="Mobile phone"
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
};

export default Contact;
