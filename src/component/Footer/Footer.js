import React from "react";
import "../Footer/Footer.scss";
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer__container">
          <div className="copyright">
            <i class="fa-solid fa-copyright"></i>
            Powered by{" "}
            <a href="https://www.facebook.com/thien.duc.1310" target="blank">
              ducnlt
            </a>
          </div>
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
        </div>
      </div>
    </>
  );
}

export default Footer;
