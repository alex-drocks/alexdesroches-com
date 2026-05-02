import {useIsEnglish} from "../hooks/useIsEnglish";

function getLinkLabel(url, isEnglish, opensNewTab, explicitLabel) {
  if (explicitLabel) {
    return explicitLabel;
  }

  if (/^mailto:/i.test(url)) {
    return isEnglish ? "Send an email" : "Envoyer un courriel";
  }

  if (/^tel:/i.test(url)) {
    return isEnglish ? "Call this phone number" : "Appeler ce numéro de téléphone";
  }

  if (opensNewTab) {
    return isEnglish
      ? "Open link in a new tab"
      : "Ouvrir le lien dans un nouvel onglet";
  }

  return undefined;
}

export default function ExternalLink({url, className, ariaLabel, children}) {
  const isEnglish = useIsEnglish();

  const opensNewTab = /^https?:\/\//i.test(url);
  const linkLabel = getLinkLabel(url, isEnglish, opensNewTab, ariaLabel);

  return (
    <a
      href={url}
      target={opensNewTab ? "_blank" : undefined}
      rel={opensNewTab ? "noopener noreferrer" : undefined}
      aria-label={linkLabel}
      title={linkLabel}
      className={className}
    >
      {children}
    </a>
  );
}
