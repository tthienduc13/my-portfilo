import React from "react";
import "../Header/Header.scss";
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
        </div>
      </nav>
    </>
  );
}

export default Navbarmobile;
