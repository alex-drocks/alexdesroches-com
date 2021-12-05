export default function ExternalLink({url, className, children}) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={className}>{children}</a>
  )
}