import React from "react";
import "../Header/Header.scss";
import { useState, useEffect, useRef } from "react";
import Navbarmobile from "./Navbarmobile";
import { useTranslation } from "react-i18next";
import "@style/_global.scss";
function Header() {
  const ref = useRef();
  const [toggle, setToggle] = useState(false);
  const [langToggle, setLangToggle] = useState(false);
  const showMenu = () => {
    setToggle(!toggle);
    setActive(!acitve);
  };
  const [acitve, setActive] = useState(false);
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (toggle && ref.current && !ref.current.contains(e.target)) {
        setToggle(!toggle);
        setActive(!acitve);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [toggle]);

  const [t, i18n] = useTranslation("global");
  const handleChangeLang = (lang) => {
    i18n.changeLanguage(lang);
    setLangToggle(!langToggle);
  };
  const handleShowLang = () => {
    setLangToggle(!langToggle);
    handleChangeLang();
  };

  const navbarItems = [
    { href: "#home", title: `${t("nav.home")}` },
    { href: "#about", title: `${t("nav.about")}` },
    { href: "#projects", title: `${t("nav.project")}` },
    { href: "#contact", title: `${t("nav.contact")}` },
  ];

  const navbarIcons = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/thien.duc.1310",
      icon: "fa-brands fa-square-facebook",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/nguyen-le-thien-duc-30aa03251/",
      icon: "fa-brands fa-linkedin",
    },
    {
      name: "Github",
      href: "https://github.com/tthienduc13",
      icon: "fa-brands fa-square-github",
    },
    {
      name: "Mail",
      href: "mailto:ducnltdev@gmail.com",
      icon: "fa-solid fa-envelope",
    },
  ];
  return (
    <>
      <div className="header" ref={ref}>
        <div className="header__container container">
          {/* Navbar */}
          <ul className="header__container-navbar">
            <div className="header__container-name">Davis Nguyen</div>
            {navbarItems.map((item, index) => (
              <>
                <a href={item.href}>
                  <li>{item.title}</li>
                </a>
              </>
            ))}
          </ul>
          {/* Icon for contact */}
          <div className="icon">
            {navbarIcons.map((item, index) => (
              <>
                <a href={item.href} target="blank">
                  {" "}
                  <i class={item.icon}></i>
                </a>
              </>
            ))}
            <p className="lang" onClick={handleShowLang}>
              <i class="fa-solid fa-language"></i>
              {langToggle && (
                <div className="langToggle">
                  <button onClick={() => handleChangeLang("en")}>
                    English
                  </button>
                  <button onClick={() => handleChangeLang("jp")}>日本語</button>
                </div>
              )}
            </p>
          </div>

          {/* Menu burger */}
          <div for="burger" class="burger" onClick={() => showMenu()}>
            <span
              style={{
                transform: acitve ? "rotate(45deg)" : "rotate(0deg)",
                left: acitve ? "5px" : "0",
              }}
            ></span>
            <span
              style={{
                width: acitve ? "0%" : "100%",
                transition: acitve ? "0s" : "0.35s",
              }}
            ></span>
            <span
              style={{
                transform: acitve ? "rotate(-45deg)" : "rotate(0deg)",
                left: acitve ? "5px" : "0",
                top: acitve ? "28px" : "90%",
              }}
            ></span>
          </div>
          {/* Navbar for mobile */}
          {toggle && (
            <Navbarmobile
              functionSetToggle={setToggle}
              functionSetActive={setActive}
              navbarItems={navbarItems}
              navbarIcons={navbarIcons}
            ></Navbarmobile>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
