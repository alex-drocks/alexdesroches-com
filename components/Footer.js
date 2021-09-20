export default function Footer() {
  return (
    <footer>
      <div className="content">
        <pre className="copyright">© <span>{new Date().getFullYear()}</span> Alexandre Desroches</pre>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 150"><path d="m0 61 40-1.2c40-1.1 120-3.5 200 3s160 21.9 240 23.5C560 88 640 76 720 75s160 9 200 14l40 5v57H0Z" fill="#d7d7d7"/><path d="m0 110 40-5c40-5 120-15 200-17.3 80-2.4 160 3 240 10.3 80 7.3 160 16.7 240 17.2s160-7.9 200-12l40-4.2v52H0Z" fill="#06f"/></svg>
    </footer>
  );
};
