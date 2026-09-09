import {useEffect, useRef, useState} from "react";
import {useTheme} from 'next-themes';
import {useIsEnglish} from "../hooks/useIsEnglish";
import {usePagePath} from "../hooks/usePagePath";
import InternalLink from "./InternalLink";
import {useRouter} from "next/router";
import {getAlternateInternalPath} from "../lib/getInternalPageLink";


export default function Header() {
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);
  const isEnglish = useIsEnglish();
  const {events} = useRouter();
  const headerRef = useRef(null);
  const mobileMenuButtonRef = useRef(null);

  useEffect(() => {
    document.body.classList.toggle("mobile-menu-open", isMobileMenuOpened);

    return () => {
      document.body.classList.remove("mobile-menu-open");
    };
  }, [isMobileMenuOpened]);

  // Keep focus inside the existing mobile overlay without changing its layout.
  useEffect(() => {
    if (!isMobileMenuOpened)
      return;

    const header = headerRef.current;
    const menuButton = mobileMenuButtonRef.current;
    const background = [...document.querySelectorAll("main.page-container, footer")];
    background.forEach(element => { element.inert = true; });
    // Some browsers do not focus buttons on pointer activation.
    if (!header.contains(document.activeElement)) menuButton.focus({preventScroll: true});

    // Stable while the menu is open: the ResizeObserver below closes it when the layout flips to desktop.
    const controls = [...header.querySelectorAll('a[href], button:not([disabled])')]
      .filter(control => control.getClientRects().length > 0);
    const first = controls[0];
    const last = controls.at(-1);

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsMobileMenuOpened(false);
      } else if (event.key === "Tab") {
        const focusOutside = !header.contains(document.activeElement);
        if (event.shiftKey && (document.activeElement === first || focusOutside)) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && (document.activeElement === last || focusOutside)) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    const observer = new ResizeObserver(() => {
      if (!menuButton.getClientRects().length) setIsMobileMenuOpened(false);
    });
    observer.observe(menuButton);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      observer.disconnect();
      document.removeEventListener("keydown", handleKeyDown);
      background.forEach(element => { element.inert = false; });
      if (menuButton.isConnected) {
        const focusTarget = menuButton.getClientRects().length
          ? menuButton
          : header.querySelector(".left-branding a");
        focusTarget?.focus({preventScroll: true});
      }
    };
  }, [isMobileMenuOpened]);

  useEffect(() => {
    const closeMenu = () => setIsMobileMenuOpened(false);
    events.on("routeChangeStart", closeMenu);
    events.on("hashChangeStart", closeMenu);
    return () => {
      events.off("routeChangeStart", closeMenu);
      events.off("hashChangeStart", closeMenu);
    };
  }, [events]);

  return (
    <div
      ref={headerRef}
      className={`header-container${isMobileMenuOpened ? " is-mobile-menu-open" : ""}`}
      role={isMobileMenuOpened ? "dialog" : undefined}
      aria-modal={isMobileMenuOpened ? true : undefined}
      aria-labelledby={isMobileMenuOpened ? "mobile-menu-title" : undefined}
    >
      {!isMobileMenuOpened && <a href="#main-content" className="skip-link">
        {isEnglish ? "Skip to main content" : "Aller au contenu principal"}
      </a>}
      <header>
        <nav aria-label={isEnglish ? "Main navigation" : "Navigation principale"}>
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
        <ToggleMobileMenuButton
          ref={mobileMenuButtonRef}
          isMobileMenuOpened={isMobileMenuOpened}
          setIsMobileMenuOpened={setIsMobileMenuOpened}
        />
      </header>
      <MobileMenu isMobileMenuOpened={isMobileMenuOpened}/>
    </div>
  );
}


function MobileMenu({isMobileMenuOpened}) {
  const isEnglish = useIsEnglish();
  if (!isMobileMenuOpened)
    return null;

  return (
    <nav id="mobile-menu" className="mobile-menu do-not-display-on-desktop" aria-label={isEnglish ? "Mobile navigation" : "Navigation mobile"}>
      <strong id="mobile-menu-title">Menu</strong>
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
  const {resolvedTheme: theme, setTheme} = useTheme();
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
      aria-pressed={theme === "dark"}
      type="button"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {
        theme === "light" ? (
          <div>
            <svg aria-hidden="true" className="turn-on-dark-mode" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
            </svg>
            {shouldDisplayText && <span>{isEnglish ? <>Dark&nbsp;theme</> : <>Thème&nbsp;foncé</>}</span>}
          </div>
        ) : (
          <div>
            <svg aria-hidden="true" className="turn-on-light-mode" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
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
  const {push} = useRouter();
  const path = usePagePath();
  const isEnglish = useIsEnglish();

  const toggleLang = () => {
    push(getAlternateInternalPath(path));
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


function ToggleMobileMenuButton({ref, isMobileMenuOpened, setIsMobileMenuOpened}) {
  const isEnglish = useIsEnglish();

  const toggleIsOpen = () => {
    setIsMobileMenuOpened(prevState => !prevState);
  };

  return (
    <button
      ref={ref}
      className="toggle-mobile-menu-button"
      aria-label={isEnglish ? "Toggle mobile menu" : "Ouvrir ou fermer le menu mobile"}
      aria-controls="mobile-menu"
      aria-expanded={isMobileMenuOpened}
      type="button"
      onClick={toggleIsOpen}
    >
      {isMobileMenuOpened ? (
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="m24 20.188-8.315-8.209 8.2-8.282L20.188 0l-8.212 8.318L3.666.115 0 3.781l8.321 8.24-8.206 8.313L3.781 24l8.237-8.318 8.285 8.203z"/>
        </svg>
      ) : (
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M24 6H0V2h24v4zm0 4H0v4h24v-4zm0 8H0v4h24v-4z"/>
        </svg>
      )}
    </button>
  );
}
