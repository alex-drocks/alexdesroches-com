import styles from "../styles/programmation.module.css";
import ResponsiveImage from "./ResponsiveImage";
import ExternalLink from "./ExternalLink";
import {useIsEnglish} from "../hooks/useIsEnglish";

export default function Project({title, description, imgSrc, features, technologies, timespan, url}) {
  const isEnglish = useIsEnglish()
  const technologyList = technologies
    .split(",")
    .map((technology) => technology.trim().replace(/\.$/, ""))
    .filter(Boolean);


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
            loading="lazy"
          />
        </ExternalLink>

      </div>
      <div className={styles.rightColumn + " max-text-width"}>
        <div>
          <h4>
            {isEnglish
              ? <>Technologies I used:</>
              : <>Technologies utilisées&nbsp;:</>
            }
          </h4>
          <ul className={styles.projectTechnologies} aria-label={isEnglish ? "Technologies used" : "Technologies utilisées"}>
            {technologyList.map((technology) => <li key={technology}>{technology}</li>)}
          </ul>
        </div>
        <div>
          <h4>
            {isEnglish
              ? <>Key features:</>
              : <>Ce qui a été réalisé&nbsp;:</>
            }
          </h4>
          <p>{features}</p>
        </div>
        <div>
          <h4>
            {isEnglish
              ? <>Timeline:</>
              : <>Chronologie&nbsp;:</>
            }
          </h4>
          <span>{timespan}</span>
        </div>
        <br/>
        <div>
          <h4>
            {isEnglish
              ? <>More details:</>
              : <>Plus de détails&nbsp;:</>
            }
          </h4>{" "}
          <span><ExternalLink url={url} className="text-link">{url}</ExternalLink></span>
        </div>
      </div>
    </div>
  )
}
