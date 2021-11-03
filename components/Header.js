import {useEffect, useState} from "react";
import {useTheme} from 'next-themes';
import ActiveLink from './ActiveLink'


export default function Header() {
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);
  return (
    <div className="header-container">
      <header>
        <nav>
          <h1 className="left-branding">
            <ActiveLink href="/"><a>Alexandre Desroches</a></ActiveLink>
          </h1>
          <ul className="page-links do-not-display-on-mobile">
            <MainNavLinks/>
          </ul>
        </nav>
        <ToggleThemeColorsButton/>
        <ToggleMobileMenuButton isMobileMenuOpened={isMobileMenuOpened} setIsMobileMenuOpened={setIsMobileMenuOpened}/>
      </header>
      <MobileMenu isMobileMenuOpened={isMobileMenuOpened}/>
    </div>
  )
    ;
}


function MobileMenu({isMobileMenuOpened}) {
  if (!isMobileMenuOpened)
    return null;

  return (
    <nav className="mobile-menu do-not-display-on-desktop">
      <ul className="page-links">
        <li><ActiveLink href="/"><a>Page principale</a></ActiveLink></li>
        <MainNavLinks/>
      </ul>
    </nav>
  );
}


function MainNavLinks() {
  return (<>
    <li><ActiveLink href="/programmation/"><a>Services de programmation</a></ActiveLink></li>
    <li><ActiveLink href="/contact/"><a>Contact</a></ActiveLink></li>
    <li><ActiveLink href="/a-propos/"><a>À&nbsp;propos</a></ActiveLink></li>
  </>);
}


function ToggleThemeColorsButton() {
  const [mounted, setMounted] = useState(false);
  const {theme, setTheme} = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

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
    </button>
  );
}


function ToggleMobileMenuButton({isMobileMenuOpened, setIsMobileMenuOpened}) {

  const toggleIsOpen = () => {
    setIsMobileMenuOpened(prevState => !prevState);
  };

  return (
    <button
      className="toggle-mobile-menu-button"
      aria-label="Toggle Mobile Menu Button"
      type="button"
      onClick={toggleIsOpen}
    >
      {isMobileMenuOpened ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="m24 20.188-8.315-8.209 8.2-8.282L20.188 0l-8.212 8.318L3.666.115 0 3.781l8.321 8.24-8.206 8.313L3.781 24l8.237-8.318 8.285 8.203z"/>
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M24 6H0V2h24v4zm0 4H0v4h24v-4zm0 8H0v4h24v-4z"/>
        </svg>
      )}
    </button>
  );
}
