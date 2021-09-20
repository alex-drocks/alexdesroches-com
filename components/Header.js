import Link from 'next/link';
import {useTheme} from 'next-themes';
import Tippy from '@tippyjs/react';


export default function Header() {
  return (
    <header>
      <NavBar/>
      <ToggleThemeColorsButton/>
    </header>
  );
}


function NavBar() {
  return (
    <nav>
      <div className="left-branding">
        <Link href="/"><a>Alexandre Desroches</a></Link>
      </div>
      <ul className="right-links">
        <li><Link href="/a-propos"><a>À propos</a></Link></li>
        <li><Link href="/programmation"><a>Programmation</a></Link></li>
        <li><Link href="/musique"><a>Musique</a></Link></li>
      </ul>
    </nav>
  );
}


function ToggleThemeColorsButton() {
  const {theme, setTheme} = useTheme();

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <button
      className="toggle-dark-mode-button"
      aria-label="Toggle Dark Mode Button"
      type="button"
      onClick={toggleTheme}
    >
      <Tippy content={"Activer le mode " + (theme === "light" ? "sombre" : "clair")}>
        {
          theme === "light" ? (
            <svg className="turn-on-dark-mode" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
            </svg>
          ) : (
            <svg className="turn-on-light-mode" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
            </svg>
          )
        }
      </Tippy>
    </button>
  );
}
