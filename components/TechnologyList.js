import ExternalLink from "./ExternalLink";
import styles from "../styles/programmation.module.css";

const technologies = {
  core: [
    ["JavaScript", "JavaScript"],
    ["HTML", "HTML"],
    ["CSS", "CSS"],
    ["Node.js", "Node.js"],
    ["Bun", "Bun_(software)"],
    ["React.js", "React_(JavaScript_library)"],
    ["Next.js", "Next.js"],
    ["Bittensor", "Bittensor"],
    ["Python", "Python_(programming_language)"],
    ["Angular", "Angular_(web_framework)"],
    ["Electron.js", "Electron_(software_framework)"],
    ["Firebase", "Firebase"],
    ["AutoHotkey", "AutoHotkey"],
    ["Git, GitHub", "GitHub"],
    ["Linux", "Linux"],
    ["AI Agents", "AI_agent"],
  ],
  additional: [
    ["PHP", "PHP"],
    ["Java", "Java_(programming_language)"],
    ["C#", "C_Sharp_(programming_language)"],
    ["SQL", "SQL"],
    ["WordPress", "WordPress"],
    ["WooCommerce", "WooCommerce"],
    ["Astro.js", "https://astro.build/"],
    ["Kubernetes", "Kubernetes"],
  ],
};

export default function TechnologyList({category}) {
  const entries = technologies[category];
  const midpoint = entries.length / 2;
  const columns = [entries.slice(0, midpoint), entries.slice(midpoint)];

  return (
    <div className={styles.techListsContainer}>
      {columns.map(column => (
        <ul key={column[0][0]}>
          {column.map(([name, reference]) => (
            <li key={name}>
              <ExternalLink url={reference.startsWith("https://") ? reference : `https://en.wikipedia.org/wiki/${reference}`}>
                {name}
              </ExternalLink>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
