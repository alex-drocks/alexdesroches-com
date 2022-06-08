import {useEffect, useState} from "react";

import PageTemplate from "../components/PageTemplate";
import ResponsiveImage from "../components/ResponsiveImage";
import ExternalLink from "../components/ExternalLink";
import {CellphoneLogo, EmailLogo, LinkedinLogo,} from "../components/Logos";

import {myContactLinks} from "../lib/myContactLinks";
import ContactLink from "../components/ContactLink";

import styles from "../styles/contact.module.css";


export default function Contact() {
  const [pdfUrl, setPdfUrl] = useState("")
  useEffect(() => {
    setPdfUrl(`${window.location.origin}/resume/CV-Alexandre-Desroches-2022.pdf`)
  }, [])
  return (
    <PageTemplate
      pageTitle={"CV | " + process.env.NEXT_PUBLIC_WEBSITE_TITLE}
      pageDescription="Curriculum vitae Alexandre Desroches."
      pageCanonicalURL={process.env.NEXT_PUBLIC_WEBSITE_URL + "/resume/"}
    >
      <div className="max-content-width display-flex">
        <section className="max-text-width">
          <h2>Mon CV</h2>
          <p>
            Voici mon curriculum vitae, téléchargeable au format PDF&nbsp;:<br/>
            <ExternalLink
              url={pdfUrl}
              className="text-link"
            >
              <strong>CV-Alexandre-Desroches-2022.pdf</strong>
            </ExternalLink>
          </p>

          <h3>En résumé</h3>
          <p>
            Programmeur JavaScript depuis 3 ans. Spécialisé avec le développement Web Front-End et React.
          </p>

          <h3>Mes informations</h3>
          <ul className={styles.contactLinks}>
            <ContactLink
              label="alex.desroches7@gmail.com"
              url={`mailto:${myContactLinks.email}`}
              svgIcon={<EmailLogo/>}
            />
            <ContactLink
              label="+1 (438) 395-7649"
              url={`tel:${myContactLinks.cellphone}`}
              svgIcon={<CellphoneLogo/>}
            />
          </ul>
          <ExternalLink url="https://maps.google.com/?q=1684+Rue+Girard+Sainte-Madeleine+QC+J0H+1S0">
            <address className="address">
              1684, rue Girard<br/>
              Ste-Marie-Madeleine<br/>
              Québec, Canada<br/>
              J0H 1S0
            </address>
          </ExternalLink>

          <h3>Mon profil sur LinkedIn</h3>
          <ul className={styles.contactLinks}>
            <ContactLink
              label="LinkedIn"
              url={myContactLinks.linkedIn}
              svgIcon={<LinkedinLogo/>}
            />
          </ul>
        </section>

        <section className="max-text-width">
          <div className="stylish-shadow-image">
            <span
              className={styles.imageTextOverlay + " stylish-shadow-image--overlay-text"}></span>
            <ResponsiveImage
              path="/images/resume-cv/resume"
              alt=""
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
