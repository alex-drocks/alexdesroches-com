import dynamic from "next/dynamic";
import {useAuthContext} from "../../context/authContextProvider";
import {useEffect, useState} from "react";
import Tippy from "@tippyjs/react";

const AdminSelectUserAccount = dynamic(() => import('./AdminSelectUserAccount/AdminSelectUserAccount'), {ssr: false});
const SearchInput = dynamic(() => import('./SearchInput/SearchInput'), {ssr: false});
const Options = dynamic(() => import('./Options/Options'), {ssr: false});
const UserProfile = dynamic(() => import('./UserProfile/UserProfile'), {ssr: false});


// Component styles are in Header.css
export default function Header() {
  const {isLoadingAuth, user, isAdmin, userHasActiveLicense} = useAuthContext();
  const [saveBtnVisibility, setSaveBtnVisibility] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setSaveBtnVisibility(shouldShowSaveBtnInHeader()), 300);
    return () => {
      clearInterval(interval);
    };
  }, []);

  function shouldShowSaveBtnInHeader() {
    return Boolean(document.getElementById("bottom-save-pay-period-btn"));
  }

  return (
    <header>
      <div className="branding">
        <a className="branding--enterprise-name" href="https://finance-d.com">
          <img className="branding--logo"
               src="/icons/icon-128x128.png"
               width="50" height="50"
               alt="Logo de Finance D"/>
        </a>
        <div className="branding--text-container">
          <span><a className="branding--enterprise-name" href="https://finance-d.com">Finance&nbsp;D</a></span>
          <span>
            <a className="branding--app-name" href="https://finance-d.com/periodes-de-payes-simplifiees/">
              Périodes de payes simplifiées
            </a></span>
        </div>
      </div>

      {!isLoadingAuth && user && isAdmin && userHasActiveLicense && <AdminSelectUserAccount/>}

      {
        !isLoadingAuth && user && (
          <nav>
            {!isLoadingAuth && user && userHasActiveLicense && <SearchInput/>}

            <div className="nav-buttons">
              <Tippy content="Sauvegarder la période de paye (raccourci&nbsp;: Ctrl + S).">
                <button
                  id="header--save-button"
                  style={{visibility: saveBtnVisibility ? "visible" : "hidden"}}
                  onClick={() => {
                    document.getElementById("bottom-save-pay-period-btn").click();
                    setSaveBtnVisibility(false);
                  }}
                >
                  <pre>Enregistrer</pre>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M15.003 3H18v5h-2.997V3zM24 4v20H0V0h20l4 4zM5 9h14V2H5v7zm16 4H3v9h18v-9z"/>
                  </svg>
                </button>
              </Tippy>

              {userHasActiveLicense && <Options/>}

              <UserProfile
                displayName={user.displayName}
                email={user.email}
                imgSrc={user.photoURL}
                userHasActiveLicense={userHasActiveLicense}
              />
            </div>
          </nav>
        )
      }
    </header>
  );
}
