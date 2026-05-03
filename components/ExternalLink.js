import {useIsEnglish} from "../hooks/useIsEnglish";

function getLinkTitle(isEnglish, opensNewTab) {
  if (!opensNewTab) {
    return undefined;
  }

  return isEnglish ? "Opens in a new tab" : "Ouvre dans un nouvel onglet";
}

export default function ExternalLink({url, className, children, ariaLabel}) {
  const isEnglish = useIsEnglish();

  const opensNewTab = /^https?:\/\//i.test(url);
  const linkTitle = getLinkTitle(isEnglish, opensNewTab);

  return (
    <a
      href={url}
      target={opensNewTab ? "_blank" : undefined}
      rel={opensNewTab ? "noopener noreferrer" : undefined}
      aria-label={ariaLabel}
      title={linkTitle}
      className={className}
    >
      {children}
    </a>
  );
}
