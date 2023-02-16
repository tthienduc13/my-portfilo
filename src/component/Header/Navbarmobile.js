import React from "react";
import "../Header/Header.scss";
function Navbarmobile({ functionSetToggle, functionSetActive }) {
  const handleNav = () => {
    functionSetToggle(false);
    functionSetActive(false);
  };
  return (
    <>
      <nav className="navbar-mobile">
        <ul>
          <a href="#home" onClick={handleNav}>
            <li>Home</li>
          </a>
          <a href="#about" onClick={handleNav}>
            <li>About</li>
          </a>
          <a href="#projects" onClick={handleNav}>
            <li>Projects</li>
          </a>
          <a href="#contact" onClick={handleNav}>
            <li>Contact</li>
          </a>
        </ul>
        <div className="mobile-icon">
          <a href="https://www.facebook.com/thien.duc.1310" target="blank">
            {" "}
            <i class="fa-brands fa-square-facebook"></i>
          </a>
          <a>
            {" "}
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/tthienduc13" target="blank">
            {" "}
            <i class="fa-brands fa-square-github"></i>
          </a>
          <a href="mailto:nglethienduc@gmail.com">
            <i class="fa-solid fa-envelope"></i>
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbarmobile;
