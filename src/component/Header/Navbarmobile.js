import React from "react";
import "../Header/Header.scss";
import { useState } from "react";
import { useTranslation } from "react-i18next";
function Navbarmobile({
  functionSetToggle,
  functionSetActive,
  navbarItems,
  navbarIcons,
}) {
  const handleBurger = () => {
    functionSetToggle(false);
    functionSetActive(false);
  };
  const [t, i18n] = useTranslation("global");
  const [langToggle, setLangToggle] = useState(false);

  const handleChangeLang = (lang) => {
    i18n.changeLanguage(lang);
    setLangToggle(!langToggle);
  };
  const handleShowLang = () => {
    setLangToggle(!langToggle);
    handleChangeLang();
  };
  return (
    <>
      <nav className="navbar-mobile">
        <ul>
          {navbarItems.map((item, index) => (
            <a href={item.href} onClick={handleBurger}>
              <li>{item.title}</li>
            </a>
          ))}
        </ul>
        <div className="mobile-icon">
          {navbarIcons.map((item, index) => (
            <a href={item.href} target="blank">
              {" "}
              <i class={item.icon}></i>
            </a>
          ))}
          <p className="lang" onClick={handleShowLang}>
            <i class="fa-solid fa-language"></i>
            {langToggle && (
              <div className="langToggle">
                <button onClick={() => handleChangeLang("en")}>English</button>
                <button onClick={() => handleChangeLang("jp")}>日本語</button>
              </div>
            )}
          </p>
        </div>
      </nav>
    </>
  );
}

export default Navbarmobile;
