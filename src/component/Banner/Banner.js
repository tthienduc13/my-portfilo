import React from "react";
import "../Banner/Banner.scss";
import BlueBg from "@icons/BlueBg.svg";
import "@style/_global.scss";
import { useTranslation } from "react-i18next";
function Banner() {
  const [t, i18n] = useTranslation("global");
  return (
    <>
      <div className="banner" id="home">
        <div className="banner__container container">
          <div className="banner__container-content">
            <div className="banner__container-intro">
              <div className="static-text">{t("banner.title")}!</div>
              <div className="static-text">
                {t("banner.staticText1")} <span>Davis Nguyen</span>
              </div>
            </div>
            <div className="banner__container-live-text">
              <div className="static-text">{t("banner.staticText2")}</div>
              <ul className="dynamic-texts">
                <li>
                  <span>Designer</span>
                </li>
                <li>
                  <span>Developer</span>
                </li>
                <li>
                  <span>Freelancer</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="banner__container-img">
            <img className="blue-bg" src={BlueBg}></img>
            <img src={require("@img/profileImg.png")}></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
