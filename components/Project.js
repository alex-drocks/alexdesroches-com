import styles from "../styles/programmation.module.css";
import ResponsiveImage from "./ResponsiveImage";
import ExternalLink from "./ExternalLink";


export default function Project({title, description, imgSrc, technologies, timespan, url}) {
  return (
    <div className={styles.project + " max-content-width display-flex"}>
      <div className="max-text-width">
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
      <div className="max-text-width">
        <div>
          <h4>Technologies utilisées&nbsp;:</h4>
          {technologies}
        </div>
        <div>
          <h4>Chronologie&nbsp;:</h4>
          {timespan}
        </div>
        <div>
          <h4>Lien pour obtenir plus de détails&nbsp;:</h4>
          <ExternalLink url={url} className="text-link">{url}</ExternalLink>
        </div>
      </div>
    </div>

  )
}