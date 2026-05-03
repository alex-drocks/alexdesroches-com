import {useEffect, useRef} from "react";

import styles from "../styles/contact.module.css";

const PARTICLE_COUNT = 120;
const GRID_SIZE = 18;

const colors = [0x0d6efd, 0x43f5ff, 0x8b5cf6, 0x20c997];

function createParticle(width, height, index) {
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    size: 2 + Math.random() * 4,
    speed: 10 + Math.random() * 30,
    drift: -12 + Math.random() * 24,
    phase: Math.random() * Math.PI * 2,
    color: colors[index % colors.length],
  };
}

function resizeCanvas(app, host) {
  const bounds = host.getBoundingClientRect();
  const width = Math.max(280, Math.round(bounds.width));
  const height = Math.max(220, Math.round(bounds.height));

  app.renderer.resize(width, height);

  return {width, height};
}

export default function ContactPixelSignal({kicker, title, description, status}) {
  const hostRef = useRef(null);

  useEffect(() => {
    const host = hostRef.current;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!host || reduceMotion) {
      return undefined;
    }

    let app;
    let frameGraphics;
    let resizeObserver;
    let destroyed = false;
    let appReady = false;
    let appDestroyed = false;
    let particles = [];
    let dimensions = {width: 0, height: 0};

    function destroyApp() {
      if (!app || !appReady || appDestroyed) {
        return;
      }

      appDestroyed = true;
      app.destroy(
        {removeView: true, releaseGlobalResources: true},
        {children: true, texture: true, textureSource: true}
      );
    }

    async function mountAnimation() {
      const {Application, Graphics} = await import("pixi.js");

      if (destroyed || !host.isConnected) {
        return;
      }

      app = new Application();
      dimensions = {
        width: Math.max(280, Math.round(host.getBoundingClientRect().width)),
        height: Math.max(220, Math.round(host.getBoundingClientRect().height)),
      };

      await app.init({
        width: dimensions.width,
        height: dimensions.height,
        backgroundAlpha: 0,
        antialias: false,
        autoDensity: true,
        resolution: Math.min(window.devicePixelRatio || 1, 2),
        preference: "webgl",
        powerPreference: "low-power",
      });

      appReady = true;

      if (destroyed) {
        destroyApp();
        return;
      }

      app.canvas.className = styles.pixelSignalCanvas;
      app.canvas.setAttribute("aria-hidden", "true");
      host.appendChild(app.canvas);

      app.ticker.maxFPS = 30;

      frameGraphics = new Graphics();
      app.stage.addChild(frameGraphics);

      particles = Array.from({length: PARTICLE_COUNT}, (_, index) => createParticle(dimensions.width, dimensions.height, index));

      const draw = (ticker) => {
        const time = performance.now() / 1000;
        const deltaSeconds = ticker.deltaMS / 1000;
        const {width, height} = dimensions;
        const centerX = width * (0.5 + Math.sin(time * 0.44) * 0.24);
        const centerY = height * (0.5 + Math.cos(time * 0.31) * 0.18);

        frameGraphics.clear();

        for (let x = -GRID_SIZE; x < width + GRID_SIZE; x += GRID_SIZE) {
          for (let y = -GRID_SIZE; y < height + GRID_SIZE; y += GRID_SIZE) {
            const distance = Math.hypot(x - centerX, y - centerY);
            const pulse = Math.max(0, 1 - distance / Math.max(width, height));
            const shimmer = (Math.sin(time * 2.1 + x * 0.05 + y * 0.04) + 1) * 0.5;
            const alpha = 0.035 + pulse * 0.22 + shimmer * 0.035;
            const size = 1.2 + pulse * 3;

            frameGraphics
              .rect(x, y, size, size)
              .fill({color: 0x43f5ff, alpha});
          }
        }

        particles.forEach((particle) => {
          particle.y -= particle.speed * deltaSeconds;
          particle.x += Math.sin(time + particle.phase) * particle.drift * deltaSeconds;

          if (particle.y < -12) {
            particle.y = height + 12;
            particle.x = Math.random() * width;
          }

          const alpha = 0.22 + Math.sin(time * 3 + particle.phase) * 0.12;

          frameGraphics
            .rect(particle.x, particle.y, particle.size, particle.size)
            .fill({color: particle.color, alpha});
        });

        for (let index = 0; index < 3; index += 1) {
          const y = (height * (0.24 + index * 0.22) + Math.sin(time * (0.8 + index * 0.1)) * 12);
          const xOffset = Math.sin(time * (0.6 + index * 0.18)) * width * 0.08;

          frameGraphics
            .moveTo(width * 0.12 + xOffset, y)
            .lineTo(width * 0.88 - xOffset, y + Math.cos(time + index) * 18)
            .stroke({width: 1, color: colors[index], alpha: 0.34});
        }

        for (let index = 0; index < 4; index += 1) {
          const radius = Math.min(width, height) * (0.22 + index * 0.1);
          frameGraphics
            .ellipse(centerX, centerY, radius * 1.35, radius)
            .stroke({width: 1, color: colors[index % colors.length], alpha: 0.09});
        }
      };

      app.ticker.add(draw);

      resizeObserver = new ResizeObserver(() => {
        if (!app || destroyed) {
          return;
        }

        dimensions = resizeCanvas(app, host);
        particles = Array.from({length: PARTICLE_COUNT}, (_, index) => createParticle(dimensions.width, dimensions.height, index));
      });
      resizeObserver.observe(host);
    }

    mountAnimation().catch(() => {
      destroyed = true;
    });

    return () => {
      destroyed = true;
      resizeObserver?.disconnect();

      destroyApp();
    };
  }, []);

  return (
    <aside className={styles.pixelSignal}>
      <div ref={hostRef} className={styles.pixelSignalCanvasHost}/>
      <div className={styles.pixelSignalContent}>
        <span className={styles.pixelSignalKicker}>{kicker}</span>
        <strong>{title}</strong>
        <p>{description}</p>
        <span className={styles.pixelSignalStatus}>{status}</span>
      </div>
    </aside>
  );
}
