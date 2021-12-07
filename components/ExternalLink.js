export default function ExternalLink({url, className, children}) {
  return (
    <a href={url}
       target="_blank"
       rel="noopener noreferrer"
       aria-label="Cliquez pour ouvrir ce lien dans une nouvelle fenêtre"
       title="Cliquez pour ouvrir ce lien dans une nouvelle fenêtre"
       className={className}
    >
      {children}
    </a>
  )
}