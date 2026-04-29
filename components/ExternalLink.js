import {useIsEnglish} from "../hooks/useIsEnglish";

function getLinkLabel(url, isEnglish, opensNewTab) {
  if (/^mailto:/i.test(url)) {
    return isEnglish ? "Send an email" : "Envoyer un courriel";
  }

  if (/^tel:/i.test(url)) {
    return isEnglish ? "Call this phone number" : "Appeler ce numéro de téléphone";
  }

  if (opensNewTab) {
    return isEnglish
      ? "Click to open this link in a new tab"
      : "Cliquez pour ouvrir ce lien dans un nouvel onglet";
  }

  return undefined;
}

export default function ExternalLink({url, className, children}) {
  const isEnglish = useIsEnglish();

  const opensNewTab = /^https?:\/\//i.test(url);
  const linkLabel = getLinkLabel(url, isEnglish, opensNewTab);

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
