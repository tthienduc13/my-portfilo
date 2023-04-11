import React from "react";
import "../Footer/Footer.scss";
import "@style/_global.scss";
const info = [
  {
    header: "Links",
    content: [
      { href: "#home", title: "Home" },
      { href: "#about", title: "About" },
      { href: "#projects", title: "Projects" },
      { href: "#contact", title: "Contact" },
    ],
  },
  {
    header: "Contact",
    content: [
      { href: "https://github.com/tthienduc13", title: "Github" },
      { href: "https://www.facebook.com/thien.duc.1310", title: "Facebook" },
      {
        href: "https://www.linkedin.com/in/nguyen-le-thien-duc-30aa03251/",
        title: "LinkedIn",
      },
      { href: "mailto:ducnltdev@gmail.com", title: "Gmail" },
    ],
  },
];
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer__container container">
          <div className="footer__container-copyright">
            <div className="copyright-title">DucNLT.dev</div>
            <div className="copyright-desc">
              © 2023, Built and designed by DucNLT
            </div>
          </div>
          <div className="footer__container-content">
            {info.map((info, index) => (
              <div className="content__item">
                <div className="content__item-title">{info.header}</div>
                {info.content.map((content, index) => (
                  <a className="content__item-desc" href={content.href}>
                    {content.title}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
