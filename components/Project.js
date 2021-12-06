import styles from "../styles/programmation.module.css";
import ResponsiveImage from "./ResponsiveImage";
import ExternalLink from "./ExternalLink";


export default function Project({title, description, imgSrc, technologies, timespan, url}) {
  return (
    <div className={styles.project + " max-content-width display-flex"}>
      <div className={styles.leftColumn + " max-text-width"}>
        <h3>{title}</h3>
        <p>
          {description}{" "}
          <ExternalLink url={url} className="text-link">En savoir plus&nbsp;&rarr;</ExternalLink>
        </p>
        <ResponsiveImage
          path={imgSrc}
          alt={title}
          renderedWidth={501}
          renderedHeight={752}
          desktopWidth={1000}
          mobileWidth={501}
        />
      </div>
      <div className={styles.rightColumn + " max-text-width"}>
        <div>
          <strong>Technologies utilisées&nbsp;:</strong>
          <p>{technologies}</p>
        </div>
        <div>
          <strong>Chronologie&nbsp;:</strong>{" "}
          <span>{timespan}</span>
        </div>
        <br/>
        <div>
          <strong>Lien pour obtenir plus de détails&nbsp;:</strong>{" "}
          <span><ExternalLink url={url} className="text-link">{url}</ExternalLink></span>
        </div>
      </div>
    </div>

  )
}