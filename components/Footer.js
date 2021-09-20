export default function Footer() {
  return (
    <footer>
      <div className="content">
        <div className="copyright-container">
          <svg className="anchor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M16.949 16.132h2.332C18.189 17.86 15.676 19.77 13 19.984V11h3V9h-3V7.897c0-2.39 2-2.619 2-4.897 0-1.654-1.346-3-3-3S9 1.346 9 3c0 2.297 2 2.487 2 4.897V9H8v2h3v9c-2.639-.18-5.133-2.053-6.281-3.868h2.332L2 13v5.912l1.269-1.8C5.971 21.615 9.648 21.417 12 24c2.352-2.583 6.029-2.385 8.731-6.889l1.269 1.8V13l-5.051 3.132zM11 3c0-.551.449-1 1-1s1 .449 1 1-.448 1-1 1-1-.449-1-1z"/>
          </svg>
          <pre className="copyright">
          Design&nbsp;et&nbsp;conception ©&nbsp;<span>{new Date().getFullYear()}</span>&nbsp;Alexandre&nbsp;Desroches
        </pre>
        </div>
      </div>
      <svg className="background" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 150">
        <path d="m0 61 40-1.2c40-1.1 120-3.5 200 3s160 21.9 240 23.5C560 88 640 76 720 75s160 9 200 14l40 5v57H0Z"
              fill="#d7d7d7"/>
        <path
          d="m0 110 40-5c40-5 120-15 200-17.3 80-2.4 160 3 240 10.3 80 7.3 160 16.7 240 17.2s160-7.9 200-12l40-4.2v52H0Z"
          fill="#06f"/>
      </svg>
    </footer>
  );
};
