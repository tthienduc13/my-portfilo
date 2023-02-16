import React from "react";
import "../Banner/Banner.scss";
function Banner() {
  return (
    <>
      <div className="banner" id="home">
        <div className="banner__container">
          <div className="banner__container-content">
            <div className="banner__container-intro">
              <div className="static-text">Hy!</div>
              <div className="static-text">
                I'm <span>Davis Nguyen</span>
              </div>
            </div>
            <div className="banner__container-live-text">
              <div className="static-text">I'm a</div>
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
            <img src="https://res.cloudinary.com/de41uvd76/image/upload/v1676564043/qdyar1ai2l1afdpabfmy.png"></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
