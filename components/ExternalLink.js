export default function ExternalLink({url, className, children}) {
  return (
    <a href={url}
       target="_blank"
       rel="noopener noreferrer"
       aria-label={`Cliquez pour plus d'informations à propos de : ${children}`}
       title={`Cliquez pour plus d'informations à propos de : ${children}`}
       className={className}
    >
      {children}
    </a>
  )
}