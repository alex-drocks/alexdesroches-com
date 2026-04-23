import {useIsEnglish} from "../hooks/useIsEnglish";

export default function ExternalLink({url, className, children}) {
  const isEnglish = useIsEnglish();

  const opensNewTab = /^https?:\/\//i.test(url);
  const newTabLabel = isEnglish
    ? "Click to open this link in a new tab"
    : "Cliquez pour ouvrir ce lien dans un nouvel onglet";

  return (
    <a
      href={url}
      target={opensNewTab ? "_blank" : undefined}
      rel={opensNewTab ? "noopener noreferrer" : undefined}
      aria-label={newTabLabel}
      title={newTabLabel}
      className={className}
    >
      {children}
    </a>
  );
}
