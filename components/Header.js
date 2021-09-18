import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div className="branding">
        <Link href="/"><a>Alexandre Desroches</a></Link>
      </div>
      <nav className="links">
        <Link href="/a-propos"><a>À propos</a></Link>
        <Link href="/programmation"><a>Programmation</a></Link>
        <Link href="/musique"><a>Musique</a></Link>
      </nav>
    </header>
  );
}
