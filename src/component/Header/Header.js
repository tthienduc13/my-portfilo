import React from "react";
import "../Header/Header.scss";
import { useState, useEffect, useRef } from "react";
import Navbarmobile from "./Navbarmobile";
import "@style/_global.scss";
function Header() {
  const ref = useRef();
  const [toggle, setToggle] = useState(false);
  const showMenu = () => {
    setToggle(!toggle);
    setActive(!acitve);
  };
  const [acitve, setActive] = useState(false);
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
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

  const navbarItems = [
    { href: "#home", title: "Home" },
    { href: "#about", title: "About" },
    { href: "#projects", title: "Projects" },
    { href: "#contact", title: "Contact" },
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
              <a href={item.href}>
                <li>{item.title}</li>
              </a>
            ))}
          </ul>
          {/* Icon for contact */}
          <div className="icon">
            {navbarIcons.map((item, index) => (
              <a href={item.href} target="blank">
                {" "}
                <i class={item.icon}></i>
              </a>
            ))}
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
