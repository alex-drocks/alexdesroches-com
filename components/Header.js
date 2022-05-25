import {useEffect, useState} from "react";
import {useTheme} from 'next-themes';
import ActiveLink from './ActiveLink'
import {useIsEnglish} from "../hooks/useIsEnglish";
import InternalLink from "./InternalLink";
import {useLocalStorage} from "../hooks/useLocalStorage";
import {useRouter} from "next/router";
import getInternalPageLink from "../lib/getInternalPageLink";


export default function Header() {
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);
  return (
    <div className="header-container">
      <header>
        <nav>
          <h1 className="left-branding">
            <InternalLink
              isActiveLink={true}
              page="index"
            >
              Alexandre Desroches
            </InternalLink>
          </h1>
          <ul className="page-links do-not-display-on-mobile">
            <MainNavLinks/>
          </ul>
        </nav>
        <ToggleLanguageButton shouldDisplayText={true}/>
        <ToggleThemeColorsButton className="do-not-display-on-mobile"/>
        <ToggleMobileMenuButton isMobileMenuOpened={isMobileMenuOpened} setIsMobileMenuOpened={setIsMobileMenuOpened}/>
      </header>
      <MobileMenu isMobileMenuOpened={isMobileMenuOpened}/>
    </div>
  );
}


function MobileMenu({isMobileMenuOpened}) {
  const isEnglish = useIsEnglish()

  if (!isMobileMenuOpened)
    return null;

  return (
    <nav className="mobile-menu do-not-display-on-desktop">
      <strong>
        {isEnglish ? <>Navigation Menu</> : <>Menu de navigation</>}
      </strong>
      <ul className="page-links">
        <li>
          <InternalLink
            isActiveLink={true}
            page="index"
          >
            {isEnglish ? <>Home Page</> : <>Page principale</>}
          </InternalLink>
        </li>
        <MainNavLinks/>
      </ul>
      <br/>
      <ToggleThemeColorsButton shouldDisplayText={true}/>
    </nav>
  );
}


function MainNavLinks() {
  const isEnglish = useIsEnglish()
  if (isEnglish) {
    return (
      <>
        <li>
          <InternalLink
            isActiveLink={true}
            page="programming"
          >
            Programming Services
          </InternalLink>
        </li>
        <li>
          <InternalLink
            isActiveLink={true}
            page="about"
          >
            About
          </InternalLink>
        </li>
        <li>
          <InternalLink
            isActiveLink={true}
            page="contact"
          >
            Contact
          </InternalLink>
        </li>
      </>
    )
  }

  return (
    <>
      <li>
        <InternalLink
          isActiveLink={true}
          page="programming"
        >
          Services de programmation
        </InternalLink>
      </li>
      <li>
        <InternalLink
          isActiveLink={true}
          page="about"
        >
          À&nbsp;propos
        </InternalLink>
      </li>
      <li>
        <InternalLink
          isActiveLink={true}
          page="contact"
        >
          Contact
        </InternalLink>
      </li>
    </>
  );
}


function ToggleThemeColorsButton({className = "", shouldDisplayText = false}) {
  const [mounted, setMounted] = useState(false);
  const {theme, setTheme} = useTheme();

  const isEnglish = useIsEnglish()

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button
        className={"toggle-button " + className}
        aria-label="Toggle Dark Mode Button"
        type="button"
      />
    );
  }

  return (
    <button
      className={"toggle-button " + className}
      aria-label="Toggle Dark Mode Button"
      type="button"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {
        theme === "light" ? (
          <div>
            <svg className="turn-on-dark-mode" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
            </svg>
            {shouldDisplayText && <span>{isEnglish ? <>Dark&nbsp;Theme</> : <>Thème&nbsp;foncé</>}</span>}
          </div>
        ) : (
          <div>
            <svg className="turn-on-light-mode" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
            </svg>
            {shouldDisplayText && <span>{isEnglish ? <>Light&nbsp;Theme</> : <>Thème&nbsp;foncé</>}</span>}
          </div>
        )
      }
    </button>
  );
}

function ToggleLanguageButton({className = "", shouldDisplayText = false}) {
  const router = useRouter()
  const isEnglish = useIsEnglish()

  const toggleLang = () => {
    router.push(isEnglish ? "/" : "/en/")
  }

  return (
    <button
      className={"toggle-button language" + className}
      aria-label="Toggle Website Language"
      type="button"
      onClick={toggleLang}
    >
      {isEnglish ? "FR" : "EN"}
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
