import {useEffect, useState} from "react";
import {useTheme} from 'next-themes';
import {useIsEnglish} from "../hooks/useIsEnglish";
import InternalLink from "./InternalLink";
import {useRouter} from "next/router";
import {getAlternateInternalPath} from "../lib/getInternalPageLink";


export default function Header() {
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("mobile-menu-open", isMobileMenuOpened);

    return () => {
      document.body.classList.remove("mobile-menu-open");
    };
  }, [isMobileMenuOpened]);

  return (
    <div className={`header-container${isMobileMenuOpened ? " is-mobile-menu-open" : ""}`}>
      <header>
        <nav>
          <div className="left-branding">
            <InternalLink
              isActiveLink={true}
              page="index"
            >
              Alex Desroches
            </InternalLink>
          </div>
          <ul className="page-links do-not-display-on-mobile">
            <HomeNavLink/>
            <MainNavLinks/>
          </ul>
        </nav>
        <ToggleLanguageButton/>
        <ToggleThemeColorsButton className="do-not-display-on-mobile"/>
        <ToggleMobileMenuButton isMobileMenuOpened={isMobileMenuOpened} setIsMobileMenuOpened={setIsMobileMenuOpened}/>
      </header>
      <MobileMenu isMobileMenuOpened={isMobileMenuOpened}/>
    </div>
  );
}


function MobileMenu({isMobileMenuOpened}) {
  if (!isMobileMenuOpened)
    return null;

  return (
    <nav id="mobile-menu" className="mobile-menu do-not-display-on-desktop">
      <strong>Menu</strong>
      <ul className="page-links">
        <HomeNavLink/>
        <MainNavLinks/>
      </ul>
      <div className="mobile-menu-actions">
        <ToggleThemeColorsButton shouldDisplayText={true}/>
      </div>
    </nav>
  );
}


function HomeNavLink() {
  const isEnglish = useIsEnglish()

  return (
    <li>
      <InternalLink
        isActiveLink={true}
        page="index"
      >
        {isEnglish ? <>Home</> : <>Accueil</>}
      </InternalLink>
    </li>
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
  const ariaLabel = isEnglish ? "Toggle color theme" : "Activer ou désactiver le thème foncé";

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button
        className={"toggle-button " + className}
        aria-label={ariaLabel}
        aria-hidden="true"
        disabled
        tabIndex={-1}
        type="button"
      />
    );
  }

  return (
    <button
      className={"toggle-button " + className}
      aria-label={ariaLabel}
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
            {shouldDisplayText && <span>{isEnglish ? <>Dark&nbsp;theme</> : <>Thème&nbsp;foncé</>}</span>}
          </div>
        ) : (
          <div>
            <svg className="turn-on-light-mode" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
              <path
                d="M565-395q35-35 35-85t-35-85q-35-35-85-35t-85 35q-35 35-35 85t35 85q35 35 85 35t85-35Zm-226.5 56.5Q280-397 280-480t58.5-141.5Q397-680 480-680t141.5 58.5Q680-563 680-480t-58.5 141.5Q563-280 480-280t-141.5-58.5ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z"/>
            </svg>
            {shouldDisplayText && <span>{isEnglish ? <>Light&nbsp;theme</> : <>Thème&nbsp;clair</>}</span>}
          </div>
        )
      }
    </button>
  );
}

function ToggleLanguageButton({className = ""}) {
  const { push, asPath } = useRouter();
  const isEnglish = useIsEnglish();

  const toggleLang = () => {
    push(getAlternateInternalPath(asPath));
  };

  return (
    <button
      className={`toggle-button language${className ? ` ${className}` : ""}`}
      aria-label={isEnglish ? "View this site in French" : "Afficher le site en anglais"}
      type="button"
      onClick={toggleLang}
    >
      {isEnglish ? "FR" : "EN"}
    </button>
  );
}


function ToggleMobileMenuButton({isMobileMenuOpened, setIsMobileMenuOpened}) {
  const isEnglish = useIsEnglish();

  const toggleIsOpen = () => {
    setIsMobileMenuOpened(prevState => !prevState);
  };

  return (
    <button
      className="toggle-mobile-menu-button"
      aria-label={isEnglish ? "Toggle mobile menu" : "Ouvrir ou fermer le menu mobile"}
      aria-controls="mobile-menu"
      aria-expanded={isMobileMenuOpened}
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
