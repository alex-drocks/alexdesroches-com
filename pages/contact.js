import PageTemplate from "../components/PageTemplate";
import ResponsiveImage from "../components/ResponsiveImage";
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
            N'hésitez pas à me contacter, ce sera un plaisir pour moi de discuter avec vous.
            Je suis joignable en tout temps par l'un des moyens de communication ci-dessous&nbsp;:
          </p>

          <ul className={styles.contactLinks}>
            <ContactLink
              label="Messenger"
              url="https://m.me/alexandre.drocks"
              svgIcon={<svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" fillRule="evenodd"
                            clipRule="evenodd" viewBox="0 0 24 24">
                <path
                  d="M12 0C5.37 0 0 4.97 0 11.11c0 3.5 1.75 6.62 4.47 8.65V24l4.09-2.24c1.09.3 2.24.46 3.44.46 6.63 0 12-4.97 12-11.1C24 4.96 18.63 0 12 0zm1.2 14.96-3.06-3.26-5.97 3.26L10.73 8l3.13 3.26L19.76 8l-6.57 6.96z"/>
              </svg>}
            />
            <ContactLink
              label="Courriel"
              url="mailto:alex.desroches7@gmail.com"
              svgIcon={<svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" fillRule="evenodd"
                            clipRule="evenodd" viewBox="0 0 24 24">
                <path
                  d="M22.29 21H1.7C.77 21 0 20.23 0 19.29V5.7C0 4.77.77 4 1.71 4H22.3c.94 0 1.71.77 1.71 1.71V19.3c0 .94-.77 1.71-1.71 1.71zM12 14.91 2.66 8.43 2.64 20h18.68V8.43L12 14.91zM20.87 5H3.08L12 11.23s6.25-4.4 8.87-6.23z"/>
              </svg>}
            />
            <ContactLink
              label="Cellulaire"
              url="tel:+1 (438) 395-7649"
              svgIcon={<svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M17.5 2c.276 0 .5.224.5.5v19c0 .276-.224.5-.5.5h-11c-.276 0-.5-.224-.5-.5v-19c0-.276.224-.5.5-.5h11zM20 2c0-1.104-.896-2-2-2H6C4.896 0 4 .896 4 2v20c0 1.104.896 2 2 2h12c1.104 0 2-.896 2-2V2zm-9.5 1h3c.276 0 .5.224.5.501 0 .275-.224.499-.5.499h-3c-.275 0-.5-.224-.5-.499 0-.277.225-.501.5-.501zM12 21c-.553 0-1-.448-1-1s.447-1 1-1c.552 0 .999.448.999 1s-.447 1-.999 1zm5-3H7V5h10v13z"/>
              </svg>}
            />
            <ContactLink
              label="LinkedIn"
              url="https://www.linkedin.com/in/alexandre-desroches-dev/"
              svgIcon={<svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M19 0H5C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5V5c0-2.761-2.238-5-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z"/>
              </svg>}
            />
            <ContactLink
              label="Github"
              url="https://github.com/alex-drocks"
              svgIcon={<svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>}
            />
            <ContactLink
              label="Facebook"
              url="https://www.facebook.com/alexandre.drocks"
              svgIcon={<svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3 8h-1.35c-.538 0-.65.221-.65.778V10h2l-.209 2H13v7h-3v-7H8v-2h2V7.692C10 5.923 10.931 5 13.029 5H15v3z"/>
              </svg>}
            />
            <ContactLink
              label="Twitter"
              url="https://twitter.com/DrocksAlex"
              svgIcon={<svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195a4.9156 4.9156 0 0 0-3.594-1.555c-3.179 0-5.515 2.966-4.797 6.045C7.728 8.088 4.1 6.128 1.671 3.149c-1.29 2.213-.669 5.108 1.523 6.574a4.903 4.903 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>}
            />
          </ul>

          <h3>Coordonnées pour me joindre</h3>
          <p>
            alex.desroches7@gmail.com<br/>
            +1 (438) 395-7649<br/>
            <br/>
            1684, rue Girard<br/>
            Ste-Marie-Madeleine<br/>
            Québec, Canada<br/>
            J0H 1S0
          </p>

        </section>

        <section className="max-text-width">
          <div className="stylish-shadow-image">
            <span
              className={styles.imageTextOverlay + " stylish-shadow-image--overlay-text"}>Art is Communicating</span>
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
  )
    ;
}

function ContactLink(
  {
    label, url, svgIcon
  }
) {
  return (
    <li className={styles.contactLink}>
      <a
        className="text-link"
        href={url}
        target="_blank"
        rel="noreferrer noopener"
      >
        {svgIcon}
        {label}&nbsp;&rarr;
      </a>
    </li>
  )
}
