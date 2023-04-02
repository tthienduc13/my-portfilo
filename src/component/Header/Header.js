import React from "react";
import "../Header/Header.scss";
import { useState, useEffect, useRef } from "react";
import Navbarmobile from "./Navbarmobile";
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

  return (
    <>
      <div className="header" ref={ref}>
        <div className="header__container">
          {/* Navbar */}
          <ul className="header__container-navbar">
            <div className="header__container-name">Davis Nguyen</div>
            <a href="#home">
              <li>Home</li>
            </a>
            <a href="#about">
              <li>About</li>
            </a>
            <a href="#projects">
              <li>Projects</li>
            </a>
            <a href="#contact">
              <li>Contact</li>
            </a>
          </ul>
          {/* Icon for contact */}
          <div className="icon">
            <a href="https://www.facebook.com/thien.duc.1310" target="blank">
              {" "}
              <i class="fa-brands fa-square-facebook"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/nguyen-le-thien-duc-30aa03251/"
              target="blank"
            >
              {" "}
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/tthienduc13" target="blank">
              {" "}
              <i class="fa-brands fa-square-github"></i>
            </a>
            <a href="mailto:ducnltdev@gmail.com">
              <i class="fa-solid fa-envelope"></i>
            </a>
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
            ></Navbarmobile>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
