import {EmailLogo, LinkedinLogo} from "./Logos";
import ExternalLink from "./ExternalLink";
import {myContactLinks} from "../lib/myContactLinks";
import {useIsEnglish} from "../hooks/useIsEnglish";
import styles from "../styles/contact.module.css";

export default function ContactOptions() {
  const isEnglish = useIsEnglish();
  const contactOptions = [
    {label: isEnglish ? "Email" : "Courriel", url: `mailto:${myContactLinks.email}`, icon: <EmailLogo/>},
    {label: "LinkedIn", url: myContactLinks.linkedIn, icon: <LinkedinLogo/>},
  ];

  return (
    <ul className={styles.contactLinks}>
      {contactOptions.map(({label, url, icon}) => (
        <li key={url} className={styles.contactLink}>
          <ExternalLink className="text-link" url={url}>
            {icon}
            {label}&nbsp;&rarr;
          </ExternalLink>
        </li>
      ))}
    </ul>
  );
}
