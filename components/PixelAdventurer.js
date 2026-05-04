import styles from "../styles/contact.module.css";

function PixelAdventurer() {
  return (
    <div className={styles.pixelScene} aria-hidden="true">
      <div className={styles.pixelTrack}>
        <span className={styles.pixelShrub}/>
        <span className={styles.pixelCoin}/>
        <span className={styles.pixelSparkleOne}/>
        <span className={styles.pixelSparkleTwo}/>
        <div className={styles.pixelBubble}>CSS is cool</div>
        <div className={styles.pixelWalker}>
          <span className={styles.pixelShadow}/>
          <svg
            className={styles.pixelRanger}
            viewBox="0 0 64 88"
            xmlns="http://www.w3.org/2000/svg"
            shapeRendering="crispEdges"
            focusable="false"
          >
            <g className={styles.pixelCapeLayer}>
              <rect x="16" y="30" width="12" height="38" fill="#2a6d31"/>
              <rect x="8" y="40" width="12" height="22" fill="#245b2c"/>
              <rect x="20" y="56" width="8" height="22" fill="#1f4f28"/>
            </g>

            <g>
              <rect x="16" y="20" width="36" height="8" fill="#335f16"/>
              <rect x="20" y="12" width="24" height="8" fill="#3f781e"/>
              <rect x="24" y="4" width="20" height="8" fill="#4f8d26"/>
              <rect x="44" y="8" width="8" height="8" fill="#335f16"/>
              <rect x="48" y="4" width="4" height="8" fill="#9b5a21"/>
              <rect x="52" y="0" width="8" height="4" fill="#c0762c"/>
              <rect x="56" y="4" width="6" height="4" fill="#7c431b"/>
              <rect x="40" y="16" width="8" height="8" fill="#2c5415"/>
            </g>

            <g>
              <rect x="22" y="24" width="24" height="20" fill="#d8a15f"/>
              <rect x="18" y="28" width="8" height="16" fill="#4a3524"/>
              <rect x="22" y="24" width="24" height="8" fill="#5a3d28"/>
              <rect x="22" y="32" width="4" height="10" fill="#6b4a31"/>
              <rect x="30" y="34" width="4" height="4" fill="#1f1712"/>
              <rect x="42" y="34" width="4" height="4" fill="#1f1712"/>
              <rect x="36" y="40" width="8" height="4" fill="#b77b48"/>
              <rect x="28" y="44" width="14" height="8" fill="#efd0a0"/>
            </g>

            <g className={styles.pixelArmBack}>
              <rect x="10" y="46" width="10" height="20" fill="#bd8759"/>
              <rect x="6" y="62" width="10" height="10" fill="#e0b07a"/>
              <rect x="6" y="58" width="10" height="6" fill="#3f781e"/>
            </g>

            <g>
              <rect x="20" y="44" width="28" height="30" fill="#4f8d26"/>
              <rect x="24" y="44" width="20" height="8" fill="#69a83a"/>
              <rect x="16" y="46" width="12" height="14" fill="#3f781e"/>
              <rect x="44" y="46" width="12" height="14" fill="#3f781e"/>
              <rect x="28" y="54" width="4" height="4" fill="#2f6119"/>
              <rect x="28" y="64" width="4" height="4" fill="#2f6119"/>
              <rect x="18" y="72" width="32" height="6" fill="#71421f"/>
              <rect x="30" y="72" width="12" height="8" fill="#4d2b18"/>
              <rect x="34" y="78" width="8" height="8" fill="#7c1f17"/>
            </g>

            <g className={styles.pixelArmFront}>
              <rect x="46" y="48" width="10" height="20" fill="#bd8759"/>
              <rect x="50" y="64" width="10" height="10" fill="#e0b07a"/>
              <rect x="48" y="58" width="10" height="6" fill="#3f781e"/>
            </g>

            <g className={styles.pixelBow}>
              <rect x="8" y="18" width="4" height="54" fill="#7a4a27"/>
              <rect x="12" y="14" width="4" height="8" fill="#9b6135"/>
              <rect x="4" y="68" width="4" height="8" fill="#5f371f"/>
              <rect x="12" y="42" width="20" height="4" fill="#e7e0c8"/>
              <rect x="24" y="46" width="4" height="4" fill="#e7e0c8"/>
              <rect x="28" y="50" width="4" height="4" fill="#e7e0c8"/>
            </g>

            <g className={styles.pixelLegOne}>
              <rect x="22" y="76" width="10" height="8" fill="#6b3f24"/>
              <rect x="18" y="84" width="14" height="4" fill="#3f781e"/>
            </g>

            <g className={styles.pixelLegTwo}>
              <rect x="40" y="76" width="10" height="8" fill="#6b3f24"/>
              <rect x="40" y="84" width="16" height="4" fill="#3f781e"/>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default PixelAdventurer;
