import {useEffect, useState} from "react";
import PageTemplate from "../../components/PageTemplate";
import ResponsiveImage from "../../components/ResponsiveImage";
import ExternalLink from "../../components/ExternalLink";
import {CellphoneLogo, EmailLogo, LinkedinLogo} from "../../components/Logos";

import {myContactLinks} from "../../lib/myContactLinks";
import ContactLink from "../../components/ContactLink";

import styles from "../../styles/contact.module.css";


export default function Contact() {
  const [pdfUrl, setPdfUrl] = useState("")
  useEffect(() => {
    setPdfUrl(`${window.location.origin}/resume/RESUME-Alexandre-Desroches-2022.pdf`)
  }, [])
  return (
    <PageTemplate
      pageTitle={"Resume | " + process.env.NEXT_PUBLIC_WEBSITE_TITLE}
      pageDescription="Alexandre Desroches's resume."
      pageCanonicalURL={process.env.NEXT_PUBLIC_WEBSITE_URL + "/en/resume/"}
    >
      <div className="max-content-width display-flex">
        <section className="max-text-width">
          <h2>My Resume</h2>
          <p>
            Here's my Curriculum Vitae, downloadable as a PDF file&nbsp;:<br/>
            <ExternalLink
              url={pdfUrl}
              className="text-link"
            >
              <strong>Resume-Alexandre-Desroches-2022.pdf</strong>
            </ExternalLink>
          </p>

          <h3>Summary</h3>
          <p>
            JavaScript developer with 3 years of hands-on experience. Specialized with Web Front-End and React.
          </p>

          <h3>My contact informations</h3>
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

          <h3>My LinkedIn profile</h3>
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
