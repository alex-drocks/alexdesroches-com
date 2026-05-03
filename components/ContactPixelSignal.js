import {useEffect, useRef} from "react";

import styles from "../styles/contact.module.css";

const PARTICLE_COUNT = 36;
const colors = [0x0d6efd, 0x43f5ff, 0x20c997];

function createParticle(width, height, index) {
  const lane = (index % 3) + 1;

  return {
    x: Math.random() * width,
    y: (height / 4) * lane + (Math.random() - 0.5) * 10,
    size: 1.5 + Math.random() * 2,
    speed: 12 + Math.random() * 26,
    phase: Math.random() * Math.PI * 2,
    color: colors[index % colors.length],
  };
}

function getHostDimensions(host) {
  const bounds = host.getBoundingClientRect();

  return {
    width: Math.max(240, Math.round(bounds.width)),
    height: Math.max(64, Math.round(bounds.height)),
  };
}

export default function ContactPixelSignal() {
  const hostRef = useRef(null);

  useEffect(() => {
    const host = hostRef.current;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!host || reduceMotion) {
      return undefined;
    }

    let app;
    let signalGraphics;
    let resizeObserver;
    let destroyed = false;
    let appReady = false;
    let appDestroyed = false;
    let particles = [];
    let dimensions = getHostDimensions(host);

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

      app.ticker.maxFPS = 24;

      signalGraphics = new Graphics();
      app.stage.addChild(signalGraphics);

      particles = Array.from({length: PARTICLE_COUNT}, (_, index) => createParticle(dimensions.width, dimensions.height, index));

      const draw = (ticker) => {
        const time = performance.now() / 1000;
        const deltaSeconds = ticker.deltaMS / 1000;
        const {width, height} = dimensions;
        const centerY = height / 2;

        signalGraphics.clear();

        [0.34, 0.5, 0.66].forEach((verticalPosition, index) => {
          const y = height * verticalPosition + Math.sin(time * 0.8 + index) * 2;
          const alpha = 0.08 + index * 0.035;

          signalGraphics
            .moveTo(width * 0.04, y)
            .lineTo(width * 0.96, y)
            .stroke({width: 1, color: colors[index], alpha});
        });

        const pulseX = width * ((time * 0.08) % 1);
        signalGraphics
          .rect(pulseX - width * 0.12, centerY - 1, width * 0.24, 2)
          .fill({color: 0x43f5ff, alpha: 0.16});

        particles.forEach((particle) => {
          particle.x += particle.speed * deltaSeconds;
          particle.y += Math.sin(time * 1.6 + particle.phase) * deltaSeconds * 5;

          if (particle.x > width + 8) {
            particle.x = -8;
            particle.y = createParticle(width, height, 0).y;
          }

          const alpha = 0.12 + Math.sin(time * 2.4 + particle.phase) * 0.07;

          signalGraphics
            .rect(particle.x, particle.y, particle.size, particle.size)
            .fill({color: particle.color, alpha});
        });
      };

      app.ticker.add(draw);

      resizeObserver = new ResizeObserver(() => {
        if (!app || destroyed) {
          return;
        }

        dimensions = getHostDimensions(host);
        app.renderer.resize(dimensions.width, dimensions.height);
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

  return <div ref={hostRef} className={styles.pixelSignal} aria-hidden="true"/>;
}
