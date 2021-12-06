import styles from "../styles/programmation.module.css";
import ResponsiveImage from "./ResponsiveImage";
import ExternalLink from "./ExternalLink";


export default function Project({title, description, imgSrc, features, technologies, timespan, url}) {
  return (
    <div className={styles.project + " max-content-width display-flex"}>
      <div className={styles.leftColumn + " max-text-width"}>
        <h3>{title}</h3>
        <p>{description}</p>
        <ExternalLink url={url}>
          <ResponsiveImage
            path={imgSrc}
            alt={title}
            renderedWidth={501}
            renderedHeight={752}
            desktopWidth={1000}
            mobileWidth={501}
          />
        </ExternalLink>

      </div>
      <div className={styles.rightColumn + " max-text-width"}>
        <div>
          <h4>Technologies utilisées&nbsp;:</h4>
          <p>{technologies}</p>
        </div>
        <div>
          <h4>Réalisations incluses&nbsp;:</h4>
          <p>{features}</p>
        </div>
        <div>
          <h4>Chronologie&nbsp;:</h4>{" "}
          <span>{timespan}</span>
        </div>
        <br/>
        <div>
          <h4>Lien pour obtenir plus de détails&nbsp;:</h4>{" "}
          <span><ExternalLink url={url} className="text-link">{url}</ExternalLink></span>
        </div>
      </div>
    </div>

  )
}