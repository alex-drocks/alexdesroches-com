import styles from "../styles/contact.module.css";
import ExternalLink from "./ExternalLink";

function ContactLink({label, url, svgIcon}) {
  return (
    <li className={styles.contactLink}>
      <ExternalLink
        className="text-link"
        url={url}
      >
        {svgIcon}
        {label} →
      </ExternalLink>
    </li>
  )
}

export default ContactLink
