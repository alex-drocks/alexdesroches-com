import {useEffect, useState} from "react";

const skillWords = [
  "JavaScript",
  "HTML",
  "CSS",
  "Node.js",
  "Bun",
  "React.js",
  "Next.js",
  "Bittensor",
  "Python",
  "Angular",
  "Electron.js",
  "Firebase",
  "AutoHotkey",
  "Git",
  "GitHub",
  "GitLab",
  "Linux",
  "AI Agents",
  "PHP",
  "Java",
  "C#",
  "SQL",
  "WordPress",
  "WooCommerce",
  "Astro.js",
  "Kubernetes",
];

const initialSkills = [
  "JavaScript",
  "React.js",
  "Next.js",
  "Node.js",
  "CSS",
  "HTML",
  "Firebase",
  "Electron.js",
  "AI Agents",
  "Python",
  "GitHub",
  "Bun",
];

const defaultCoreLabels = {
  build: "build",
  ship: "ship",
  maintain: "maintain",
};

const skillSlots = [
  {id: "north-west", x: "17%", y: "24%", delay: "-7s", duration: "19s", driftX: "13px", driftY: "-11px", tone: "primary"},
  {id: "north", x: "47%", y: "13%", delay: "-3s", duration: "21s", driftX: "-12px", driftY: "10px", tone: "light"},
  {id: "north-east", x: "78%", y: "22%", delay: "-11s", duration: "18s", driftX: "10px", driftY: "13px", tone: "accent"},
  {id: "west", x: "10%", y: "49%", delay: "-5s", duration: "22s", driftX: "15px", driftY: "8px", tone: "light"},
  {id: "inner-west", x: "35%", y: "39%", delay: "-14s", duration: "17s", driftX: "-9px", driftY: "-12px", tone: "primary"},
  {id: "inner-east", x: "64%", y: "43%", delay: "-9s", duration: "20s", driftX: "12px", driftY: "-9px", tone: "light"},
  {id: "east", x: "88%", y: "51%", delay: "-2s", duration: "23s", driftX: "-13px", driftY: "9px", tone: "primary"},
  {id: "south-west", x: "22%", y: "73%", delay: "-12s", duration: "18s", driftX: "8px", driftY: "14px", tone: "accent"},
  {id: "south", x: "50%", y: "84%", delay: "-4s", duration: "24s", driftX: "-10px", driftY: "-12px", tone: "light"},
  {id: "south-east", x: "78%", y: "76%", delay: "-16s", duration: "19s", driftX: "11px", driftY: "-10px", tone: "primary"},
  {id: "lower-inner-west", x: "38%", y: "63%", delay: "-1s", duration: "20s", driftX: "-12px", driftY: "9px", tone: "light"},
  {id: "upper-inner-east", x: "64%", y: "29%", delay: "-8s", duration: "22s", driftX: "9px", driftY: "11px", tone: "accent"},
];

function getRandomSkills(words, count) {
  const shuffledSkills = [...words];

  for (let i = shuffledSkills.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledSkills[i], shuffledSkills[j]] = [shuffledSkills[j], shuffledSkills[i]];
  }

  return shuffledSkills.slice(0, count);
}

export default function HeroSkillShowcase({coreLabels = defaultCoreLabels}) {
  const [visibleSkills, setVisibleSkills] = useState(initialSkills);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setVisibleSkills(getRandomSkills(skillWords, skillSlots.length));
    }, 5600);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="hero-skill-showcase" aria-hidden="true">
      <div className="hero-skill-grid" />
      <div className="hero-skill-orbit hero-skill-orbit-one" />
      <div className="hero-skill-orbit hero-skill-orbit-two" />
      <div className="hero-skill-orbit hero-skill-orbit-three" />
      <div className="hero-skill-axis hero-skill-axis-horizontal" />
      <div className="hero-skill-axis hero-skill-axis-vertical" />
      <div className="hero-skill-core">
        <span>{coreLabels.build}</span>
        <strong>{coreLabels.ship}</strong>
        <span>{coreLabels.maintain}</span>
      </div>

      {skillSlots.map((slot, index) => (
        <span
          className={`hero-skill-chip hero-skill-chip-${slot.tone}`}
          key={slot.id}
          style={{
            "--skill-x": slot.x,
            "--skill-y": slot.y,
            "--skill-delay": slot.delay,
            "--skill-duration": slot.duration,
            "--skill-drift-x": slot.driftX,
            "--skill-drift-y": slot.driftY,
          }}
        >
          {visibleSkills[index]}
        </span>
      ))}
    </div>
  );
}
